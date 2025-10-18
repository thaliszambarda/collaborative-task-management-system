/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 80,
  trailingComma: 'es5',
  proseWrap: 'always',
  quoteProps: 'as-needed',
  singleQuote: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
}

export default config
