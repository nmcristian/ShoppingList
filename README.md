# ShoppingList

In order to run this project locally, please follow these steps:

create a postgresql database on local machine called shopping_list, user: nita, no password (or, if you name them differently, please change credentials in the files from the project folder/config/).

npm install

npx sequelize-cli db:migrate

npx sequelize db:seed:all

npm run start


Postman APIs collection:
https://www.getpostman.com/collections/ca0e7473c940d119112f

You can sign in:
- as User: nmcristian@gmail.com / 123456
- as Admin: idag.test@yopmail.com / 12345678

Sign in & sign up APIs are accessible to everyone.
Most likely, you will have to replace the token in other API calls with the one returned by /signin.
As Admin you will have access to any API, including Read any User by id.
As User you will have access to CRUD ShoppingLists, Read Items, Read User by id (own User object only).
