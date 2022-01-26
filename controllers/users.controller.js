var UsersService = require('../services/users.service');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

exports.createUser = async function (req, res, next) {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        var users = await UsersService.createUser({ email: req.body.email, password: hashedPassword });

        return res.status(200).json({ status: 200, data: users, message: "User created successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

let refreshTokens = [];

exports.loginUser = async function (req, res, next) {
    try {

        const user = await UsersService.findUser(req.body.email);

        if (!user) {
            return res.status(400).json({ status: 400, message: "Invalid Username" });
        }

        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = generateAccessToken({ name: user.email });
            const refreshToken = jwt.sign({ name: user.email }, process.env.REFRESH_TOKEN_SECRET);
            return res.status(200).json({ status: 200, data: { token: accessToken, refreshToken: refreshToken }, message: "User logged in successfully" });
        } else {
            return res.status(400).json({ status: 200, message: "Invalid password" });
        }


    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRY });
}

exports.refreshToken = async function (req, res, next) {
    try {

        const refreshToken = req.body.token;
        if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            const accessToken = generateAccessToken({ name: user.name });
            res.json({ accessToken: accessToken });
        });



    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};