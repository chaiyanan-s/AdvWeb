const expressFunction = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = expressFunction.Router();

const key = 'MY_KEY';

var Schema = require('mongoose').Schema;

const userSchema = Schema({
    username: String,
    password: String,
}, {
    collection: 'users'
})

let User
try {
    User = mongoose.model('users')
} catch {
    User = mongoose.model('users', userSchema);
}

const compareHash = async(plainText, hashText) => {
    try {
        const isMatch  = await bcrypt.compare(plainText, hashText);
        console.log("psswd chk: ",isMatch)
        return {status: isMatch};
    } catch(err) {
        throw new Error('Error bcrypt compare')
    }
}

const findUser = (username) => {
    try {
        const result = User.findOne({username: username})
        return result
    } catch(err) {
        throw new Error(err)
    }    
}

router.route('/signin')
    .post( async (req, res) => {
        try {
            const playload = {
                username: req.body.username,
                password: req.body.password,
            };
    
            console.log("playload: ", playload )

            const result = await findUser(playload.username);
            if (!result) {
                return res.status(404).json({ message: 'User not found' });
            }
            const loginStatus = await compareHash(playload.password, result.password);

            const status = loginStatus.status;

            if(status) {
                const token = jwt.sign({username: res.username}, key, {expiresIn: 60*5});
                res.status(200).json({result, token, status});
                console.log("token: ", token)
            } else {
                res.status(200).json(status);
                // res.status(401).json({ message: 'Invalid password' });
            }

        } catch (err) {
            res.status(500).send({ error: err.message });
            console.log(err);
        }
    })
module.exports = router    