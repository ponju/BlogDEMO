import { getPluginConfig, HandledRoute, registerPlugin, RouteTypes } from "@scullyio/scully"

export const CATEGORIZED_ARCHIVE_PLUGIN = 'categorized_archive';
export const EXAMPLE_CONFIGS:CategorizedArchiveConfig={options:[
    {
        root:"/blog",
        articleRoute:"/blog/article",
        categorize: ["category","series"],
        archiveSize:8,
        archivePagePrefix:"",
        parseSubdir:true
    }
]
}
export interface CategorizedArchiveConfig{
    options:CategorizedArchiveOption[]
}
export interface CategorizedArchiveOption {
    root:string;
    articleRoute: string;
    categorize:string[];
    archivePagePrefix:string;
    archiveSize:number;
    parseSubdir:boolean,
}

function getALLClassificationsForArticles(routes:HandledRoute[],subDirecotry:string):Set<string>{
    const rtn:Set<string>=new Set<string>();

    routes.forEach(route => {
        if(route.data==undefined || route.data[subDirecotry]==undefined) return;

        let cat=route.data[subDirecotry];
        if(cat instanceof Array){
            cat.forEach(element => {
                rtn.add(element);     
            });
        }
        else if(typeof(cat)=="string"){
            rtn.add(cat)
        }
    });

    return rtn;
}

function getCategoryPosts(routes:HandledRoute[],articleRoute:string,subDirectory:string,category:string):HandledRoute[]{
    return routes.filter(r=>r.route.startsWith(`${articleRoute}`) && r.data!=undefined&& r.data[subDirectory] !=undefined && r.data[subDirectory]===category);
}

export function categorizedArchivePlugin(routes: HandledRoute[]): Promise<HandledRoute[]> {
    let config = getPluginConfig<CategorizedArchiveConfig>(CATEGORIZED_ARCHIVE_PLUGIN);
    config=(config==undefined || config.options.length<1 )? EXAMPLE_CONFIGS:config;

    const generated:HandledRoute[]=[];
    config.options.forEach(o => {
        o.categorize.forEach(
            dir => {
                let subDir=o.parseSubdir?`/${dir}/`:"/";
                let categories=getALLClassificationsForArticles(routes,dir);
                categories.forEach(
                    (category)=>{
                        let posts=getCategoryPosts(routes,o.articleRoute,dir,category);
                        let pageCount=Math.floor(posts.length/o.archiveSize)+1;
                        for (let page = 0; page < pageCount; page++) {
                            generated.push({route:`${o.root}${subDir}${category}${o.archivePagePrefix}/${page}`});
                        }
                    }
                );
            })
        });
    generated.forEach(r=>routes.push(r));
    return Promise.resolve(routes);
}

export function register(){
    registerPlugin("routeProcess", CATEGORIZED_ARCHIVE_PLUGIN, categorizedArchivePlugin, [])
}
