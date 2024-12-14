/** @type {import('tailwindcss').Config} */
import tokenData from './src/tokens/tokens.json';

const resolveTokens = (tokens, map) => {
  const resolved = {};
  for (const [key, value] of Object.entries(tokens)) {
    resolved[key] =
      typeof value === 'string' && value.startsWith('{')
        ? map[value.slice(1, -1)] // Remove {curly braces} and resolve
        : value;
  }
  return resolved;
};

const globalTokens = tokenData.globalTokens;
const baseTokens = resolveTokens(tokenData.baseTokens, globalTokens);
const semanticTokens = resolveTokens(tokenData.semanticTokens, {
  ...globalTokens,
  ...baseTokens,
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...globalTokens,
        ...baseTokens,
        ...semanticTokens,
      },
    },
  },
  plugins: [],
};
