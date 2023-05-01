steps:


- name: Run Tests (JEST)
  run: yarn test --ci --silent --testPathIgnorePatterns=experimental
  env:
      CI: true
      apiKey: ${{ secrets.weather_api_key }}
