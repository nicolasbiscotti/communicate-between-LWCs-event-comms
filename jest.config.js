const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");

module.exports = {
  ...jestConfig,
  // moduleNameMapper: {
  //   "^c/controls$": "<rootDir>/force-app/test/jest-mocks/c/controls",
  //   "^parent/numerator$": "<rootDir>/force-app/test/jest-mocks/parent/numerator"
  // },
  modulePathIgnorePatterns: ["<rootDir>/.localdevserver"]
};
