const User = require('../models/User');

exports.createUser = async function (userdata) {

    try {

        const user = new User(userdata);
        await user.save();
        return user;


    } catch (e) {

        throw Error(`Error creating user. Message:${e}`);
    }
};


exports.findUser = async function (email) {

    try {

        const user = await User.findOne({ email: email }).exec();
        return user;
    } catch (e) {

        throw Error(`Error creating user. Message:${e}`);
    }
};
