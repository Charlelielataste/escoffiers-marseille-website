# Site Web des Escoffiers de Marseille

Site web officiel de l'association des Escoffiers de Marseille, construit avec Astro et géré via Decap CMS.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run cms`             | Starts Decap CMS proxy server for local testing  |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Gestion du contenu avec Decap CMS

Ce site utilise Decap CMS pour la gestion du contenu. Voici comment l'utiliser en local :

### Tests avec sauvegarde locale

Pour tester Decap CMS avec sauvegarde réelle des modifications en local :

1. **Lancer le serveur Astro** (Terminal 1) :

   ```bash
   npm run dev
   ```

2. **Lancer le proxy Decap** (Terminal 2) :

   ```bash
   npm run cms
   ```

3. **Accéder à l'interface d'administration** :
   - Ouvrir : `http://localhost:4321/admin`
   - Cliquer sur "Login"
   - Utiliser n'importe quels identifiants (non vérifiés en local)

### Fonctionnalités disponibles

- **Articles** : Créer et éditer des articles avec catégories
- **Événements** : Gérer les événements de l'association
- **Membres** : Ajouter/modifier les membres de l'association
- **Article à la une** : Sélectionner l'article mis en avant
- **Catégories** : Créer des catégories pour organiser les articles

### Notes importantes

- ✅ Les modifications sont **sauvegardées** dans les fichiers locaux
- ✅ Git suit automatiquement les changements
- ✅ Les images sont uploadées dans `/public/uploads/`
- ✅ Vous pouvez commiter vos modifications normalement

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
