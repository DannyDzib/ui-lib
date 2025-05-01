const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const path = require('path');

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
  resetCache: true,
  watchFolders: [workspaceRoot, uiRoot],
  resolver: {
    nodeModulesPaths,
    extraNodeModules,
    disableHierarchicalLookup: true,
  },
  transformer: {
    unstable_allowRequireContext: true,
  },
};
const metroConfig = mergeConfig(getDefaultConfig(__dirname), config);

const storybookOptions = {
  configPath: path.resolve(__dirname, './.rnStorybook'),
  // set this to true to remove storybook from the bundle when disabled
  onDisabledRemoveStorybook: true,
};
module.exports = withStorybook(metroConfig, storybookOptions);
