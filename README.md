### STEPS:

#### Run tests locally

1. npm install
2. npx playwright install
3. npm run test

#### Run tests in Docker

1. docker build -t playwright-docker .
2. docker run -it playwright-docker:latest npm run test
