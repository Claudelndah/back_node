const UserService = require("../services/user.service");

exports.register = async(req, res, next) => {
    try{
        const {email, number, name, password} = req.body;

        const successRes = await UserService.registerUser(email, number, name, password);

        res.json({status: true, success:"Utilisateur enrégister"});

    }catch(error){
        throw error;
    }
}

exports.login = async(req, res, next) => {
    try{
        const {email, password} = req.body;

        const user = await UserService.checkUser(email);
        if(!user){
            throw new Error('Utilisateur non trouvé');
        }

        const isMatch = user.comparePassword(password);
        if (isMatch === false){
            throw new Error('Mot de passe incorrect');
        }

        // Enrégistrement des informatios de l'utilsateur dans le jwt token pour ouvrir sa session

        let tokenData = {_id:user._id, email:user.email};

        const token = await UserService.generateToken(tokenData, "secretKey", "1h");

        res.status(200).json({status:true, token:token})

    }catch(error){
        throw(error);
    }

}