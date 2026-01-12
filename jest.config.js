module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/tests/unit/setup.js"],
  testMatch: ["**/tests/**/*.test.js"],
  clearMocks: true
};
