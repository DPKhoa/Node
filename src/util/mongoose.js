module.exports = {
mutipleMongooseToObject: function (mongooseArray) {
    return mongooseArray.map(mongooseArray => mongooseArray.toObject());
},
mongooseArray: function (mongooseArray) {
    return mongooseArray ? mongooseArray.toObject(): mongooseArray;
}

};