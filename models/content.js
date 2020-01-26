module.exports = (sequelize, DataTypes) => (
    sequelize.define('content', {
        content: {
            type:DataTypes.STRING(50),
            allowNull:false,
        }
    })
);