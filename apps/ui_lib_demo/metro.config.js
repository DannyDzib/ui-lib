const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

// TODO: change 'myCompany' to your company/proj. name and 'packages/api', 'packages/components'
// to the real shared packages name.
// const monorepoPackages = {
//   '@myCompany/api': path.resolve(workspaceRoot, 'packages/api'),
//   '@myCompany/components': path.resolve(workspaceRoot, 'packages/components'),
// };
// config.watchFolders = [projectRoot, ...Object.values(monorepoPackages)];

const projectRoot = __dirname;

const workspaceRoot = path.resolve(projectRoot, '../../');

const uiRoot = path.resolve(__dirname, '../../packages/ui');

const nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

const extraNodeModules = {
  react: path.resolve(__dirname, '../../node_modules/react'),
  'react-native': path.resolve(__dirname, '../../node_modules/react-native'),
};

const config = {
  watchFolders: [workspaceRoot, uiRoot],
  resolver: {
    nodeModulesPaths,
    extraNodeModules,
    disableHierarchicalLookup: true,
  },
};
const metroConfig = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = metroConfig;
