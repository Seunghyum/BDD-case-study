module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '^~src(.*)$': '<rootDir>/src$1',
    '^~components(.*)$': '<rootDir>/src/components$1',
    '^~pages(.*)$': '<rootDir>/src/pages$1',
  },
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts|tsx)', '<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};
