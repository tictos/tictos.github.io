# Portfolio - Diallo Mamadou Bobo (tictos)

![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
![React](https://img.shields.io/badge/React-19.x-61dafb.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-Fast_Build-646cff.svg?logo=vite)

Portfolio interactif haute performance de **Diallo Mamadou Bobo (tictos)**, Développeur Mobile & Web, Spécialiste en Automatisation de processus métiers (n8n) et Consultant Digital pour PME.

---

## 🚀 À propos du projet

Ce portfolio moderne met en valeur :
- **Double compétence Droit & Informatique** : Rigueur analytique juridique combinée à une solide maîtrise de l'ingénierie logicielle.
- **Écosystème Android (TicHub)** : Conception de 7 applications natives (Kotlin, Jetpack Compose, Room SQLite, MVVM, Coroutines), dont **Mine-Tou** en production sur le Google Play Store.
- **Développement Web Full-Stack** : Solutions web et backends dynamiques avec Python et Django.
- **Automatisation n8n & Consulting PME** : Conception de workflows opérationnels, synchronisation d'outils (CRM, Notion, APIs, Webhooks) et optimisation de la productivité.

---

## ✨ Fonctionnalités & Expérience Utilisateur

- 🎯 **Hero Section immersive** : Titre impactant, badges d'identité, visuel 3D stylisé avec effet magnétique interactif (suivi curseur fluide sur desktop, ancré et stable sur mobile).
- 📱 **Navigation Mobile & Tablette sur mesure** : Menu hamburger dynamique en verre dépoli avec animations fluides.
- 📜 **Section "About me" dynamique** : Défilement avec révélation typographique caractère par caractère (`AnimatedText`) et métriques clés.
- 📚 **Modale de Parcours & Diplômes** : Frise chronologique détaillée présentant le double cursus (3 ans de Droit, L1 Génie Informatique validée avec Mention, Objectifs 2027).
- 🛠️ **Catalogue de Services & Compétences** : Présentation claire des 5 piliers d'expertise technique et méthodologique.
- 📂 **Section Projets à cartes empilées** : Cartes superposées interactives avec fiches techniques détaillées (Mine-Tou, TicHub, etc.), liens Play Store et dépôts GitHub.
- ✉️ **Modale de Prise de Contact** : Formulaire interactif direct avec options de rendez-vous, boutons de contact WhatsApp et Email direct.
- ⚡ **Performance & SEO** : Score Lighthouse élevé, animations accélérées matériellement avec Framer Motion.

---

## 🛠️ Stack Technique

- **Frontend Core** : [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling** : [Vite](https://vite.dev/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Effets visuels** : `canvas-confetti`

---

## 📦 Installation & Démarrage Local

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/)

### 1. Cloner le dépôt
```bash
git clone https://github.com/tictos/portfolio.git
cd portfolio
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:3000` (ou le port indiqué dans le terminal).

### 4. Compiler pour la production
```bash
npm run build
```
Les fichiers statiques optimisés seront générés dans le dossier `dist/`.

---

## 🌐 Guide de Déploiement en Ligne

Ce projet étant une application **Single Page Application (SPA)** basée sur Vite, il peut être hébergé gratuitement et facilement sur les plateformes suivantes :

### Option 1 : Vercel (Recommandé - Simple & Ultra Rapide)
1. Créez un compte sur [Vercel](https://vercel.com).
2. Connectez votre dépôt GitHub.
3. Vercel détecte automatiquement la configuration **Vite**.
4. Cliquez sur **Deploy**. Le site est en ligne avec HTTPS et CDN mondial en moins de 2 minutes.

### Option 2 : Netlify
1. Connectez votre dépôt sur [Netlify](https://www.netlify.com).
2. Paramètres de build :
   - **Build Command** : `npm run build`
   - **Publish directory** : `dist`
3. Déployez votre site.

### Option 3 : GitHub Pages
1. Ajoutez la configuration de base dans `vite.config.ts` si nécessaire :
   ```ts
   base: '/<nom-du-repo>/',
   ```
2. Utilisez l'action GitHub Pages officielle pour déployer automatiquement le dossier `dist`.

### Option 4 : Cloudflare Pages
1. Créez un projet sur [Cloudflare Pages](https://pages.cloudflare.com/).
2. Sélectionnez le template **Vite / React**.
3. Déploiement instantané avec performances globales de pointe.

---

## 📂 Structure du Projet

```text
├── public/                # Fichiers statiques & favicons
├── src/
│   ├── assets/            # Ressources médias et images
│   ├── components/
│   │   ├── modals/        # Modales interactives (ContactModal, ParcoursModal, ProjectModal)
│   │   ├── sections/      # Sections du site (Hero, About, Services, Projects, Marquee)
│   │   └── ui/            # Composants UI réutilisables (Magnet, AnimatedText, ContactButton, FadeIn...)
│   ├── App.tsx            # Composant racine
│   ├── main.tsx           # Point d'entrée de l'application
│   └── index.css          # Feuille de style globale (Tailwind CSS v4)
├── index.html             # Structure HTML & métadonnées SEO
├── package.json           # Dépendances et scripts de build
├── tsconfig.json          # Configuration TypeScript
├── vite.config.ts         # Configuration Vite
├── LICENSE                # Licence Apache 2.0
└── README.md              # Documentation du projet
```

---

## 👤 Auteur

**Diallo Mamadou Bobo (tictos)**
- **GitHub** : [@tictos](https://github.com/tictos)
- **Plateforme TicHub** : [tichub.gitbuisnessformulaire.tech](https://tichub.gitbuisnessformulaire.tech)
- **WhatsApp** : [+224 625 819 843](https://wa.me/224625819843)
- **Email** : [tictos1213@gmail.com](mailto:tictos1213@gmail.com)

---

## 📄 Licence

Ce projet est distribué sous licence **Apache 2.0**. Consultez le fichier [`LICENSE`](./LICENSE) pour plus d'informations.
