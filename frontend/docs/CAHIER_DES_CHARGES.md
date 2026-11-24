
# VISA CONNECT
## Cahier des charges fonctionnel et technique

Version : 1.0
Date : Novembre 2026

## 1. Présentation du projet

VISA CONNECT est une plateforme numérique tunisienne destinée à accompagner les particuliers dans leurs démarches de demande de visa.

La plateforme permettra de gérer les clients, leurs dossiers, les documents nécessaires, le suivi des demandes et la facturation des prestations.

## 2. Objectifs

- Simplifier les démarches administratives.
- Centraliser les informations des clients.
- Assurer le suivi des dossiers de visa.
- Faciliter la gestion des documents.
- Automatiser la facturation.
- Offrir une expérience simple sur ordinateur et smartphone.

## 3. Types d'utilisateurs

### Administrateur
- Gestion complète de la plateforme.
- Gestion des clients.
- Gestion des dossiers.
- Gestion des prestations et tarifs.
- Gestion des factures.
- Accès aux statistiques.

### Client
- Création de compte.
- Consultation de son dossier.
- Transmission de documents.
- Suivi de l'avancement.
- Consultation des factures.

## 4. Gestion des clients

Chaque client disposera d'une fiche individuelle contenant :
- Nom et prénom.
- Date de naissance.
- Nationalité.
- Numéro de téléphone.
- Adresse électronique.
- Adresse.
- Informations du passeport.

## 5. Gestion des dossiers de visa

Chaque dossier comportera :
- Identifiant unique.
- Identité du client.
- Pays de destination.
- Type de visa.
- Date de création.
- Liste des documents nécessaires.
- Statut du dossier.

Statuts possibles :
- Nouveau.
- En préparation.
- Documents manquants.
- Prêt pour dépôt.
- Déposé.
- En cours de traitement.
- Visa accordé.
- Visa refusé.
- Clôturé.

## 6. Gestion documentaire

- Téléchargement des documents.
- Classement par client et par dossier.
- Consultation des documents.
- Contrôle des pièces manquantes.
- Protection des données personnelles.

## 7. Gestion des prestations et tarifs

L'administrateur pourra :
- Créer des prestations.
- Définir les tarifs.
- Modifier les prix.
- Associer une prestation à un dossier.

Tous les prix affichés seront en dinars tunisiens (TND), toutes taxes comprises (TTC).

## 8. Facturation

Le système devra permettre :
- La création de factures électroniques.
- La numérotation automatique.
- Le calcul HT et TVA.
- L'affichage du montant TTC.
- L'exportation des factures en PDF.
- L'archivage des factures.

Les règles fiscales tunisiennes applicables devront être configurées et validées avant la mise en production.

## 9. Tableau de bord

Le tableau de bord administrateur affichera :
- Nombre total de clients.
- Nombre de dossiers actifs.
- Dossiers en attente.
- Dossiers clôturés.
- Chiffre d'affaires.
- Factures émises.

## 10. Architecture technique

La solution comprendra :

### Frontend
Interface web responsive et application Android sous forme de PWA.

### Backend
API sécurisée pour la gestion des utilisateurs, clients, dossiers et factures.

### Database
Base de données centralisée et sécurisée.

### Hébergement
Hébergement envisagé : VPS Oxahost.

## 11. Sécurité

- Authentification sécurisée.
- Gestion des rôles et permissions.
- Protection des données personnelles.
- Sauvegardes régulières.
- Connexion HTTPS.
- Protection des documents confidentiels.
- Journalisation des opérations sensibles.

## 12. Version mobile Android

La plateforme sera conçue comme une Progressive Web App (PWA).

Elle devra permettre :
- Installation sur Android.
- Interface adaptée aux smartphones.
- Navigation rapide.
- Consultation des dossiers.
- Transmission de documents.
- Notifications selon les possibilités techniques.

## 13. Langues

La plateforme sera préparée pour une interface multilingue :
- Français.
- Arabe.
- Anglais.

## 14. Budget et organisation

Budget maximal prévisionnel : 7 500 TND.

Développement : collaboratif.

Le développement sera réalisé progressivement, avec validation de chaque étape.

## 15. Évolutions futures

- Espace client avancé.
- Notifications automatiques.
- Paiement en ligne.
- Gestion de plusieurs agents.
- Statistiques avancées.
- Automatisation de certaines tâches administratives.

## 16. Principe fondamental

VISA CONNECT est un service privé d'accompagnement administratif.

La plateforme ne représente aucune ambassade ni autorité consulaire et ne garantit pas l'obtention d'un visa.
