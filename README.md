# **Health App**

<div align="center">
  <a href="https://github.com/delta94/Health-app">
    <img src="public/logo.svg" alt="Logo">
  </a>
</div>

<div align="center">
  <a href="https://health-app-delta94.vercel.app">View Demo</a>
</div>

## Introduction

The `Health App` is a health monitoring application developed to help users maintain a holistic view of their health. The application tracks physical metrics and suggests personalized exercise routines and dietary plans.

## Prerequisites

General

Ensure the installation of the following software and tools:

- **node**
- **npm**
- **git**

### Front-end Technologies and Tools

Ensure you have the following versions or above:

- **ReactJS**
- **Next.js**
- **Typescript**
- **Chakra-UI**
- **MSW (Mock Service Worker)**
- **FakerJS**
- **React Query**

### Tools

For coding, the recommended tool is:

- **Visual Studio Code**

The following extensions will make coding more effective and provide support in specific cases:

- Code Spell Checker
- ESLint
- TypeScript Nightly
- Prettier

## Installation & Configuration

### Cloning the Repository

To begin with the project, clone the repository:

```bash
git clone https://github.com/delta94/Health-app.git
```

### Front-end setup

To set up the front-end, navigate to the project directory and install dependencies:

```bash
cd health-app
yarn
```

### Environment Variables

The project requires certain environment variables. Create a **.env** file in the project root directory.

Inside this file, set the variable `NEXT_PUBLIC_ENABLE_MOCK_SERVICE`:

- If you want to use the mock service (MSW), set the variable to `true`.
- Otherwise, to connect to the real API, set it to `false`.

Also, set the variable `NEXT_PUBLIC_API_HOST` to `http://localhost:3000` or API endpoint.

### Running the Application

Navigate to the root directory and run the application:

```bash
yarn dev
```

Your application will be up and running at `http://localhost:3000` by default.

## Feedback

For any questions, suggestions, or feedback, feel free to reach out via email at **truongdevnht@gmail.com**.
