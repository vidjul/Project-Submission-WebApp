# Project-Submission-WebApp

Express sert à servir les fichiers React qui auront été build et à servir les données depuis MongoDB.
Il faudra placer le contenu du dossier build obtenu avec React dans le dossier Public.

# Fonctionnement de l'API

Lorsque des données sont envoyées via la requête HTTP POST, il est possible d'envoyer ces données sous trois types différents:
* text/plain: un texte brut
* application/x-www-form-urlencoded: Les valeurs sont encodées sous forme de couples clé/valeurs. Les caractères autres que les lettres ou les chiffres sont [percent-encoded](https://developer.mozilla.org/fr/docs/Glossaire/percent-encoding)
* application/form-data: Même chose, sauf que les caractères spéciaux sont envoyés sans encodage. Cependant, les données envoyées sont plus lourdes, donc plus lente à charger.

Le module `body-parser` permet de décoder les données envoyées via HTTP post et permet d'affecter à `req.body` (req correspondant à la requête récupérée par Express) le contenu de la requête en enlevant l'en-tête.

Nous avons choisi d'utiliser `www-form-urlencoded` car ce type d'encodage est plus rapide à charger que `form-data`.

On a donc cette ligne dans `App.js`:

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```

Comme nous utilisons MongoDB et Mongoose, nous préférons avoir les données directement sous format JSON pour pouvoir les enregistrer dans la base directement. C'est la raison pour laquelle cette ligne est ajoutée juste après.

```javascript
app.use(bodyParser.json());
```

Il est possible d'envoyer directement des documents JSON via la méthode POST en javascript (avec jQuery), mais ce n'est par exemple pas possible uniquement avec du HTML et procéder à une conversion en json à partir de www-encoded permet d'obtenir une API qui fonctionnera de manière universelle.
Pour nous, c'est plus simple du côté client comme il nous suffit alors de créer un formulaire en HTML.
