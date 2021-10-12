"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.angularRoot = void 0;
var scully_1 = require("@scullyio/scully");
var utils_1 = require("@scullyio/scully/src/lib/utils");
var categorizedArchivePlugin_1 = require("./scully/plugins/categorizedArchivePlugin");
var archives = require("./scully/plugins/archivesRoutePlugin");
var categorizedArchives = require("./scully/plugins/categorizedArchivePlugin");
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
//classification category pages
categorizedArchives.register();
var categoryArchiveConfig = {
    options: [
        {
            archiveSize: 8,
            root: "/archives",
            articleRoute: "/article/",
            categorize: ["category", "series"],
            archivePagePrefix: "",
            parseSubdir: true,
        },
    ]
};
scully_1.setPluginConfig(categorizedArchivePlugin_1.CATEGORIZED_ARCHIVE_PLUGIN, 'routeProcess', categoryArchiveConfig);
