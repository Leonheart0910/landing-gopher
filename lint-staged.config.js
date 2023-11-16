/**
 * lint-staged-config.js 파일은 lint-staged의 설정을 저장하는 파일입니다.
 * lint-staged는 Git의 스테이징 영역에 있는 파일들을 린트(lint)하거나 테스트하는 데 사용됩니다.
 * 이는 커밋 전에 코드의 일관성을 유지하고 에러를 방지하는 데 도움을 줍니다.
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run type-check',
  '*.json': ['prettier --write'],
};
