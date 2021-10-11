"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.categorizedArchivePlugin = exports.EXAMPLE_CONFIGS = exports.CATEGORIZED_ARCHIVE_PLUGIN = void 0;
const scully_1 = require("@scullyio/scully");
exports.CATEGORIZED_ARCHIVE_PLUGIN = 'categorized_archive';
exports.EXAMPLE_CONFIGS = { options: [
        {
            root: "/blog",
            articleRoute: "/blog/article",
            categorize: ["category", "series"],
            archiveSize: 8,
            archivePagePrefix: "",
            parseSubdir: true
        }
    ]
};
function getALLClassificationsForArticles(routes, subDirecotry) {
    const rtn = new Set();
    routes.forEach(route => {
        if (route.data == undefined || route.data[subDirecotry] == undefined)
            return;
        let cat = route.data[subDirecotry];
        if (cat instanceof Array) {
            cat.forEach(element => {
                rtn.add(element);
            });
        }
        else if (typeof (cat) == "string") {
            rtn.add(cat);
        }
    });
    return rtn;
}
function getCategoryPosts(routes, articleRoute, subDirectory, category) {
    return routes.filter(r => r.route.startsWith(`${articleRoute}`) && r.data != undefined && r.data[subDirectory] != undefined && r.data[subDirectory] === category);
}
function categorizedArchivePlugin(routes) {
    let config = scully_1.getPluginConfig(exports.CATEGORIZED_ARCHIVE_PLUGIN);
    config = (config == undefined || config.options.length < 1) ? exports.EXAMPLE_CONFIGS : config;
    const generated = [];
    config.options.forEach(o => {
        o.categorize.forEach(dir => {
            let subDir = o.parseSubdir ? `/${dir}/` : "/";
            let categories = getALLClassificationsForArticles(routes, dir);
            categories.forEach((category) => {
                let posts = getCategoryPosts(routes, o.articleRoute, dir, category);
                let pageCount = Math.floor(posts.length / o.archiveSize) + 1;
                for (let page = 0; page < pageCount; page++) {
                    generated.push({ route: `${o.root}${subDir}${category}${o.archivePagePrefix}/${page}` });
                }
            });
        });
    });
    generated.forEach(r => routes.push(r));
    return Promise.resolve(routes);
}
exports.categorizedArchivePlugin = categorizedArchivePlugin;
function register() {
    scully_1.registerPlugin("routeProcess", exports.CATEGORIZED_ARCHIVE_PLUGIN, categorizedArchivePlugin, []);
}
exports.register = register;
//# sourceMappingURL=categorizedArchivePlugin.js.map