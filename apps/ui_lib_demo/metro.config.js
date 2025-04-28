const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const { generate } = require('@storybook/react-native/scripts/generate');

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

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
  transformer: {
    unstable_allowRequireContext: true,
  },
};
const metroConfig = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = metroConfig;
