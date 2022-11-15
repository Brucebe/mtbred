create schema dbproyectomtb;
use dbproyectomtb;

CREATE TABLE usuarios(
id int  unsigned primary key auto_increment,
user varchar(50) not null,
email varchar(50) not null,
contrasenia varchar(150) not null,
foto  varchar (200) not null,
fecha  date not null,
DNI int unsigned not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/*drop table usuario;*/
CREATE TABLE posteos(
id int  unsigned primary key auto_increment,
id_usuario int unsigned,
nombre_imagen  varchar (200) not null,
texto_imagen text not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
foreign key (id_usuario) references usuarios(id)

);
/*drop table posteos;*/

CREATE TABLE comentarios(
id int unsigned primary key auto_increment,
id_posteo int unsigned,
id_usuario int unsigned,
texto_comentario text not null,
foreign key (id_usuario) references usuarios(id),
foreign key (id_posteo) references posteos(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE seguidores(
id int unsigned primary key auto_increment,
id_seguido int unsigned,
id_seguidor int unsigned,
foreign key (id_seguido) references usuarios(id),
foreign key (id_seguidor) references usuarios(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/*USUARIOS*/
INSERT INTO  usuarios (`id`, `email`, `contrasenia`, `foto`, `fecha`, `DNI`) values 
(default,'michaelscott@gmail.com','scott1234','/public/images/scott.jpg','1988-06-22',34683203),
(default,'catadiaz@gmail.com','diaz1234','/public/images/diaz.jpg','1978-06-12',89753203),
(default,'gueerrerom@gmail.com','guerrerosss','/public/images/guerrero.jpg','1999-06-13',44362014),
(default,'wos@gmail.com','wos234','/public/images/wos.jpg','2005-07-12',09873203),
(default,'dariobenedetto@gmail.com','dario1234','/public/images/benedetto.jpg','1972-09-02',78353203);

/*POSTEOS*/
INSERT INTO posteos(id, id_usuario, nombre_imagen, texto_imagen)
values
(default, 1 , '/img/Michael/mc.png', 'Michael'),
(default,2,'/img/catadiaz/mc.png','cata diaz'),
(default,3,'/img/guerrero/mc.png','guerrero'),
(default,4,'/img/wos/mc.png','wos'),
(default,5,'/img/dariobenedetto/mc.png','benedetto'),
(default,1,'/img//catadiaz.png','diaz'),
(default,2,'/img/guerrero/mc.png','miguelguerrero'),
(default,3,'/img/wos/mc.png','wos'),
(default,4,'/img/michaelscott/mc.png','michael'),
(default,5,'/img/benedetto/mc.png','dariobenedetto');


/*COMENTARIOS*/
INSERT INTO comentarios (`id`,`id_posteo`,`id_usuario`,`texto_comentario`) values 
(default, 2, 1, 'Me gusta tu foto'),
(default, 2, 2, 'hola'),
(default, 3, 3, 'buena foto'),
(default, 4, 4, 'cuando nos vemos');





