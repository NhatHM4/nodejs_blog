module.exports = {
    multipleMongooseToObject: function (mongooseArray) {
        // console.log(mongooseArray);
        return mongooseArray.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        // console.log(mongoose[0].toObject());
        return mongoose ? mongoose[0].toObject() : mongoose;
    },
};
