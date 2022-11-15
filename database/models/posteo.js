/* 1er paso: Exportar fun */
module.exports = function (sequelize, dataTypes ) {

    /* 2do paso : crear un alias para que sequelize sepa con cual modelo debe conectar */

    let alias = "Posteo";

    /* 3er paso : Es crear una variable con la extructura de la tabla */

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_usuario : {
            type : dataTypes.INTEGER.UNSIGNED
        },
        nombre_imagen : {
            type : dataTypes.STRING
        },
        texto_imagen : {
            type : dataTypes.STRING
        },
      
    } 

    /* 4ta paso: crear un obj lit con la configuracion de la tabla */
    let config = {
        tableName : "posteos",
        timestamps : true,
        underscored : false
    }
    let Posteo = sequelize.define(alias, cols, config);
    Posteo.associate=(models)=>{
        Posteo.belongsTo(models.Usuario,{
            foreignKey:'id_usuario',
            as:'usuario'
        })

        Posteo.hasMany(models.Comentario,{
            foreignKey:'id_posteo',
            as:'comentario'
        })
    }
    /* 5to paso : crear el metodo define() con los 3 parametros */
    
    return Posteo;

   
}