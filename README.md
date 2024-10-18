# SportSee

SportSee est une application de suivi de performance sportive développée avec React, TypeScript et Vite. Ce projet utilise également Tailwind CSS pour le style et ESLint pour le linting.

## Installation

Pour installer les dépendances du projet, exécutez :

```sh
npm install
```

## Scripts

- `npm run dev` : Lance le serveur de développement Vite.
- `npm run build` : Compile le projet TypeScript et construit l'application pour la production.
- `npm run lint` : Exécute ESLint pour vérifier le code.
- `npm run preview` : Prévisualise l'application construite.

## Structure du projet

```
public/
src/
    App.tsx
    assets/
    components/
        activityBarChart/
            activityBarChart.tsx
            ...
        dashBoard.tsx
        performanceRadar.tsx
        scoreRadialChart.tsx
        sessionLengthLineChart/
            ...
        userInfoCard/
    index.css
    main.tsx
    utils/
        data-access-layer.tsx
        data-mock.ts
        formatData.ts
        normalizeData.ts
        types.ts
    vite-env.d.ts
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
README.md
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Dépendances

### Dépendances principales

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `recharts`: ^2.13.0

### Dépendances de développement

- `@eslint/js`: ^9.11.1
- `@types/react`: ^18.3.10
- `@types/react-dom`: ^18.3.0
- `@vitejs/plugin-react`: ^4.3.2
- `autoprefixer`: ^10.4.20
- `eslint`: ^9.11.1
- `eslint-plugin-react-hooks`: ^5.1.0-rc.0
- `eslint-plugin-react-refresh`: ^0.4.12
- `globals`: ^15.9.0
- `postcss`: ^8.4.47
- `tailwindcss`: ^3.4.13
- `typescript`: ^5.5.3
- `typescript-eslint`: ^8.7.0
- `vite`: ^5.4.8

## Configuration de Vite

Le fichier de configuration de Vite `vite.config.ts` utilise le plugin React :

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
```

## Configuration de Tailwind CSS

Le fichier de configuration de Tailwind CSS `tailwind.config.js` est configuré pour scanner les fichiers HTML et les fichiers source :

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        darkGrey: "#282D30",
        lightGrey: "#FBFBFB",
        legendGrey: "#9B9EAC",
        red: "#FF0000",
        primary: "#E60000",
      },
      fontSize: {
        legendTitle: ["26px", "26px"],
        legend: ["16px", "26px"],
      },
    },
  },
  plugins: [],
};
```
