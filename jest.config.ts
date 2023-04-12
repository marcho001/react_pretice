export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testRegex: '(.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
