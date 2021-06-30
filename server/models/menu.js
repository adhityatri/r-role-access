module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("menu", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        pages: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Menu;
};
