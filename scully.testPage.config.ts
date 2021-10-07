import { ScullyConfig,setPluginConfig } from '@scullyio/scully';
import { findAngularJsonPath } from '@scullyio/scully/src/lib/utils';
import * as archives from './scully/plugins/archivesRoutePlugin';

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

const ARCHIVE_SIZE=8;
const archiveConfig: archives.ArchivesRoutePluginConfig =
{
  options: [
    {
      articleRoot: "/article",
      archiveRoot: "/archives",
      archiveSize: ARCHIVE_SIZE,
    }
  ]
}

setPluginConfig(archives.ARCHIVES_ROUTE_PLUGIN, 'routeProcess', archiveConfig);