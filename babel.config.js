module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
      "@babel/plugin-proposal-export-namespace-from",
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
