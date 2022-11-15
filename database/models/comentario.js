/* 1er paso: Exportar fun */
module.exports = function (sequelize, dataTypes ) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = "Comentario";

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_posteo : {
            type : dataTypes.INTEGER.UNSIGNED
        },
        id_usuario : {
            type : dataTypes.INTEGER.UNSIGNED
        },
        texto_comentario : {
            type : dataTypes.TEXT
        },
        
      
    } 

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "comentarios",
        timestamps : true,
        underscored : false
    }

    /* 5to paso : crear el metodo define() con los 3 parametros */
    let Comentario = sequelize.define(alias, cols, config);


    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Posteo,{
            foreignKey:'id_posteo',
            as:'posteo'
        })
        Comentario.belongsTo(models.Usuario,{
            foreignKey:'id_usuario',
            as:'usuario'
        })
    }

    return Comentario;

   
}