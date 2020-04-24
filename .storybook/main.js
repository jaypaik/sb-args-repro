const path = require("path");

module.exports = {
  stories: ["../src/stories/**/*.stories.(ts|tsx|js|jsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            // Enables TS union type support for addon-smart-knobs.
            // https://github.com/strothj/react-docgen-typescript-loader/issues/87#issuecomment-583818469
            shouldExtractLiteralValuesFromEnum: true,
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
