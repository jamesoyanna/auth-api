const mongoose = require('mongoose');
mongoose.Schema = mongoos.Schema;

const status = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    role:{
        type: String,
        required: true,
        enum: ["SuperAdmin", "EndUser"]
    },
    isActive: {type: Boolean, default: false},
    isVerified: {type: Boolean, default: false},
    createdAt: {
        type: Date,
        default: Date.now,
    },
} ,{timestamps: true})


const Status = mongooose.model("Status", status);

module.exports = Status;