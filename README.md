# Template pour le hackathon

## Introduction

Le but de ce template est d'avoir installé 2 paquets npm :

- axios
- react-router-dom

## Pourquoi ?

Car nous n'allons pas perdre de temps à faire tout ça, même si ce n'est pas long, ce n'est pas très intéressant.

## Installation

```shell
$ git clone <le-template-hackathon>
$ cd <le-template-hackathon>
$ npm install
$ npm start
```

## Ce que j'ai fait

L'architecture de notre projet est la suivante :

    - src
        - assets
            - App.css
        - components
            - RandomApi.jsx
        - pages
            - Home.jsx
        - services
        - App.js
        - index.js
        - .gitignore
        - package.json

Alors ici, dans `src/components/RandomApi.jsx`, nous avons un appel à l'API, ça a pour but de tester notre
packages `axios`.
Bien sûr, vous pouvez supprimer ce morceau de code.

Dans `src/index.js` j'ai importé `react-router-dom` et `App.js`. (`App.js` est le fichier principal de notre projet dans
lequel j'ai mis mes `Routes`)

Vous pouvez bien évidemment supprimer ce morceau de code.