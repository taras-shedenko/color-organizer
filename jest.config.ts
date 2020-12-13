export default {
  preset: "ts-jest",
  setupFiles: ["jest-localstorage-mock"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "/test-utils/"],
};
