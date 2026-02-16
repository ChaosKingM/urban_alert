const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Succeesful connection ❤️‍🔥');
    } catch (error) {
        console.log(`🚨 Error connection MongoDB ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;