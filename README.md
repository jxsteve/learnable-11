# JobBoard 💼

A minimalist, high-performance job directory application built with **React**, **TypeScript**, and **Vite**. The application follows a premium black-and-white theme featuring a responsive grid, real-time interactive elements, and details toggling.

---

## ✨ Features
- **Modern Minimalist UI**: Clean, premium black-and-white professional layout built around modern typography (Lato font) and balanced HSL neutral colors.
- **Interactive Listings**: Expandable job cards displaying complete job specifications, requirements, salary details, and posting history.
- **Fully Responsive Design**: Optimized grid and flexbox layout adapting beautifully from small mobile screens to large desktop viewports.
- **Vite-Powered**: Ultra-fast build times, Hot Module Replacement (HMR), and optimized development configurations.
- **TypeScript First**: End-to-end type safety with defined interfaces for scalable data structures.

---

## 🛠️ Tech Stack
- **Core Library**: React (v19)
- **Programming Language**: TypeScript
- **Build Tool**: Vite (v8)
- **Styling**: Vanilla CSS (Structured with a customized BEM convention)
- **Typography**: Google Fonts (Lato)

---

## 📂 Project Structure
```text
├── public/                 # Static assets (Favicons, public resources)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── JobCard.tsx     # Individual expandable job card
│   │   └── JobList.tsx     # Grid container for active job listings
│   ├── data/
│   │   └── jobs.ts         # Type interfaces and mock data listings
│   ├── App.css             # Main styling, layout system, and responsive utilities
│   ├── App.tsx             # Root React component
│   ├── index.css           # Global typography and base setup
│   └── main.tsx            # Application entrypoint
├── index.html              # Main HTML skeleton and SEO tags
├── package.json            # Scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/jxsteve/learnable-11.git
cd learnable-11
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The server will start running at `http://localhost:5173` (or the next available port). Open your browser and navigate to the address to view the site.

### 4. Build for Production
To generate a production-ready build:
```bash
npm run build
```

---

## 📄 License
This project is open-source and available under the MIT License.
