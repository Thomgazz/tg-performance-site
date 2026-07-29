# TG Performance — site vitrine

Site vitrine pour TG Performance, préparation physique & coaching personnalisé.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Web3Forms pour le formulaire de contact (gratuit)

## Développement

```bash
npm install
npm run dev
```

## Formulaire de contact

Le formulaire utilise [Web3Forms](https://web3forms.com) (gratuit, sans backend à héberger).

1. Créer un compte gratuit sur web3forms.com avec votre email
2. Récupérer la clé d'accès fournie
3. Copier `.env.example` vers `.env.local` et coller la clé :

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_WEB3FORMS_KEY=votre_clé
```

## Déploiement (gratuit)

1. Pousser le projet sur un dépôt GitHub
2. Importer le dépôt sur [vercel.com](https://vercel.com) (plan Hobby gratuit)
3. Ajouter la variable d'environnement `NEXT_PUBLIC_WEB3FORMS_KEY` dans les réglages du projet Vercel
4. Déployer — le site est disponible sur `<nom-du-projet>.vercel.app`

Un nom de domaine personnalisé (ex. `tgperformance.fr`) peut être ajouté plus tard depuis les réglages Vercel, une fois acheté chez un registrar (~10-15€/an).

## Photos

Les blocs "Photo — ..." sont des emplacements réservés (`PhotoPlaceholder`). Pour les remplacer par de vraies photos, déposer les images dans `public/` et remplacer le composant `PhotoPlaceholder` par un composant `next/image` dans les fichiers concernés (`src/components/sections/Hero.tsx`, `About.tsx`).
