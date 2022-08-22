![Footer](https://user-images.githubusercontent.com/75450615/175360797-46169532-08fc-42e0-a755-0dafa43086bd.png)

Para poder hacer el deployment en Heroku tuve que hacer correr el script:

npm run build

en la implementación de react. Esto genera una página está que se encuentra en la carpeta build, esta carpeta hay que copiarla al backend.
Para que express pueda servir la página estática de react hay que agregar las siguientes líneas de código:

app.use(express.static(path.join(__dirname, './build')));

El backend se creó con la siguiente aplicación:

https://expressjs.com/es/starter/generator.html

# Proyecto: attendance with camera back
