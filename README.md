# TestForDeployX

A simple, single-screen React application built with Vite - ready for easy deployment!

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Manukesharwani09/testfordeployx.git
cd testfordeployx
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Build for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:
```bash
npm run preview
```

## 🌐 Deployment

This application can be easily deployed to various platforms:

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Other Static Hosts
Simply upload the contents of the `dist` folder after running `npm run build` to any static hosting service.

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling

## 📄 Project Structure

```
testfordeployx/
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main application component
│   ├── App.css      # Application styles
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── package.json     # Project dependencies
```

## ✨ Features

- Simple, clean single-screen interface
- Interactive counter demo
- Modern gradient design
- Fully responsive
- Fast development with Vite hot module replacement
- Production-ready build optimization

## 📝 License

MIT