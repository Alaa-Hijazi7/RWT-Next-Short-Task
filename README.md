
---

# Next.js Custom Authentication and Multistep Form with Chakra UI

Welcome to our Next.js application! Below you'll find instructions on how to set up and use the application.

## Task Overview

This application is designed to accomplish the following tasks:

1. Create a Next.js application from scratch and implement custom authentication (login).
2. Implement user authentication using next-auth with static credentials.
3. Create a session based on authentication.
4. Implement a multistep form for creating ads, following the given UI design.
5. Use Chakra UI for UI development.
6. Ensure responsiveness.
7. Validate user inputs.
8. Use TypeScript for the codebase.
9. Use ESLint for linting.
10. Implement session expiration after 1 hour.
11. Have only two pages: Login Page and Create Ad Page.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Access the application in your browser:

   ```
   http://localhost:3000
   ```

## Usage Guidelines

1. **Login Page**: Use the provided static credentials (`admin@admin.com` and `admin`) to log in. Validate user inputs.
2. **Create Ad Page**: After logging in, you'll be directed to the Create Ad Page. Follow the multistep form as described below:
   - Step 1: Basic Information
   - Step 2: Upload Images (up to 5 images, each not more than 2MB)
   - Step 3: Review all steps. Ensure validation for all steps.
3. **Session Expiration**: The session will expire after 1 hour of inactivity.
4. **Single Page Application**: The application follows a single-page architecture using Next.js routing.
5. **Codebase**: TypeScript is used for the codebase, and ESLint is configured for linting.

## Contact

If you have any questions or need assistance, feel free to reach out to us at [example@example.com](mailto:example@example.com).

Happy coding!

---

Feel free to adjust any details according to your project's specifics!