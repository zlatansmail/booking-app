import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    roomPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }, 
    maxPersons: {
        type: Number,
        required: true,
    },
    roomNumbers: [{
        number: Number, 
        unavailableDates: [{ type: Date }]
    }]
});

export default mongoose.model("Room", roomSchema);
