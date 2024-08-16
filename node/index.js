const app = require("./app");
const db = require("./config/db");
const UserModel = require("./models/user.model")

const port = 3300;

app.get('/',(req, res) => {
    res.send("Hello World !");
});

app.listen (port,() => {
    console.log("Ecoute du serveur au port http://localhost:3300");
});
