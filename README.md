# Modern Portfolio Website

A minimalistic, dark-themed portfolio website with smooth animations, built with Astro and anime.js.

## Features

- 🌑 Dark-themed, minimalistic UI
- ✨ Smooth animations powered by anime.js
- 📱 Fully responsive design
- 🚀 Built with Astro for speed and performance
- 🧩 Component-based architecture
- 🎨 Custom CSS properties for easy customization

## Getting Started

### Prerequisites

- Node.js (v18.x or higher recommended)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Customization

### Personal Information

Update the following files to personalize your portfolio:

- `src/components/Hero.astro`: Edit your name and headline
- `src/components/About.astro`: Update your bio and skills
- `src/components/Projects.astro`: Add your projects
- `src/components/Contact.astro`: Change your email address
- `src/components/Footer.astro`: Update social media links and copyright information

### Images

Replace the placeholder images with your own:

- `public/placeholder-profile.jpg`: Your profile photo (300x300px recommended)
- `public/project1.jpg`, `public/project2.jpg`, etc.: Project screenshots (1200x675px recommended)

### Colors

Colors and other design tokens can be customized in `src/styles/global.css`:

```css
:root {
  --color-bg: #0f0f13;        /* Background color */
  --color-bg-alt: #1a1a22;    /* Alternative background color */
  --color-text: #f2f2f2;      /* Main text color */
  --color-text-muted: #a0a0a0; /* Secondary text color */
  --color-accent: #64ffda;    /* Accent color (teal) */
  /* ... other variables */
}
```

## Deployment

The portfolio is ready to deploy to your favorite hosting platform:

### Deploying to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/portfolio)

### Deploying to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Astro](https://astro.build) - The web framework used
- [anime.js](https://animejs.com) - JavaScript animation library
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
