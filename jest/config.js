
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.js'],
  coverageReporters: ['html', 'json', 'lcov', 'text', 'text-summary'],
  notify: false,
  notifyMode: 'failure',
  rootDir: '../',
  setupTestFrameworkScriptFile: './jest/setup.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/', '/node_modules/']
}
