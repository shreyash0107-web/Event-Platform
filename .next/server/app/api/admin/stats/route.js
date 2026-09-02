"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/stats/route";
exports.ids = ["app/api/admin/stats/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Web_Dev_Event_Platform_with_Login_Payments_src_app_api_admin_stats_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/admin/stats/route.ts */ \"(rsc)/./src/app/api/admin/stats/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/stats/route\",\n        pathname: \"/api/admin/stats\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/stats/route\"\n    },\n    resolvedPagePath: \"C:\\\\Web Dev Event Platform with Login & Payments\\\\src\\\\app\\\\api\\\\admin\\\\stats\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Web_Dev_Event_Platform_with_Login_Payments_src_app_api_admin_stats_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/stats/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnN0YXRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnN0YXRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZzdGF0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDV2ViJTIwRGV2JTIwRXZlbnQlMjBQbGF0Zm9ybSUyMHdpdGglMjBMb2dpbiUyMCUyNiUyMFBheW1lbnRzJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDV2ViJTIwRGV2JTIwRXZlbnQlMjBQbGF0Zm9ybSUyMHdpdGglMjBMb2dpbiUyMCUyNiUyMFBheW1lbnRzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN1QztBQUNwSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50LXBsYXRmb3JtLWFwcC8/YjgzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxXZWIgRGV2IEV2ZW50IFBsYXRmb3JtIHdpdGggTG9naW4gJiBQYXltZW50c1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxzdGF0c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vc3RhdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi9zdGF0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vc3RhdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxXZWIgRGV2IEV2ZW50IFBsYXRmb3JtIHdpdGggTG9naW4gJiBQYXltZW50c1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFxzdGF0c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vc3RhdHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/admin/stats/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/admin/stats/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET() {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session || session.user?.role !== \"ADMIN\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Forbidden: Admin privileges required\"\n            }, {\n                status: 403\n            });\n        }\n        const [allTickets, totalUsers, totalEmails] = await Promise.all([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.ticket.findMany({\n                include: {\n                    user: true\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.count(),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.emailLog.count()\n        ]);\n        const paidTickets = allTickets.filter((t)=>t.status === \"PAID\");\n        const totalRevenueCents = paidTickets.reduce((acc, curr)=>acc + curr.priceInCents, 0);\n        const earlyBirdCount = paidTickets.filter((t)=>t.tier === \"EARLY_BIRD\").length;\n        const standardCount = paidTickets.filter((t)=>t.tier === \"STANDARD\").length;\n        const vipCount = paidTickets.filter((t)=>t.tier === \"VIP\").length;\n        const checkedInCount = paidTickets.filter((t)=>t.checkedIn).length;\n        const recentTickets = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.ticket.findMany({\n            take: 5,\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            include: {\n                user: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            stats: {\n                totalRevenue: (totalRevenueCents / 100).toFixed(2),\n                totalTicketsSold: paidTickets.length,\n                totalUsers,\n                emailsDispatched: totalEmails,\n                checkedInCount,\n                breakdown: {\n                    EARLY_BIRD: earlyBirdCount,\n                    STANDARD: standardCount,\n                    VIP: vipCount\n                }\n            },\n            recentTickets\n        });\n    } catch (error) {\n        console.error(\"Error fetching admin stats:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch admin stats\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hZG1pbi9zdGF0cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDTztBQUNUO0FBQ0g7QUFFL0IsTUFBTUksVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUwsZ0VBQWdCQSxDQUFDQyxrREFBV0E7UUFFbEQsSUFBSSxDQUFDSSxXQUFXQSxRQUFRQyxJQUFJLEVBQUVDLFNBQVMsU0FBUztZQUM5QyxPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXVDLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM1RjtRQUVBLE1BQU0sQ0FBQ0MsWUFBWUMsWUFBWUMsWUFBWSxHQUFHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQztZQUM5RGIsK0NBQU1BLENBQUNjLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO2dCQUFFQyxTQUFTO29CQUFFWixNQUFNO2dCQUFLO1lBQUU7WUFDakRKLCtDQUFNQSxDQUFDSSxJQUFJLENBQUNhLEtBQUs7WUFDakJqQiwrQ0FBTUEsQ0FBQ2tCLFFBQVEsQ0FBQ0QsS0FBSztTQUN0QjtRQUVELE1BQU1FLGNBQWNWLFdBQVdXLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFYixNQUFNLEtBQUs7UUFDMUQsTUFBTWMsb0JBQW9CSCxZQUFZSSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBU0QsTUFBTUMsS0FBS0MsWUFBWSxFQUFFO1FBRXJGLE1BQU1DLGlCQUFpQlIsWUFBWUMsTUFBTSxDQUFDLENBQUNDLElBQU1BLEVBQUVPLElBQUksS0FBSyxjQUFjQyxNQUFNO1FBQ2hGLE1BQU1DLGdCQUFnQlgsWUFBWUMsTUFBTSxDQUFDLENBQUNDLElBQU1BLEVBQUVPLElBQUksS0FBSyxZQUFZQyxNQUFNO1FBQzdFLE1BQU1FLFdBQVdaLFlBQVlDLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFTyxJQUFJLEtBQUssT0FBT0MsTUFBTTtRQUVuRSxNQUFNRyxpQkFBaUJiLFlBQVlDLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFWSxTQUFTLEVBQUVKLE1BQU07UUFFcEUsTUFBTUssZ0JBQWdCLE1BQU1sQywrQ0FBTUEsQ0FBQ2MsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDakRvQixNQUFNO1lBQ05DLFNBQVM7Z0JBQUVDLFdBQVc7WUFBTztZQUM3QnJCLFNBQVM7Z0JBQUVaLE1BQU07WUFBSztRQUN4QjtRQUVBLE9BQU9QLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFDdkJnQyxPQUFPO2dCQUNMQyxjQUFjLENBQUNqQixvQkFBb0IsR0FBRSxFQUFHa0IsT0FBTyxDQUFDO2dCQUNoREMsa0JBQWtCdEIsWUFBWVUsTUFBTTtnQkFDcENuQjtnQkFDQWdDLGtCQUFrQi9CO2dCQUNsQnFCO2dCQUNBVyxXQUFXO29CQUNUQyxZQUFZakI7b0JBQ1prQixVQUFVZjtvQkFDVmdCLEtBQUtmO2dCQUNQO1lBQ0Y7WUFDQUc7UUFDRjtJQUNGLEVBQUUsT0FBTzNCLE9BQU87UUFDZHdDLFFBQVF4QyxLQUFLLENBQUMsK0JBQStCQTtRQUM3QyxPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBOEIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbkY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50LXBsYXRmb3JtLWFwcC8uL3NyYy9hcHAvYXBpL2FkbWluL3N0YXRzL3JvdXRlLnRzPzlmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gXCJmb3JjZS1keW5hbWljXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuXG4gICAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGb3JiaWRkZW46IEFkbWluIHByaXZpbGVnZXMgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAzIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IFthbGxUaWNrZXRzLCB0b3RhbFVzZXJzLCB0b3RhbEVtYWlsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBwcmlzbWEudGlja2V0LmZpbmRNYW55KHsgaW5jbHVkZTogeyB1c2VyOiB0cnVlIH0gfSksXG4gICAgICBwcmlzbWEudXNlci5jb3VudCgpLFxuICAgICAgcHJpc21hLmVtYWlsTG9nLmNvdW50KCksXG4gICAgXSk7XG5cbiAgICBjb25zdCBwYWlkVGlja2V0cyA9IGFsbFRpY2tldHMuZmlsdGVyKCh0KSA9PiB0LnN0YXR1cyA9PT0gXCJQQUlEXCIpO1xuICAgIGNvbnN0IHRvdGFsUmV2ZW51ZUNlbnRzID0gcGFpZFRpY2tldHMucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIucHJpY2VJbkNlbnRzLCAwKTtcblxuICAgIGNvbnN0IGVhcmx5QmlyZENvdW50ID0gcGFpZFRpY2tldHMuZmlsdGVyKCh0KSA9PiB0LnRpZXIgPT09IFwiRUFSTFlfQklSRFwiKS5sZW5ndGg7XG4gICAgY29uc3Qgc3RhbmRhcmRDb3VudCA9IHBhaWRUaWNrZXRzLmZpbHRlcigodCkgPT4gdC50aWVyID09PSBcIlNUQU5EQVJEXCIpLmxlbmd0aDtcbiAgICBjb25zdCB2aXBDb3VudCA9IHBhaWRUaWNrZXRzLmZpbHRlcigodCkgPT4gdC50aWVyID09PSBcIlZJUFwiKS5sZW5ndGg7XG5cbiAgICBjb25zdCBjaGVja2VkSW5Db3VudCA9IHBhaWRUaWNrZXRzLmZpbHRlcigodCkgPT4gdC5jaGVja2VkSW4pLmxlbmd0aDtcblxuICAgIGNvbnN0IHJlY2VudFRpY2tldHMgPSBhd2FpdCBwcmlzbWEudGlja2V0LmZpbmRNYW55KHtcbiAgICAgIHRha2U6IDUsXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN0YXRzOiB7XG4gICAgICAgIHRvdGFsUmV2ZW51ZTogKHRvdGFsUmV2ZW51ZUNlbnRzIC8gMTAwKS50b0ZpeGVkKDIpLFxuICAgICAgICB0b3RhbFRpY2tldHNTb2xkOiBwYWlkVGlja2V0cy5sZW5ndGgsXG4gICAgICAgIHRvdGFsVXNlcnMsXG4gICAgICAgIGVtYWlsc0Rpc3BhdGNoZWQ6IHRvdGFsRW1haWxzLFxuICAgICAgICBjaGVja2VkSW5Db3VudCxcbiAgICAgICAgYnJlYWtkb3duOiB7XG4gICAgICAgICAgRUFSTFlfQklSRDogZWFybHlCaXJkQ291bnQsXG4gICAgICAgICAgU1RBTkRBUkQ6IHN0YW5kYXJkQ291bnQsXG4gICAgICAgICAgVklQOiB2aXBDb3VudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZWNlbnRUaWNrZXRzLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhZG1pbiBzdGF0czpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBhZG1pbiBzdGF0c1wiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJkeW5hbWljIiwiR0VUIiwic2Vzc2lvbiIsInVzZXIiLCJyb2xlIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYWxsVGlja2V0cyIsInRvdGFsVXNlcnMiLCJ0b3RhbEVtYWlscyIsIlByb21pc2UiLCJhbGwiLCJ0aWNrZXQiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJjb3VudCIsImVtYWlsTG9nIiwicGFpZFRpY2tldHMiLCJmaWx0ZXIiLCJ0IiwidG90YWxSZXZlbnVlQ2VudHMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwicHJpY2VJbkNlbnRzIiwiZWFybHlCaXJkQ291bnQiLCJ0aWVyIiwibGVuZ3RoIiwic3RhbmRhcmRDb3VudCIsInZpcENvdW50IiwiY2hlY2tlZEluQ291bnQiLCJjaGVja2VkSW4iLCJyZWNlbnRUaWNrZXRzIiwidGFrZSIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJzdGF0cyIsInRvdGFsUmV2ZW51ZSIsInRvRml4ZWQiLCJ0b3RhbFRpY2tldHNTb2xkIiwiZW1haWxzRGlzcGF0Y2hlZCIsImJyZWFrZG93biIsIkVBUkxZX0JJUkQiLCJTVEFOREFSRCIsIlZJUCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/admin/stats/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/signin\"\n    },\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_CLIENT_ID || \"mock-github-id\",\n            clientSecret: process.env.GITHUB_CLIENT_SECRET || \"mock-github-secret\",\n            allowDangerousEmailAccountLinking: true\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"mock-google-id\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"mock-google-secret\",\n            allowDangerousEmailAccountLinking: true\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            id: \"demo-login\",\n            name: \"Quick Demo Login\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                role: {\n                    label: \"Role\",\n                    type: \"text\"\n                },\n                name: {\n                    label: \"Name\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email) return null;\n                const email = credentials.email.toLowerCase().trim();\n                const role = credentials.role === \"ADMIN\" ? \"ADMIN\" : \"USER\";\n                const name = credentials.name || (role === \"ADMIN\" ? \"Shreyash Kumar (Admin)\" : \"Rahul (Attendee)\");\n                // Find or create user in SQLite database\n                let user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.findUnique({\n                    where: {\n                        email\n                    }\n                });\n                if (!user) {\n                    user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.create({\n                        data: {\n                            email,\n                            name,\n                            role,\n                            image: role === \"ADMIN\" ? \"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80\" : \"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80\"\n                        }\n                    });\n                } else if (user.role !== role || user.name !== name) {\n                    user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma.user.update({\n                        where: {\n                            id: user.id\n                        },\n                        data: {\n                            role,\n                            name\n                        }\n                    });\n                }\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    image: user.image,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user, trigger, session }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role || \"USER\";\n                token.name = user.name;\n                token.picture = user.image;\n            }\n            if (trigger === \"update\" && session?.role) {\n                token.role = session.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user && token) {\n                session.user.id = token.id;\n                session.user.role = token.role || \"USER\";\n                if (token.name) session.user.name = token.name;\n                if (token.picture) session.user.image = token.picture;\n            }\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET || \"devpulse-secret-key-32194871294871298471928471\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dEO0FBQ0E7QUFDVTtBQUNSO0FBQ3BCO0FBRS9CLE1BQU1LLGNBQStCO0lBQzFDQyxTQUFTSCx3RUFBYUEsQ0FBQ0MsK0NBQU1BO0lBQzdCRyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFdBQVc7UUFDVFosc0VBQWNBLENBQUM7WUFDYmEsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0IsSUFBSTtZQUMxQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0IsSUFBSTtZQUNsREMsbUNBQW1DO1FBQ3JDO1FBQ0FsQixzRUFBY0EsQ0FBQztZQUNiWSxVQUFVQyxRQUFRQyxHQUFHLENBQUNLLGdCQUFnQixJQUFJO1lBQzFDSCxjQUFjSCxRQUFRQyxHQUFHLENBQUNNLG9CQUFvQixJQUFJO1lBQ2xERixtQ0FBbUM7UUFDckM7UUFDQWpCLDJFQUFtQkEsQ0FBQztZQUNsQm9CLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsTUFBTTtvQkFBRUYsT0FBTztvQkFBUUMsTUFBTTtnQkFBTztnQkFDcENKLE1BQU07b0JBQUVHLE9BQU87b0JBQVFDLE1BQU07Z0JBQU87WUFDdEM7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLE9BQU8sT0FBTztnQkFFaEMsTUFBTUEsUUFBUUQsWUFBWUMsS0FBSyxDQUFDSyxXQUFXLEdBQUdDLElBQUk7Z0JBQ2xELE1BQU1ILE9BQU9KLFlBQVlJLElBQUksS0FBSyxVQUFVLFVBQVU7Z0JBQ3RELE1BQU1MLE9BQU9DLFlBQVlELElBQUksSUFBS0ssQ0FBQUEsU0FBUyxVQUFVLDJCQUEyQixrQkFBaUI7Z0JBRWpHLHlDQUF5QztnQkFDekMsSUFBSUksT0FBTyxNQUFNNUIsK0NBQU1BLENBQUM0QixJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDdENDLE9BQU87d0JBQUVUO29CQUFNO2dCQUNqQjtnQkFFQSxJQUFJLENBQUNPLE1BQU07b0JBQ1RBLE9BQU8sTUFBTTVCLCtDQUFNQSxDQUFDNEIsSUFBSSxDQUFDRyxNQUFNLENBQUM7d0JBQzlCQyxNQUFNOzRCQUNKWDs0QkFDQUY7NEJBQ0FLOzRCQUNBUyxPQUFPVCxTQUFTLFVBQ1osaUdBQ0E7d0JBQ047b0JBQ0Y7Z0JBQ0YsT0FBTyxJQUFJSSxLQUFLSixJQUFJLEtBQUtBLFFBQVFJLEtBQUtULElBQUksS0FBS0EsTUFBTTtvQkFDbkRTLE9BQU8sTUFBTTVCLCtDQUFNQSxDQUFDNEIsSUFBSSxDQUFDTSxNQUFNLENBQUM7d0JBQzlCSixPQUFPOzRCQUFFWixJQUFJVSxLQUFLVixFQUFFO3dCQUFDO3dCQUNyQmMsTUFBTTs0QkFBRVI7NEJBQU1MO3dCQUFLO29CQUNyQjtnQkFDRjtnQkFFQSxPQUFPO29CQUNMRCxJQUFJVSxLQUFLVixFQUFFO29CQUNYQyxNQUFNUyxLQUFLVCxJQUFJO29CQUNmRSxPQUFPTyxLQUFLUCxLQUFLO29CQUNqQlksT0FBT0wsS0FBS0ssS0FBSztvQkFDakJULE1BQU1JLEtBQUtKLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RXLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVQsSUFBSSxFQUFFVSxPQUFPLEVBQUVuQyxPQUFPLEVBQUU7WUFDekMsSUFBSXlCLE1BQU07Z0JBQ1JTLE1BQU1uQixFQUFFLEdBQUdVLEtBQUtWLEVBQUU7Z0JBQ2xCbUIsTUFBTWIsSUFBSSxHQUFHLEtBQWNBLElBQUksSUFBSTtnQkFDbkNhLE1BQU1sQixJQUFJLEdBQUdTLEtBQUtULElBQUk7Z0JBQ3RCa0IsTUFBTUUsT0FBTyxHQUFHWCxLQUFLSyxLQUFLO1lBQzVCO1lBRUEsSUFBSUssWUFBWSxZQUFZbkMsU0FBU3FCLE1BQU07Z0JBQ3pDYSxNQUFNYixJQUFJLEdBQUdyQixRQUFRcUIsSUFBSTtZQUMzQjtZQUVBLE9BQU9hO1FBQ1Q7UUFDQSxNQUFNbEMsU0FBUSxFQUFFQSxPQUFPLEVBQUVrQyxLQUFLLEVBQUU7WUFDOUIsSUFBSWxDLFFBQVF5QixJQUFJLElBQUlTLE9BQU87Z0JBQ3pCbEMsUUFBUXlCLElBQUksQ0FBQ1YsRUFBRSxHQUFHbUIsTUFBTW5CLEVBQUU7Z0JBQzFCZixRQUFReUIsSUFBSSxDQUFDSixJQUFJLEdBQUcsTUFBT0EsSUFBSSxJQUFlO2dCQUM5QyxJQUFJYSxNQUFNbEIsSUFBSSxFQUFFaEIsUUFBUXlCLElBQUksQ0FBQ1QsSUFBSSxHQUFHa0IsTUFBTWxCLElBQUk7Z0JBQzlDLElBQUlrQixNQUFNRSxPQUFPLEVBQUVwQyxRQUFReUIsSUFBSSxDQUFDSyxLQUFLLEdBQUdJLE1BQU1FLE9BQU87WUFDdkQ7WUFDQSxPQUFPcEM7UUFDVDtJQUNGO0lBQ0FxQyxRQUFROUIsUUFBUUMsR0FBRyxDQUFDOEIsZUFBZSxJQUFJO0FBQ3pDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudC1wbGF0Zm9ybS1hcHAvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCIsXG4gICAgZXJyb3I6IFwiL2F1dGgvc2lnbmluXCIsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lEIHx8IFwibW9jay1naXRodWItaWRcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQgfHwgXCJtb2NrLWdpdGh1Yi1zZWNyZXRcIixcbiAgICAgIGFsbG93RGFuZ2Vyb3VzRW1haWxBY2NvdW50TGlua2luZzogdHJ1ZSxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCB8fCBcIm1vY2stZ29vZ2xlLWlkXCIsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIHx8IFwibW9jay1nb29nbGUtc2VjcmV0XCIsXG4gICAgICBhbGxvd0Rhbmdlcm91c0VtYWlsQWNjb3VudExpbmtpbmc6IHRydWUsXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBpZDogXCJkZW1vLWxvZ2luXCIsXG4gICAgICBuYW1lOiBcIlF1aWNrIERlbW8gTG9naW5cIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICByb2xlOiB7IGxhYmVsOiBcIlJvbGVcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgbmFtZTogeyBsYWJlbDogXCJOYW1lXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCBlbWFpbCA9IGNyZWRlbnRpYWxzLmVtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICBjb25zdCByb2xlID0gY3JlZGVudGlhbHMucm9sZSA9PT0gXCJBRE1JTlwiID8gXCJBRE1JTlwiIDogXCJVU0VSXCI7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjcmVkZW50aWFscy5uYW1lIHx8IChyb2xlID09PSBcIkFETUlOXCIgPyBcIlNocmV5YXNoIEt1bWFyIChBZG1pbilcIiA6IFwiUmFodWwgKEF0dGVuZGVlKVwiKTtcblxuICAgICAgICAvLyBGaW5kIG9yIGNyZWF0ZSB1c2VyIGluIFNRTGl0ZSBkYXRhYmFzZVxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgcm9sZSxcbiAgICAgICAgICAgICAgaW1hZ2U6IHJvbGUgPT09IFwiQURNSU5cIlxuICAgICAgICAgICAgICAgID8gXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDUyODc0MTc3NS01Mzk5NGE2OWRhZWI/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNTAmcT04MFwiXG4gICAgICAgICAgICAgICAgOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM1NzEzODc1MDAyLWQxZDBjZjM3N2ZkZT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1MCZxPTgwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXIucm9sZSAhPT0gcm9sZSB8fCB1c2VyLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VyLmlkIH0sXG4gICAgICAgICAgICBkYXRhOiB7IHJvbGUsIG5hbWUgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIGltYWdlOiB1c2VyLmltYWdlLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCB0cmlnZ2VyLCBzZXNzaW9uIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgdG9rZW4ucm9sZSA9ICh1c2VyIGFzIGFueSkucm9sZSB8fCBcIlVTRVJcIjtcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgdG9rZW4ucGljdHVyZSA9IHVzZXIuaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyID09PSBcInVwZGF0ZVwiICYmIHNlc3Npb24/LnJvbGUpIHtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHNlc3Npb24ucm9sZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIgJiYgdG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9ICh0b2tlbi5yb2xlIGFzIHN0cmluZykgfHwgXCJVU0VSXCI7XG4gICAgICAgIGlmICh0b2tlbi5uYW1lKSBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWU7XG4gICAgICAgIGlmICh0b2tlbi5waWN0dXJlKSBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5waWN0dXJlIGFzIHN0cmluZztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIHx8IFwiZGV2cHVsc2Utc2VjcmV0LWtleS0zMjE5NDg3MTI5NDg3MTI5ODQ3MTkyODQ3MVwiLFxufTtcbiJdLCJuYW1lcyI6WyJHaXRodWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwiYWxsb3dEYW5nZXJvdXNFbWFpbEFjY291bnRMaW5raW5nIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInJvbGUiLCJhdXRob3JpemUiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY3JlYXRlIiwiZGF0YSIsImltYWdlIiwidXBkYXRlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ0cmlnZ2VyIiwicGljdHVyZSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBS0MsS0FBc0MsR0FBRztRQUFDO1FBQVM7UUFBUztLQUFPLEdBQUcsQ0FBUztBQUN0RixHQUFHO0FBRUwsSUFBSUEsSUFBcUMsRUFBRUosZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZlbnQtcGxhdGZvcm0tYXBwLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBbXCJxdWVyeVwiLCBcImVycm9yXCIsIFwid2FyblwiXSA6IFtcImVycm9yXCJdLFxuICB9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/uuid","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fstats%2Froute&page=%2Fapi%2Fadmin%2Fstats%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fstats%2Froute.ts&appDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CWeb%20Dev%20Event%20Platform%20with%20Login%20%26%20Payments&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();