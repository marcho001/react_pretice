export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // testRegex: '(.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
