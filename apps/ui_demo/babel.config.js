module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'ui-lib': './packages/ui',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
