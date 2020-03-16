const { defaults } = require('jest-config');

module.exports = {
  setupFiles: ['<rootDir>/setup.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  verbose: true,
};
