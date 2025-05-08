# Interactive Guide

A responsive, accessible web-based guide for internal workplace processes, built with **React**, **Vite**, and modern best practices like lazy loading, client-side routing, and local authentication.

## 🚀 Features

- ⚡ **Fast Vite-based development** with hot module reloading
- 🗂 **Modular page loading** via `React.lazy()` and `Suspense`
- 🔐 **Simple auth gating** with localStorage and `react-router-dom`
- 🎨 **Dark mode** support
- 🔽 **Reusable, keyboard-accessible dropdown menus**
- 🖼 **Dynamic image imports** via custom loader
- 🛠 Easily extendable structure

## 📁 Project Structure

```
interactive-guide/
├── src/
│   ├── assets/
│   ├── components/
│   ├── images/                   # Used by imageLoader.js
│   ├── pages/                    # Route pages (grouped by domain)
│   ├── utils/
│   │   ├── imageLoader.js        # Dynamically loads images
│   │   ├── pageLoader.js         # Lazy loads pages
│   │   └── requireAuth.js        # Simple auth wrapper
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠 Setup

### 1. Clone and install
```bash
git clone https://github.com/giftshopjordan/interactive-guide.git
cd interactive-guide
npm install
```

### 2. Run development server
```bash
npm run dev
```
App will be available at: [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

## 🔐 Authentication

Authentication is handled via a simple `localStorage` flag (`authenticated = "true"`). The `RequireAuth` wrapper redirects unauthenticated users to `/login`.

To log in:
1. Visit `/login`
2. Submit your credentials (mock or placeholder for now)
3. `localStorage` is set, and access is granted

## 🖼 Image Usage

Images are loaded using a Webpack-style `require.context()` shim in `imageLoader.js`. Access images like this:

```jsx
import { images } from '../utils/imageLoader';

<img src={images['my_image_name']} alt="My Image" />
```

## 🔍 Known Issues

- JSX syntax errors may occur if files use `.js` instead of `.jsx`. Rename your components accordingly.
- Image loading may require additional Vite configuration or a different approach than `require.context()`.

## 🧩 Tech Stack

- **React 18**
- **Vite**
- **React Router DOM**
- **GitHub Pages** for deployment

## 📦 Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## 📄 License

MIT

## 👥 Contributors

- Jordan ([GiftShopJordan](https://github.com/giftshopjordan))
