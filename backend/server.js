// Dependencies
// =============================================================
var express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const User = require ("./model/users")
const Publicaciones = require ("./model/posts");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verify = require("./midware/verifyAccess");


dotenv.config();
// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 4000;

//DB connection 

mongoose.connect(process.env.MONGODB_HOST, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(db=> console.log('db connected'))
.catch(err=> console.log(err))


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/////////De aquí pa abajo vienen las rutas

// CryptoBlogD (TEST DATA) información dummy para pruebas
// =============================================================
/*var users = [
  {
    correo: "Yoda@jedimaster.com",
    password: "may4thbewithyou",
    userName: "cryptoMaster",
    idioma: "English",
    moneda: "USD",
    deleteFlag: false
  },
  {
    routeName: "test",
    correo: "test@test.com",
    password: "test",
    userName: "test",
    idioma: "English",
    moneda: "USD",
    deleteFlag: false
  }
];

var posts = [
 {
  userName:"test",
  postContent:"This is a sample post"
 },
 {
  userName:"test",
  postContent:"This is a sample post 2"
 }]
 */

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.send("Crypto Blog D API!");
});


//codigo para gestionar el login
app.post("/login", async (req, res) => {
  let correo = req.body.correo; 
  let plainpassword = req.body.password;
  console.log(`Login data: ${req.body.email}  ${req.body.password}`)

  let user = await User.findOne({ correo: correo });

  if (!user) {
    res.json({
      message: "User or Password is incorrect",
      code: "UPI",
      err: true,
    });
  } else {
    let valid = await bcrypt.compareSync(plainpassword, user.password);

    if (valid) {
      const today = new Date();
      const expiresDate = new Date();

      expiresDate.setDate(today.getDate() + 1);

      let token = jwt.sign({ id: user.correo }, process.env.SECRET, {
        expiresIn: "1d",
      });
      console.log(token);
      res.json({ token: token, expiresIn: expiresDate });
    } else {
      res.json({
        message: "User or Password is incorrect",
        code: "UPI",
        err: true,
      });
    }
  }
});


// Displays all users
app.get("/profile", async function(req, res) {
  const profiles = await User.find();
  return res.json(profiles);
});

// Displays a single user profile, or returns false
app.get("/profile/:user", async function(req, res) {
  var chosen = req.params.user;

  console.log(chosen);

  const profile = await User.findOne({userName:chosen})

  if (profile){
    return res.json(profile);
  }
  else{
    return res.json({msg:"No existe informacion de este usuario"});
  }
  /* 
  for (var i = 0; i < users.length; i++) {
    if (chosen === users[i].routeName) {
      return res.json(users[i]);
    }
  }
*/
  
});

// Create New user - takes in JSON input
app.post("/users", async function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  //var newuser = req.body;
  //console.log(newuser);
  let user = new User(req.body)
  let exists = await User.findOne({ correo: user.correo });
  console.log(exists);

  if (!exists) {
    user.password = bcrypt.hashSync(user.password, 10);
    await user.save();
    res.json({ message: "User created", code: "UC", err: false });
  } else {
    res.json({ message: "User already exists", code: "UAE", err: true });
  }

});

//create new post
app.post("/newpost",async function(req, res){
 let publicacion = new Publicaciones(req.body)
 //publicacion.userName = req.userName;// esto no va porque queremos que los post sean publicos para todos

try{ 
  await publicacion.save()
}
catch(err){
  console.log(err)
}
//publicacion.push(newpost); creo que esto causa errores
 res.json(publicacion);

}); 

// Displays all posts
app.get("/posts", async function(req, res) {

let publicaciones = await Publicaciones.find()
    console.log(publicaciones)
    return res.json(publicaciones);
  });

  // deletes account

app.post("/delete", verify, async function(req, res){
  /*var chosen = req.params.userName;
  const profile = await User.findOne(chosen)
  console.log("delete flag")*/
  let profile = await User.findById(req.body.id)
  if (profile){
    await profile.delete();
    res.json({msg:"User deleted"})
  }
  else{
    return res.json({msg:"No existe informacion de este usuario"});
  }

})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = app;