# JobBoard 💼

A premium, minimalist job directory application designed for modern professionals. Built using **React**, **TypeScript**, and **Vite**, this application offers a streamlined, distraction-free interface to discover and explore career opportunities.

---

## 🌟 Key Features

- **Minimalist Aesthetic**: Sleek black-and-white theme focusing entirely on content, typography, and exceptional readability using the Lato font.
- **Interactive Job Cards**: 
  - Real-time collapsible interfaces.
  - Expand to view full role descriptions, comprehensive requirements list, salary details, and formatted dates.
- **Dynamic Search & Filtering**:
  - Live query filtering as you type.
  - Instant location-based or job-type classification.
- **Optimized Layout**: Fully responsive grid adapting fluidly from mobile displays to ultra-wide desktop monitors.
- **Developer-Friendly Boilerplate**: Zero overhead configurations using Vite and clean component models for quick extensions.

---

## 🛠️ Architecture & Tech Stack

### Frontend & Language
* **React 19**: Modern declarative UI library.
* **TypeScript**: Strict type definitions for predictable data modeling.
* **Vite**: High-speed frontend development server and compiler.

### Style & Design
* **Vanilla CSS**: Optimized stylesheets leveraging CSS variables.
* **BEM Methodology**: Organized CSS classes (`.job-card__title`, `.job-card__tags`) to prevent style leaks and improve modularity.
* **Aesthetics**: Premium modern grayscales, crisp borders, and subtle focus transitions.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (Favicons, public resources)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── JobCard.tsx     # Individual expandable job card component
│   │   └── JobList.tsx     # Dynamic listings grid container
│   ├── data/
│   │   └── jobs.ts         # Strictly-typed job listings & data schema
│   ├── App.css             # Main styling, layout system, and responsive utilities
│   ├── App.tsx             # Main App layout & logic
│   ├── index.css           # Global typography and base setup
│   └── main.tsx            # Application entrypoint
├── index.html              # Main HTML entry and SEO configuration
├── package.json            # Build scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 1. Clone & Navigate
```bash
git clone https://github.com/jxsteve/learnable-11.git
cd learnable-11
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `/dist` directory.
