# ![SportSee](https://ohminod.github.io/sportsee/logo.png)

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

## Utilisation

Pour charger un utilisateur spécifique, passer son id dans la query string de l'URL :

```
http://localhost:5173/?id=12
```

Les utilisateurs 1 à 12 et 18 sont disponibles dans les données mockées, 12 et 18 via l'API. Sans query string, l'utilisateur 12 est sélectionné.

Pour passer des données mockées à l'API, changer la valeur de la variable `mockedData` dans le fichier `src/utils/data-access-layer.ts` à `false`.

On peut modifier l'adresse de l'API à l'aide de la variable `apiDomain` dans le même fichier.

```ts
const mockedData = true;
const apiDomain = "http://localhost:3000";
```

Une version live avec les données mockées est disponible ici : [SportSee](https://ohminod.github.io/sportsee/)

## Structure du projet

```
public/
src/
    main.tsx
    components/
        activityBarChart/
            activityBarChart.tsx
            ...
        dashBoard.tsx
        header.tsx
        loading.tsx
        performanceRadar.tsx
        scoreRadialChart.tsx
        sessionLengthLineChart/
            sessionLengthLineChart.tsx
            ...
        sidebar.tsx
        userInfoCard/
            userInfoCard.tsx
            ...
    index.css
    main.tsx
    utils/
        data-access-layer.tsx
        data-mock.ts
        normalizeData.ts
        types.ts
    vite-env.d.ts
.gitignore
eslint.config.js
index.html
package-lock.json
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
