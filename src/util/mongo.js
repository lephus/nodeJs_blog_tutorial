module.exports = {
    multipleMongoToObject: function (mongoArray){
        return mongoArray.map(mongoArray => mongoArray.toObject());
    },
    mongoToObject: function (mongo){
        return mongo ? mongo.toObject(): mongo;
    }
};