# Guide d'intégration de Brevo pour UTLR

Ce guide explique comment configurer et utiliser Brevo (anciennement Sendinblue) pour gérer les inscriptions à la newsletter du site UTLR.

## Avantages de Brevo

- **Conformité RGPD** : Brevo est une entreprise française avec des serveurs en Europe
- **Interface simple** : Gestion facile des contacts et des campagnes
- **Fonctionnalités avancées** : Segmentation, automatisation, statistiques
- **Plan gratuit** : Jusqu'à 300 emails par jour et stockage illimité des contacts

## Configuration initiale

### 1. Créer un compte Brevo

1. Rendez-vous sur [Brevo.com](https://www.brevo.com/fr/) et créez un compte
2. Confirmez votre adresse email
3. Complétez les informations de votre profil

### 2. Créer une liste de contacts

1. Dans le menu de gauche, cliquez sur **Contacts → Listes**
2. Cliquez sur **Créer une liste**
3. Nommez-la "UTLR Newsletter" et ajoutez une description
4. Notez l'ID de la liste qui apparaît dans l'URL (par exemple: `/contact/lists/3`)

### 3. Obtenir une clé API

1. Dans le menu de gauche, cliquez sur **Paramètres → Clés API & Tokens**
2. Cliquez sur **Générer une nouvelle clé API**
3. Donnez un nom à votre clé (par exemple "UTLR Website")
4. Copiez la clé générée

### 4. Configurer le site UTLR

1. Créez un fichier `.env` à la racine du projet (basé sur `.env.example`)
2. Ajoutez votre clé API Brevo :
   ```
   VITE_BREVO_API_KEY=votre_clé_api
   ```
3. Modifiez le fichier `src/lib/newsletter.ts` pour mettre à jour l'ID de liste :
   ```typescript
   const BREVO_LIST_ID = 3; // Remplacez par l'ID de votre liste
   ```

## Utilisation quotidienne

### Consulter les inscrits à la newsletter

1. Dans le menu de gauche, cliquez sur **Contacts → Listes**
2. Cliquez sur votre liste "UTLR Newsletter"
3. Vous verrez tous les contacts inscrits avec leurs informations

### Envoyer une campagne email

1. Dans le menu de gauche, cliquez sur **Campagnes → Email**
2. Cliquez sur **Créer une campagne**
3. Suivez les étapes pour créer et envoyer votre campagne

### Exporter les contacts

1. Dans la vue de votre liste, cliquez sur **Exporter**
2. Choisissez le format (CSV ou Excel)
3. Vous recevrez un email avec le lien de téléchargement

## Conformité RGPD

Brevo est conforme au RGPD, mais vous devez également :

1. Mettre à jour votre politique de confidentialité pour mentionner :
   - L'utilisation de Brevo pour gérer les newsletters
   - Les données collectées (email)
   - La finalité (envoi de newsletters)
   - Les droits des utilisateurs (accès, rectification, suppression)

2. Ajouter une case à cocher pour le consentement explicite (déjà présente dans votre formulaire)

3. Prévoir un processus de désinscription (Brevo l'ajoute automatiquement aux emails)

## Dépannage

### Problèmes d'inscription

Si les utilisateurs ne peuvent pas s'inscrire :

1. Vérifiez que la clé API est correcte dans le fichier `.env`
2. Vérifiez que l'ID de liste est correct dans `newsletter.ts`
3. Consultez la console du navigateur pour voir les erreurs détaillées

### Limites du plan gratuit

Le plan gratuit de Brevo permet :
- Stockage illimité de contacts
- 300 emails par jour
- Fonctionnalités de base

Si vous atteignez ces limites, envisagez de passer à un plan payant. 