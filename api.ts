// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
  extensions: ['.ts'],
  presets: ["@babel/preset-env", "@babel/preset-typescript"]
});

// Import the rest of our application.
module.exports = require('./src/server.ts')