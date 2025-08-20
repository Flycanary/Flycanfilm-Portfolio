# AI-Powered Personal Portfolio

This is a modern, interactive personal portfolio website for a Motion Graphic Artist & Filmmaker, featuring an AI-powered assistant powered by the Gemini API.

## How to Work on This Website

This project is set up with Vite, a modern frontend build tool that provides an extremely fast development experience.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher is recommended)
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)

### 1. Setup

First, download or clone all the project files to a folder on your computer.

Then, open your terminal (or the integrated terminal in VS Code), navigate into the project folder, and install the necessary dependencies by running:

```bash
npm install
```

### 2. Set Up Your API Key

The portfolio assistant uses the Google Gemini API. To make it work, you need to provide your own API key.

1.  Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  In the root of the project folder, create a new file named `.env`.
3.  Add the following line to the `.env` file, replacing `YOUR_GEMINI_API_KEY_HERE` with your actual key:

    ```
    API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```

**Important:** The project is configured to use this specific variable name. The `.env` file is included in `.gitignore`, so your API key will not be accidentally committed to a public repository.

### 3. Run the Development Server

Once the dependencies are installed and the API key is set, you can start the local development server:

```bash
npm run dev
```

This will start the website on a local URL (usually `http://localhost:5173`). Open this URL in your browser to see your portfolio. The server will automatically reload the page whenever you make changes to the code.

### 4. Customizing Your Portfolio

Most of the personal information and project details can be easily changed in one file:

-   **`constants.ts`**: Open this file to edit your name, title, bio, contact information, skills, and project details. Simply change the text and image URLs to match your own content.

The rest of the code is organized into components in the `components/` directory if you wish to make more advanced structural or styling changes.

## 5. Deploying Your Website with GitHub (The Easy Way)

Once you're ready to publish your portfolio, the easiest way is to use your GitHub account with a free hosting service like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). They will automatically deploy your site whenever you update your code.

Here is the simple, step-by-step process:

### Step 1: Create a GitHub Repository

1.  Go to [GitHub](https://github.com/) and create a new repository. Don't initialize it with a README, license, or .gitignore file, as you already have these.
2.  Follow the instructions under "...or push an existing repository from the command line" to connect your local project folder to the new GitHub repository. It will look something like this:
    ```bash
    # Make sure you are in your project folder
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/your-username/your-repository-name.git
    git push -u origin main
    ```

Your code is now on GitHub!

### Step 2: Connect to a Hosting Service

We'll use Netlify as an example, but the process is very similar for Vercel.

1.  Go to [Netlify](https://www.netlify.com/) and sign up using your GitHub account.
2.  Authorize Netlify to access your repositories.
3.  Click "Add new site" -> "Import an existing project".
4.  Choose "GitHub" as your provider and select the repository you just created.
5.  Netlify will automatically detect that you have a Vite project. The build settings should be pre-filled correctly:
    -   **Build command:** `npm run build` or `vite build`
    -   **Publish directory:** `dist`
6.  Click "Deploy site". Netlify will start building and deploying your website. This might take a minute or two.

### Step 3: Add Your Gemini API Key (Crucial!)

For the AI Portfolio Assistant to work on your live website, you **must** add your API key to your hosting provider's settings.

1.  In your Netlify site dashboard, go to "Site configuration" -> "Environment variables".
2.  Click "Add a variable" and add a new variable with:
    -   **Key:** `API_KEY`
    -   **Value:** Paste your actual Gemini API key here.
3.  Save the variable.
4.  You may need to trigger a new deploy for the variable to take effect. Go to the "Deploys" tab and find the option to "Trigger deploy" -> "Deploy site".

That's it! Your website is now live on the internet. Any time you `git push` new changes to your `main` branch on GitHub, your site will automatically update.

Happy coding!