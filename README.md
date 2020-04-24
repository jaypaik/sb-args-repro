## Notes

This project is built off of @shilman's instructions at https://gist.github.com/shilman/69c1dd41a466bae137cc88bd2c6ef487

My changes:

- Button label moved to the `children` prop.
- `size` prop of type `"small" | "large"` added.
- Added second story with `ButtonWithDefaultExport`, which exports the component as the default.
- Added third story with `ButtonWithOptionalSizeDefaultExport`, which has its `size` prop marked as optional in the prop interface.
- Added `react-docgen-typescript-loader`, and added the following to `.storybook/main.js` for enum support:

  ```typescript
  const path = require("path");

  module.exports = {
    // ...
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
  ```

## Observations

1. Without the webpack snippet, string union types appear as `union` under the description column in the docs, with a blank text input as the control.
2. With the webpack snippet, we can see the type appear as `"small" | "large"` under the description and a select input as the control, but _ONLY IF_ the component was exported as the default. If it wasn't, we see the same behavior as 1, where the type appears as `union`, along with a blank text input control.
3. When the `size` prop is marked as optional (`size:? "small" | "large"`) as in `ButtonWithOptionalSizeDefaultExportProps`, the type correctly shows as `"small" | "large" | undefined`, but the control becomes a text input, as oppposed to a select.
