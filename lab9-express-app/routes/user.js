var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = require("mongoose").Schema;
const userSchema = Schema({
    username: String,
    password: String,
}, {
    collection: 'users'
});

let User

try {
    User = mongoose.model('users')
} catch {
    User = mongoose.model('users', userSchema)
}

const makeHash = async(plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result
}

const insertUser = (dataUser) => {
   try {
        var new_user = new User({
            username: dataUser.username,
            password: dataUser.password,
        });
        new_user.save();
        return {message: 'Sign up successfully'};
    } catch (err) {
        throw new Error('Cannot insert user to DB!'); 
    }
}

router.route('/signup')
    .post(async(req, res) => {
        try {
            const hashedPassword = await makeHash(req.body.password);
            const playload = {
                username: req.body.username,
                password: hashedPassword,
            };

            console.log(playload);

            const result = await insertUser(playload)
            console.log(result)
            res.status(200).json(result);
        } catch(err) {
                console.log(err)
                res.status(500).json({error: err.message})
        }

    });
module.exports = router