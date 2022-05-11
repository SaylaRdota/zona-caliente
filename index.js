const path = require("path");

const { exec } = require("child_process");

console.log('Instalando dependencias...');
console.log('Este proceso puede tardar');

exec("npm i", (err, stdout, stderr) => {
   
  if (err) console.log("Hubo un error: ", err);
  if (stderr) {
    return console.log("Hubo un error ejecucion: ", stderr);
  }
  console.log(`Todo ok: ${stdout}`);
  const express = require("express");
  const app = express();

  app.use(express.static("dist"));
  app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/zona-caliente/index.html"));
  });

  let port = 4443;
  var server = app.listen(port, function () {
    //muestro algo en la consola para saber si arranco bien el proycto
    console.log("Servidor web escuchando en el puerto " + port);
  });
});
