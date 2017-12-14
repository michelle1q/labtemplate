# Express and sequelizejs 

## install deps
```sh
npm install
```
## run the backend
```sh
    nodemon ./bin/www
```

after you setup the connection info for the database in src/config/config.js run
```sh
sequelize db:migrate
```
this will create the tables in your database.

for generatic models 
```sh 
sequelize model:create --name user --attributes firstName:string,lastName:string,email:string

---------------------------------------------------------------------------------------------------------
sequelize model:create --name user --attributes firstName:string,lastName:string,email:string,address:string

sequelize model:create --name orders --attributes orderId:integer,date:string

sequelize model:create --name sales --attributes salesId:integer,dateSold:string,amountSold:integer

sequelize model:create --name category --attributes categoryId:integer,description:string

sequelize model:create --name books --attributes bookId:integer,title:string,isbn:string,publicationYear:string,price:double

sequelize model:create --name author --attributes authorId:integer,authorFirstName:string,authorLastName:string

-----------------------------------------

sequelize model:create --name pizza --attributes p_tip:string,p_descriere:string,p_pret:double,p_gramaj:string

sequelize model:create --name sandwich --attributes san_tip:string,san_descriere:string,san_pret:double,san_gramaj:string

sequelize model:create --name deserturi --attributes d_tip:string,d_descriere:string,d_pret:double,d_gramaj:string

sequelize model:create --name bauturi --attributes b_tip:string,b_descriere:string,b_pret:double,b_gramaj:string

sequelize model:create --name sosuri --attributes so_tip:string,so_descriere:string,so_pret:double,so_gramaj:string

sequelize model:create --name salate --attributes sal_tip:string,sal_descriere:string,sal_pret:double,sal_gramaj:string

sequelize model:create --name user --attributes id_user:string,nume:string,prenume:string,email:string

sequelize model:create --name comentariu --attributes id_comentariu:string,continut:string


``` 

https://github.com/sequelize/cli

more on the tutorial url
### Docs
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
