import { HandledRoute} from "@scullyio/scully";
import * as scully from "@scullyio/scully";

export const ARCHIVES_ROUTE_PLUGIN="archive_route";

export interface ArchivesRoutePluginConfig{
    options:ArchiveRouteOption[]
}
export interface ArchiveRouteOption{
    articleRoot:string;
    archiveRoot:string;
    archiveSize:number;
}
export const DEFAULT_CONFIG:ArchivesRoutePluginConfig={
    options:[{
        articleRoot:"/article",
        archiveRoot:"/archives",
        archiveSize:8
    }]
}

export function archivePlugin(routes:HandledRoute[]):Promise<HandledRoute[]>{

    let config=scully.getPluginConfig(ARCHIVES_ROUTE_PLUGIN,'routeProcess') as ArchivesRoutePluginConfig;
    config=(config==undefined||config.options.length<1)?DEFAULT_CONFIG:config;
    let options=config.options;

    for (let index = 0; index < options.length; index++) {
        const o = options[index];
             
        //add archives for blog
        let posts = routes.filter((route) => route.route.startsWith(o.articleRoot));
        let archiveCount=Math.floor(1.0*posts.length/o.archiveSize)+1;
        
        let archives:HandledRoute[]=[];
        for (let page = 0; page < archiveCount; page++) {
            archives.push({route:`${o.archiveRoot}/${page}`}) 
        }
        archives.forEach(element => {
            routes.push(element);
        });
    }
    return Promise.resolve(routes);
}


export function registerPlugin(){
    scully.registerPlugin("routeProcess", ARCHIVES_ROUTE_PLUGIN, archivePlugin, [])
}