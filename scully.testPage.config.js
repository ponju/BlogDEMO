"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.angularRoot = void 0;
var scully_1 = require("@scullyio/scully");
var utils_1 = require("@scullyio/scully/src/lib/utils");
var archives = require("./scully/plugins/archivesRoutePlugin");
exports.angularRoot = utils_1.findAngularJsonPath();
exports.config = {
    projectRoot: exports.angularRoot,
    projectName: "testPage",
    outDir: './dist/static',
    routes: {
        '/article/:article': {
            type: 'contentFolder',
            article: {
                folder: "./articles"
            }
        },
    }
};
archives.registerPlugin();
var archiveConfig = {
    options: [
        {
            articleRoot: "/article",
            archiveRoot: "/archives",
            archiveSize: 8,
        }
    ]
};
scully_1.setPluginConfig(archives.ARCHIVES_ROUTE_PLUGIN, 'routeProcess', archiveConfig);
