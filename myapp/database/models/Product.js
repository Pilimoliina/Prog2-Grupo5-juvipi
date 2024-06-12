module.exports = function (sequelize, DataTypes) {

    /* alias */
    let alias = "Producto";

    /* Configuracion de las columnas */
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        usuariosId:{
            type: DataTypes.INTEGER
        },
        foto:{
            type: DataTypes.STRING
        },
        nombre:{
            type: DataTypes.STRING
        },
        descripcion:{
            type: DataTypes.STRING
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        },
        deletedAt:{
            type: DataTypes.DATE
        }

  	}
        /* Config de la tabla */
        let config = {
            tableName: "productos",
            timestamps: true,
            underscored: true
        }
    
        let Producto = sequelize.define(alias, cols, config);
        Producto.associate = function(models) {
            Producto.belongsTo(models.Usuario, {
                as: "Usuario",
                foreignKey: "usuariosId"
            });
    
            Producto.hasMany(models.Comentario, {
                 as: "Comentario",
                //  foreignKey: "productosId"
             });
        }
        
   

        return Producto;
    
}
