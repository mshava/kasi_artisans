CREATE DATABASE artisans;
CREATE USER admin@localhost IDENTIFIED BY '2197832';
GRANT ALL PRIVILEGES ON artisans.* TO admin@localhost;
FLUSH PRIVILEGES;

use artisans;

CREATE TABLE artisans (
  id int not null auto_increment primary key,
  name varchar (100) not null,
  contacts int (11) not null,
  address varchar (100) not null,
  type varchar (100) not null

);

CREATE TABLE user (
  id int not null auto_increment primary key,
  role varchar (100) not null,
  status varchar (100) not null,
  password varchar (100) not null,
  firstName varchar (100) not null,
  lastName varchar (100) not null,
  token varchar (100)

);

CREATE TABLE score (
  id int not null auto_increment,
  score int not null,
  primary key (id),
  key score (score)

);

CREATE TABLE images (
`idpic` int UNSIGNED not null auto_increment,
`caption` varchar (45) not null,
`img` LONGBLOB not null,
primary key(`idpic`)

);
