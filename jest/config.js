
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageReporters: ['html', 'text', 'text-summary'],
  notify: false,
  notifyMode: 'failure',
  rootDir: '../',
  setupTestFrameworkScriptFile: './jest/setup.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/', '/node_modules/']
}
