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
    { match: /bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-gray-900/g, replace: 'bg-[#5c45ff] hover:bg-indigo-500 text-white' },
    { match: /bg-indigo-600 text-gray-900/g, replace: 'bg-[#5c45ff] text-white' },
    { match: /bg-purple-600 text-gray-900/g, replace: 'bg-[#5c45ff] text-white' },
    { match: /bg-indigo-600\/90 text-gray-900/g, replace: 'bg-[#5c45ff] text-white' },
    { match: /bg-indigo-600 flex items-center justify-center text-gray-900/g, replace: 'bg-[#5c45ff] flex items-center justify-center text-white' },
    { match: /bg-indigo-600 hover:bg-indigo-500 text-gray-900/g, replace: 'bg-[#5c45ff] hover:bg-indigo-500 text-white' },
    { match: /bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-gray-900/g, replace: 'bg-[#5c45ff] hover:bg-indigo-500 text-white' }
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
