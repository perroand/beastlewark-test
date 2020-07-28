module.exports = {
  setupFiles: ["./src/setupTests.js"],
  setupFilesAfterEnv: ["./src/setupTestsAfterEnv.js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/mocks/styleMock.js",
  },
};
