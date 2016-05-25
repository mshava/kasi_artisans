CREATE TABLE artisans (
  id int not null auto_increment primary key,
  name varchar (100) not null,
  contacts int (100) not null,
  address varchar (100) not null,
  job_title varchar (100) not null,
  img varchar (100) not null,
  score int (100) not null
);

CREATE TABLE user (
  id int not null auto_increment primary key,
  status varchar (100) not null,
  password varchar (100) not null,
  firstName varchar (100) not null,
  lastName varchar (100) not null,
  token varchar (100),
);
