module.exports = function (sequelize, DataTypes) {
    var Savings = sequelize.define("Savings", {
        balance: DataTypes.STRING,
        
        googleId:DataTypes.STRING,

        userName: DataTypes.STRING,

        password:DataTypes.STRING,

    })
    return Savings;
};

