# simple-nodejs-jwt-bcrypt-register-login

* Un ejemplo de login y registro en nodeJS utilizando bcrypt y jsonwebtoken

* Instalación: npm i
* Ejecución: npm run dev

Endpoints 
| Method| Path                    | Descripción                                      | Params                                 |
|-------|-------------------------|--------------------------------------------------|----------------------------------------|
| POST  | /api/auth/login         | Login de usuario                                 | email, password                        |
| POST  | /api/auth/signin        | Registra un usuario                              | name, lastName, email, password, phone |

