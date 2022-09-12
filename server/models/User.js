const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 40,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        minLength: 1,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'active',
        required: true,
    }
});

UserSchema
    .virtual('url')
    .get(function() {
        return `/user/${this._id}`;
    })

module.exports = mongoose.model('User', UserSchema);
