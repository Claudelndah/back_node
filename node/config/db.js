const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://cndah:Fiv9Tvk1pwgyirsq@cluster0.fpyvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').on('open', () => {
    console.log("Database connected");
}).on("error", () => {
    console.log("Database Connection error");
});


module.exports = connection; 