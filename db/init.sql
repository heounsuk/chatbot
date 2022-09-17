GRANT ALL PRIVILEGES ON *.* TO 'sql_user'@'%' IDENTIFIED BY 'password';

DROP DATABASE IF EXISTS food;
CREATE DATABASE food;

USE food;

DROP TABLE IF EXISTS desserts;
CREATE TABLE desserts(
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    name varchar(255) not null,
    PRIMARY KEY ( id )
);

INSERT INTO desserts (name) VALUES ('cake'), ('ice cream');