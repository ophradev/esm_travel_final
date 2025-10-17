# Configuration Vite Pure pour ESM Travel

## État Actuel
Votre site utilise **déjà Vite** comme framework de build ! L'architecture actuelle est :
- ✅ **Vite** : Gère tout le frontend (HMR, build, optimisation)
- ✅ **Express** : Sert Vite en développement (wrapper optionnel)

## Pour Utiliser Vite Directement (Sans Express)

### Option 1 : Modification Manuelle du Fichier .replit

1. **Afficher les fichiers cachés** :
   - Cliquez sur les trois points (•••) en haut à droite du panneau Files
   - Sélectionnez "Show hidden files"

2. **Modifier le fichier `.replit`** :
   - Ouvrez le fichier `.replit`
   - Changez la ligne `run = "npm run dev"` par :
   ```toml
   run = "npx vite --host 0.0.0.0 --port 5000"
   ```

3. **Redémarrer** :
   - Cliquez sur le bouton "Stop" puis "Run"

### Option 2 : Utilisation du Shell

Dans le Shell de Replit, exécutez directement :
```bash
npx vite --host 0.0.0.0 --port 5000
```

### Avantages de Vite Direct
- ✅ Plus simple (pas de serveur Express)
- ✅ Démarrage plus rapide
- ✅ Parfait pour un site statique/vitrine
- ✅ Hot Module Replacement (HMR) ultrarapide

### Configuration Actuelle de Vite

Votre `vite.config.ts` est déjà configuré avec :
- ✅ Plugin React
- ✅ Alias de chemins (@, @shared, @assets)
- ✅ Build optimisé
- ✅ Plugins Replit (cartographer, dev-banner, error-modal)

## Différences Entre les Deux Approches

| Aspect | Express + Vite (Actuel) | Vite Pur |
|--------|------------------------|----------|
| **Frontend** | Vite ✅ | Vite ✅ |
| **Backend** | Express (vide pour l'instant) | Aucun |
| **Routes API** | Possible si besoin futur | Non disponible |
| **Build** | Compatible | Compatible |
| **Déploiement** | Full-stack ready | Statique uniquement |

## Conclusion

**Votre site utilise déjà Vite !** 🎉

Si vous n'avez pas besoin de backend (API, authentification, base de données), vous pouvez passer à Vite pur en modifiant `.replit` comme indiqué ci-dessus.

Si vous prévoyez d'ajouter des fonctionnalités backend plus tard (formulaire de contact avec envoi d'email, réservations, etc.), l'architecture actuelle Express + Vite est idéale.
