module.exports = (sequelize, DataTypes) => {
    return sequelize.define('character_info', {
        title: {
            type: DataTypes.STRING,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        epithet: {
            type: DataTypes.STRING,
        },
        house: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM("alive", "dead", "missing"),
        },
    }, {timestamps: false});
}
