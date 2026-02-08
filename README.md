# Prayog Design - Shreya Raval's Portfolio

Welcome to the **Prayog Design** repository! This project is a highly interactive, thematically rich portfolio website designed and built by **Shreya Raval**. It serves as a creative pitch and a demonstration of technical skills for "Prayog".

## 🌟 Project Overview

This application is built with **Next.js 16** and showcases a unique, scroll-driven narrative that transitions through different visual themes:
1.  **Day Theme**: Clean, professional introduction.
2.  **Pink/Romantic Theme**: A softer, creative expression used for personal details and "Answers".
3.  **Night/Party Theme**: A vibrant, high-energy conclusion featuring a neon-styled "Skills" section and a "Meta Moment".

The design philosophy focuses on **"Where Technology Meets Celebration"**, bridging the gap between technical solidity and creative flair.

## 🚀 Features

-   **Dynamic Theme Transitions**: Seamless background and color transitions triggered by scroll progress using `framer-motion`.
-   **Interactive Animations**: Reveal effects, hover states, and particle systems (sparkles, spotlights) create an engaging user experience.
-   **Responsive Design**: optimized for various screen sizes while prioritizing a cinematic desktop experience.
-   **Glassmorphism & Neon Effects**: Modern UI trends implemented with Tailwind CSS.
-   **Custom Components**: specialized components for `SkillsSection`, `NightDecorations`, `RomanticDecorations`, and more.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm, pnpm, or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/prayog-design.git
    cd prayog-design
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
prayog-design/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main landing page with scroll logic
├── components/           # Reusable UI components
│   ├── SkillsSection.tsx # Night-themed skills grid
│   ├── NightDecorations.tsx # Particle and light effects
│   ├── ...               # Other sections (Hero, About, etc.)
├── lib/                  # Utility functions and constants
│   └── scroll-theme.ts   # Theme color definitions
├── public/               # Static assets
└── ...config files       # Tailwind, TypeScript, Next.js config
```

## 🚀 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Deploy!

## 🤝 Contact

**Shreya Raval**
-   **Portfolio**: [Link to your portfolio if applicable]
-   **Email**: [Your Email]
-   **LinkedIn**: [Your LinkedIn Profile]

---

*Built with ❤️ and ⚛️ for Prayog.*
