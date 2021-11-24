var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'domus',
    multipleStatements: true
}); 
 
connection.connect((error)=>{
    if(error){
        console.log('Error de conexion: '+error);
        return;
    }
    console.log('* Database conectada *')
})





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* probar conecion database */
router.get('/probarbase', function(req, res, next) {
  if (db !=null){
    res.send('coneccion realizada');
  } else {
    res.sent('coneccion fallida')
  }
});

/* GET home page. */
router.get('/administradorSitioMenu', function(req, res, next) {
  res.render('administradorSitioMenu');
});

router.get('/select', function (req, res, next) {
 
  connection.query('SELECT * FROM usuario', function (err,rs) {
    console.log(rs);
      res.render('select', {book:rs});
      
  });

});


router.get('/administradorSitioAlta', function(req, res, next) {
  res.render('administradorSitioAlta');
});

router.post('/administradorSitioAlta', function(req, res, next) {

                const name = req.body.nombre;
                const dni = req.body.dni;
                const rol = req.body.rol;
                const tel = req.body.telefono;
                const eMail = req.body.mail;
                const username = req.body.username;
                const pass = req.body.passw;
                const telAlter = req.body.telAlt;




                const user = {
                name: name,
                dni: dni,
                rol: rol,
                telefono: tel,
                mail: eMail,
                username: username,
                password: pass,
                telAlt: telAlter,

                };
                console.log(user);

                connection.query('INSERT INTO usuario SET ?', [user], function (err,rs) {
                  
                
                    res.render('administradorSitioMenu');
                
                });
  
 
});




router.get('/administradorSitioBaja', function(req, res, next) {
  res.render('administradorSitioBaja');
});

module.exports = router;


