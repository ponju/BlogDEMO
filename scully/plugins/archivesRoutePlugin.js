"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPlugin = exports.archivePlugin = exports.DEFAULT_CONFIG = exports.ARCHIVES_ROUTE_PLUGIN = void 0;
const scully = __importStar(require("@scullyio/scully"));
exports.ARCHIVES_ROUTE_PLUGIN = "archive_route";
exports.DEFAULT_CONFIG = {
    options: [{
            articleRoot: "/article",
            archiveRoot: "/archives",
            archiveSize: 8
        }]
};
function archivePlugin(routes) {
    let config = scully.getPluginConfig(exports.ARCHIVES_ROUTE_PLUGIN, 'routeProcess');
    config = (config == undefined || config.options.length < 1) ? exports.DEFAULT_CONFIG : config;
    let options = config.options;
    for (let index = 0; index < options.length; index++) {
        const o = options[index];
        //add archives for blog
        let posts = routes.filter((route) => route.route.startsWith(o.articleRoot));
        let archiveCount = Math.floor(1.0 * posts.length / o.archiveSize) + 1;
        let archives = [];
        for (let page = 0; page < archiveCount; page++) {
            archives.push({ route: `${o.archiveRoot}/${page}` });
        }
        archives.forEach(element => {
            routes.push(element);
        });
    }
    return Promise.resolve(routes);
}
exports.archivePlugin = archivePlugin;
function registerPlugin() {
    scully.registerPlugin("routeProcess", exports.ARCHIVES_ROUTE_PLUGIN, archivePlugin, []);
}
exports.registerPlugin = registerPlugin;
//# sourceMappingURL=archivesRoutePlugin.js.map