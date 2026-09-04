# Site Hyperion Group — mode d'emploi

## Mise en ligne (Netlify + GitHub)
1. Dans le dépôt GitHub, supprimez les anciens fichiers et copiez tout le contenu de ce dossier à la racine.
2. Commit + push : Netlify redéploie automatiquement.
3. Dans Netlify > Forms, vérifiez que le formulaire « contact » apparaît, puis ajoutez une notification e-mail vers contact@hyperiongroup.fr.

## Où modifier quoi
| Je veux…                                   | Fichier |
|--------------------------------------------|---------|
| Ajouter / modifier un métier (texte, icône) | `metiers.js` |
| Changer le menu ou le pied de page          | `main.js` (constantes NAV / FOOT) |
| Changer l'adresse e-mail                    | `main.js` (EMAIL) + liens `mailto:` dans offres-emploi.html et contact.html |
| Ajouter une offre d'emploi                  | `offres-emploi.html` (dupliquer un bloc `.job`) |
| Ajouter des photos                          | `assets/photos/` (voir LISEZ-MOI.txt) |
| Remplir mentions légales / cookies          | `mentions-legales.html`, `politique-cookies.html` (champs surlignés `.ph`) |
| Couleurs, typos                             | `style.css` (variables `:root`) |
