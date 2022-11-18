/* 1er paso: Exportar fun */
module.exports = function (sequelize, dataTypes ) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = "Usuario";

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        user : {
            type : dataTypes.STRING
        },
        email : {
            type : dataTypes.STRING
        },
        contrasenia : {
            type : dataTypes.STRING
        },
        foto : {
            type : dataTypes.STRING
        },
        fecha : {
            type : dataTypes.DATE
        },
        dni : {
            type : dataTypes.INTEGER.UNSIGNED
        },
      
    } 

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "usuarios",
        timestamps : true,
        underscored : false
    }

    /* 5to paso : crear el metodo define() con los 3 parametros */
    
    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        
        Usuario.hasMany(models.Posteo, {
            foreignKey: 'id_usuario',
            as: 'posteos' // usuario.posteos.img
        })

        Usuario.belongsToMany(models.Usuario, {
            as: 'misSeguidores',
            through: 'seguidores',
            foreignKey: 'id_seguido',
            otherKey: 'id_seguidor',
            timestamps: true  
        })

        Usuario.belongsToMany(models.Usuario, {
            as: 'misSeguidos',
            through: 'seguidores',
            foreignKey: 'id_seguidor',
            otherKey: 'id_seguido',
            timestamps: true  
        })
    }
   
    return Usuario;
}