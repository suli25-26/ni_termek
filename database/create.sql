create database termek;

grant all privileges
on termek.*
to termek@localhost
identified by 'titok';


use termek;

create table employees (
    id int not null primary key auto_increment,
    name varchar(50),
    city varchar(50),
    salary int
);