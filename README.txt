# App Básica Node

## Estructura
```
app-basica-node/
├── package.json
├── .gitignore
├── src/
│   ├── server.js
│   └── routes/
│       └── home.js
└── public/
    └── index.html
```

## Correr localmente
```
npm start
```
Abre http://localhost:3000

## Subir a GitHub
```
git init
git add .
git commit -m "Primera versión"
git branch -M main
git remote add origin <URL_DE_TU_REPO>
git push -u origin main
```

## Probar en Spck Editor
1. Instala Spck Editor y el plugin Node.js.
2. Clona el repo desde Spck (botón Git > Clone) usando la URL de GitHub.
3. Abre la carpeta del proyecto.
4. Corre `node src/server.js` desde la terminal integrada.
5. Abre el navegador del teléfono en http://localhost:3000
