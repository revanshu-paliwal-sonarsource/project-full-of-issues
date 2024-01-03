/** @type {import('jest').Config} */
const config = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules']
};
  
module.exports = config;