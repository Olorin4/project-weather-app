// Prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
    trailingComma: "es5",
    tabWidth: 4,
    printWidth: 100,
    proseWrap: "always",
    semi: true,
    singleQuote: false,
    quoteProps: "as-needed",
    bracketSpacing: true,
    arrowParens: "avoid",
    endOfLine: "lf",
};

export default config;
