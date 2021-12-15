module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  detectOpenHandles: true,
  forceExit: true,
  testMatch: ['**/*.test.js'],
  verbose: true,
};
