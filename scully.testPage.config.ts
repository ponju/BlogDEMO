import { ScullyConfig,setPluginConfig } from '@scullyio/scully';
import { findAngularJsonPath } from '@scullyio/scully/src/lib/utils';
import { CategorizedArchiveConfig, CATEGORIZED_ARCHIVE_PLUGIN } from './scully/plugins/categorizedArchivePlugin';
import * as archives from './scully/plugins/archivesRoutePlugin';
import * as categorizedArchives from './scully/plugins/categorizedArchivePlugin';

export const angularRoot=findAngularJsonPath();

export const config: ScullyConfig = {
  projectRoot: angularRoot,
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

archives.registerPlugin()

const archiveConfig: archives.ArchivesRoutePluginConfig =
{
  options: [
    {
      articleRoot: "/article",
      archiveRoot: "/archives",
      archiveSize: 8,
    }
  ]
}

setPluginConfig(archives.ARCHIVES_ROUTE_PLUGIN, 'routeProcess', archiveConfig);



//classification category pages
categorizedArchives.register();
const categoryArchiveConfig: CategorizedArchiveConfig = {
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
setPluginConfig<CategorizedArchiveConfig>(CATEGORIZED_ARCHIVE_PLUGIN, 'routeProcess', categoryArchiveConfig);
