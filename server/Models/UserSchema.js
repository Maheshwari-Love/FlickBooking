// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');


// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     password:{
//         type: String,
//         required: true,
//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true
//     },
//     bookings:{
//         type: Array,
//         default: [],
//     }
// },{
//     timestamps: true
// })

// userSchema.pre('save', async function (next) {
//     const user = this;

//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 8);
//     }

//     next();
// });



const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModal = mongoose.model("users",UserSchema)

module.exports = UserModal