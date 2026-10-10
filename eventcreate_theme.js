const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const replacements = [
    // Backgrounds
    { match: /bg-stone-950\/80/g, replace: 'bg-white/90 backdrop-blur-md' },
    { match: /bg-stone-950\/60/g, replace: 'bg-white/80' },
    { match: /bg-stone-950/g, replace: 'bg-gray-50' },
    { match: /bg-stone-900\/60/g, replace: 'bg-white' },
    { match: /bg-stone-900\/40/g, replace: 'bg-white' },
    { match: /bg-stone-900/g, replace: 'bg-white' },
    { match: /bg-stone-800\/80/g, replace: 'border-gray-200' },
    { match: /bg-stone-800\/60/g, replace: 'border-gray-200' },
    { match: /bg-stone-800/g, replace: 'border-gray-200' },
    
    // Text colors
    { match: /text-white/g, replace: 'text-gray-900' },
    { match: /text-stone-100/g, replace: 'text-gray-900' },
    { match: /text-stone-200/g, replace: 'text-gray-800' },
    { match: /text-stone-300/g, replace: 'text-gray-600' },
    { match: /text-stone-400/g, replace: 'text-gray-500' },
    { match: /text-stone-500/g, replace: 'text-gray-400' },
    
    // Borders
    { match: /border-stone-800/g, replace: 'border-gray-200' },
    { match: /border-stone-700/g, replace: 'border-gray-300' },
    
    // Glowing orbs removal from Hero (we can just make them soft light shapes)
    { match: /from-amber-600\/25 via-orange-600\/20 to-red-400\/15/g, replace: 'from-blue-100 via-indigo-50 to-purple-50' },
    { match: /from-orange-600\/15 to-yellow-500\/10/g, replace: 'from-purple-100 to-blue-50' },
    { match: /linear-gradient\(rgba\(245,158,11,0\.4\)/g, replace: 'linear-gradient(rgba(0,0,0,0.05)' },
    { match: /opacity-\[0\.035\]/g, replace: 'opacity-[0.5]' },
    
    // Text Gradients -> Solid brand colors
    { match: /bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent/g, replace: 'text-blue-600' },
    
    // CTA Buttons
    { match: /bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 hover:from-orange-500 hover:to-yellow-400/g, replace: 'bg-blue-600 hover:bg-blue-700 text-white' },
    { match: /shadow-orange-600\/30 hover:shadow-orange-500\/50/g, replace: 'shadow-blue-600/20 hover:shadow-blue-500/30' },
    
    // Accents
    { match: /text-orange-400/g, replace: 'text-blue-600' },
    { match: /text-amber-400/g, replace: 'text-indigo-600' },
    { match: /text-yellow-400/g, replace: 'text-purple-600' },
    { match: /text-emerald-400/g, replace: 'text-emerald-600' },
    { match: /text-emerald-500/g, replace: 'text-emerald-500' },
    { match: /bg-emerald-500\/10/g, replace: 'bg-emerald-50' },
    { match: /border-emerald-500\/20/g, replace: 'border-emerald-200' },
    { match: /bg-orange-500\/10/g, replace: 'bg-blue-50' },
    { match: /border-orange-500\/20/g, replace: 'border-blue-200' },
    { match: /bg-amber-500\/10/g, replace: 'bg-indigo-50' },
    { match: /border-amber-500\/20/g, replace: 'border-indigo-200' },
    
    // Shadow updates for light theme
    { match: /shadow-2xl/g, replace: 'shadow-xl shadow-gray-200/50' },
];

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    replacements.forEach(({match, replace}) => {
        newContent = newContent.replace(match, replace);
    });
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated ' + file);
    }
});
