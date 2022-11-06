# QUESTIONS (Comandos y Enciptación)

1. Escribé 3 comandos GIT y expliqué cual es su funcionamiento
2. Escribé 2 comandos NPM
3. ¿Las peticiones await se pueden hacer en funciones no async?
4. ¿Por qué se debe programar en Inglés?
5. Describa la diferencia principal entre Json Web Token y La encriptación de un objeto
6. ¿Por qué los tokens no son suficientes para un sistema de autenticación?

NOTA 5/6

# SOLUTION

bien

1. TRES COMANDOS GIT

   1. git checkout -b => este comando sirve para pasarse a una nueva rama
   2. code . => sirve para entrar al editor de codigo que tengamos configurado, en la carpeta en la que estemos.
   3. cd nombreCarpetaOArchivo => sirve para ubicarnos/entrar en una carpeta o archivo

# No 4. git add => sirve para subir todos los archivos modificados que tengamos al Stage

5.  git clone rutacopiadodegithub => sirve para clonar un repositorio en nuestra maquina.

bien 2. DOS COMANDO NPM

1.  npm install = para instalar las dependencias.
2.  npm run palabraQueElijamos = es un comando que en realidad establecemos en los SCRIPTS del archivo de configuración.
3.  npm init (no estoy completamente seguro) => sirve para inicializar un proyecto.

bien 3. No, no se puede. Las funciones Async no tendrían sentido si en el await, van de la mano.
Un ejemplo podría ser: si hacemos una funcion Panadería(), en donde va a ejecutar todas las acciones que suceden en una panadería, como: hornear, atender, fritar huevos, etc., podemos ponerle el await en hornear para que vaya haciendose por una vía alterna, mientras atender y fritar huevos se hacen también.

bien 4. En inglés se debe programar porque es el idioma mundialmente utilizado para esto, y con eso tenemos muchas ventajas: entender los códigos, hacer nuestro códigos entendibles para el resto del mundo. Además de que en las empresas se usa también este idioma. Por ende, programar usando otra lengua sería mal acostumbrarnos.

bien 5. La diferencia entre la encriptación de un objeto y JWT es que JWT, asigna un tiempo limite con una clave generada automáticamente en el momento. Mientras que la encriptación de un objeto, toma la contraseña y la encripta con hash.

mal 6. Según clases anteriores, vimos que hay tres sistemas de encriptación y cada uno tiene sus ventajas y vulnerabilidades. Sin embargo, no logro recordar por qué los tokens no son suficiente. Según lo que entiendo, los tokens asignan un tiempo límite a la sesión, además de encriptar una contraseña generada en el momento.
