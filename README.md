# Workflow repo for the CA

## Installation

1. Clone the repository.
2. Open the project folder in a terminal.
3. Install the dependencies:

```bash
npm install
```

## Available Scripts

Run the website locally:

```bash
npm run start
```

Run the Tailwind CSS watcher:

```bash
npm run dev
```

Run the unit tests with Vitest:

```bash
npm test
```

Run the end-to-end tests with Playwright:

```bash
npx playwright test
```

## Environment Variables

The Playwright login tests require a valid Holidaze test user.

1. Copy `.env.example` to a new file named `.env` in the project root.
2. Add the test user's credentials using these variable names:

```dotenv
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

3. Save the file before running the Playwright tests.

The `.env` file is ignored by Git and must not be committed to the repository.
