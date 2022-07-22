CREATE DATABASE estudiantes_db;

USE estudiantes_db;

CREATE TABLE estudiantes(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    correo VARCHAR(50), 
    PRIMARY KEY (id)
);
CREATE TABLE cursos(
    id INT AUTO_INCREMENT,
    nombre VARCHAR(20),
    id_estudiante int,
    PRIMARY KEY (id),
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes (id)
);

CREATE TABLE notas(
    id_estudiante int,
    id_curso int,
    parcial int,
    final int,
    FOREIGN KEY (id_estudiante) REFERENCES estudiantes (id),
    FOREIGN KEY (id_curso) REFERENCES curso (id)
);

DESCRIBE estudiantes;
DESCRIBE cursos;
DESCRIBE notas;