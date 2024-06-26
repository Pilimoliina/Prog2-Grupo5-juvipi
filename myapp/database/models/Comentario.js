module.exports = function (sequelize, DataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        usuariosId: {
            type: DataTypes.INTEGER
        },
        productosId: {
            type: DataTypes.INTEGER
        },
        textoComentario: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }}

    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "usuariosId"
        });

    Comentario.belongsTo(models.Producto,{
            as: "productos",
            foreignKey: "productosId"
        });
    }

    return Comentario;
}