# TRUD-NADZOR

**Trud-Nadzor** is a modern, responsive web application built with Next.js for a company specializing in industrial safety, thermal power, and electrical training services.

This project was developed as a commercial website to professionally represent the company, showcase its services, and provide interactive features for user engagement.

## 🔍 Overview

The application provides:

- 🏢 **Detailed company presentation** — About the organization, services, and certifications.
- 🧾 **Online application submission** — Users can submit requests directly via the site.
- 🧠 **Knowledge testing** — Built-in quiz/test functionality for users to check their understanding of industrial safety regulations.
- 💌 **Email Notifications** — Form submissions are sent via [Resend](https://resend.com/) API.
- 💻 **Modern UI/UX** — Responsive design with smooth animations for an engaging user experience.

## 🛠 Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion, AOS, Swiper
- **Email Delivery:** [Resend](https://resend.com/)
- **Testing Module:** Custom quiz logic

## Getting Started

### Prerequisites

- Node.js 18+ 
- Package manager: pnpm, yarn, or npm

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/laviprog/trud-nadzor.git
    cd trud-nadzor
    ```

2. **Set up environment variables:**

   Create .env.local or .env.production file based on the provided .env.example:

    ```bash
    cp .env.example .env.local
    ```
   Then fill in the required variables

3. Install dependencies:

   Choose your preferred package manager:

    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    ```
4. Run the app locally:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
Open http://localhost:3000 to view it in the browser.

## 📜 License

This project is provided for **portfolio and demonstration purposes only**.  
All rights reserved. Unauthorized use or redistribution is prohibited.

