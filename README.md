# PadelPlanet


Registro/Inicio de Sesión de Usuario


| MÉTODO | ENDPOINT       | TOKEN | ROL   | DESCRIPCIÓN          | PARÁMETROS POST                                   | DEVUELVE             |
|--------|----------------|-------|-------|----------------------|---------------------------------------------------|----------------------|
| POST   | /auth/signup | -     | user  | Registro de Usuario  | username, password, name, name, birthday(XX/XX/XXXX) ,email, gender, phone, address   | { message, result: token } |
| POST   | /auth/login    | -     | user  | Inicio de Sesión     | email, password                                 | { message, result: token }     |


Usuarios


| MÉTODO | ENDPOINT          | TOKEN | ROL    | DESCRIPCIÓN            | PARÁMETROS POST                               | DEVUELVE                          |
|--------|-------------------|-------|--------|------------------------|-----------------------------------------------|-----------------------------------|
| GET    | /user          | SÍ    | admin  | Obtener Todos los Usuarios | parámetros de consulta                        | [{usuario}]                       |
| GET    | /user/profile   | SÍ    | user   | Obtener Perfil Propio  |                                               | {usuario}                         |
| GET    | /user/:userId  | SÍ    | admin   | Obtener un Usuario     |                                               | {usuario}                         |
| POST   | /user          | SÍ    | admin  | Crear un Usuario       | username, password, name, name, birthday(XX/XX/XXXX) ,email, gender, phone, address | {usuario}                 |
| PUT    | /user/ownProfile/update   | SÍ    | user   | Actualizar Perfil Propio | username, name, birthday(XX/XX/XXXX) ,email, gender, phone, address | {mensaje: 'User updated'}  |
| PUT    | /user/ownProfile/updatePassword | SÍ  | user   | Restablecer Contraseña | currentPassword, newPassword, repeatPassword   | {mensaje: 'Password updated'} |
| PUT    | /user/:userId  | SÍ    | admin  | Actualizar un Usuario  | userName, email, contraseña, país, fechaNacimiento, teléfono | {mensaje: 'User updated'} |
| DELETE | /user/:userId  | SÍ    | admin  | Eliminar un Usuario    | userId                                        | {mensaje: 'Usuario eliminado'}    |
| DELETE | /user/perfil   | SÍ    | user   | Eliminar Perfil Propio |                                               | {mensaje: 'Perfil eliminado'}     |


Roles


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /role          | SÍ    | admin   | Lista de todos los roles  |                                       | [{roles}]                      |
| GET    | /role/:id      | SÍ    | admin   | Obtener el nombre de un solo rol|                              | {rol}                        |
| POST   | /role          | SÍ    | admin  | Añade un nuevo rol         | role                               | {message: 'Role created'} |
| PUT    | /role/:id      | SÍ    | admin  | Actualiza el nombre de un rol |  role                               | {message: 'Role updated'}|
| DELETE | /role/:id      | SÍ    | admin  | Elimina un rol              |                                    | {message: 'Role deleted'}   |


Product


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /product          | SÍ    | admin   | Lista de todos los productos  |                                       | [{product}]                      |
| GET    | /product/:id      | SÍ    | admin   | Obtener un solo producto|                              | {product}                        |
| POST   | /product          | SÍ    | admin  | Añade un nuevo producto         | seller_id, name, brand, category_id, description, price, product_status_id, image_url| {message: 'Product created'} |
| PUT    | /product/:id      | SÍ    | admin  | Actualiza el producto |  seller_id, name, brand, category_id, description, price, product_status_id, image_url  | {message: 'Product updated'}|
| DELETE | /product/:id      | SÍ    | admin  | Elimina un producto              |                                    | {message: 'Product deleted'}   |


Product status


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /productstatus          | SÍ    | admin   | Lista de todos los product status  |                                       | [{productstatus}]                      |
| GET    | /productstatus/:id      | SÍ    | admin   | Obtener un product status|                              | {productstatus}                        |
| POST   | /productstatus          | SÍ    | admin  | Añade un nuevo product status         | status                               | {message: 'product status created'} |
| PUT    | /productstatus/:id      | SÍ    | admin  | Actualiza el nombre de un product status |  status                               | {message: 'product status updated'}|
| DELETE | /productstatus/:id      | SÍ    | admin  | Elimina un product status               |                                    | {message: 'product status deleted'}   |

Product category


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /productcategory          | SÍ    | admin   | Lista de todos los product category  |                                       | [{productcategory}]                      |
| GET    | /productcategory/:id      | SÍ    | admin   | Obtener un product category|                              | {productcategory}                        |
| POST   | /productcategory          | SÍ    | admin  | Añade un nuevo product category         | name, image                               | {message: 'product category created'} |
| PUT    | /productcategory/:id      | SÍ    | admin  | Actualiza el nombre de un product category |  name, image                               | {message: 'product category updated'}|
| DELETE | /productcategory/:id      | SÍ    | admin  | Elimina un product category               |                                    | {message: 'product category deleted'}   |

Likes


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /like          | SÍ    | admin   | Lista de todos los like|                                       | [{likes}]                      |
| GET    | /like/:id      | SÍ    | admin   | Obtener un like|                              | {like}                        |
| GET    | /like/getMyLikes     | SÍ    | user   | Obtener mi lista de likes |                              | [{likes}]                      |
| POST   | /like          | SÍ    | admin  | Añade un nuevo like        | product_id, user_id                               | {message: 'like created'} |
| PUT    | /like/:id      | SÍ    | admin  | Actualiza el nombre de un like |  product_id, user_id                               | {message: 'like updated'}|
| DELETE | /like/:id      | SÍ    | admin  | Elimina un like              |                                    | {message: 'like deleted'}   |


Post


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /post          | SÍ    | admin   | Lista de todos los posts  |                                       | [{post}]                      |
| GET    | /post/:id      | SÍ    | admin   | Obtener un solo post |                              | {post}                        |
| POST   | /post          | SÍ    | admin  | Añade un nuevo post         | seller_id, name, brand, category_id, description, price, product_status_id, image_url| {message: 'Product created'} |
| POST   | /createPostWithProduct          | SÍ    | user  | Añade un nuevo post con producto         | seller_id, name, brand, category_id, description, price, product_status_id, image_url| {message: 'Product created'} |
| PUT    | /post/:id      | SÍ    | admin  | Actualiza el post |  seller_id, name, brand, category_id, description, price, product_status_id, image_url  | {message: 'Product updated'}|
| DELETE | /post/:id      | SÍ    | admin  | Elimina un post              |                                    | {message: 'Product deleted'}   |



Vinos


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /vinos          | SÍ    | user   | Lista todos los vinos     |                                    | [{vino}]                      |
| GET    | /vinos/:id      | SÍ    | user   | Obtiene detalles de un vino|                                   | {vino}                        |
| POST   | /vinos          | SÍ    | Owner  | Añade un nuevo vino       | nombre, año, tipo, descripción, precio, stock | {message: ' añadido'} |
| PUT    | /vinos/:id      | SÍ    | Owner  | Actualiza un vino         | nombre, año, tipo, descripción, precio, stock | {message: 'Vino actualizado'}|
| DELETE | /vinos/:id      | SÍ    | Owner  | Elimina un vino           |                                    | {message: 'Vino eliminado'}   |


Bodegas

| MÉTODO | ENDPOINT        | TOKEN | ROL       | DESCRIPCIÓN              | PARÁMETROS POST           | DEVUELVE                       |
|--------|-----------------|-------|-----------|--------------------------|---------------------------|-------------------------------|
| GET    | /bodegas        | SÍ    | user      | Listar todas las bodegas | -                         | [{bodega}]                    |
| GET    | /bodegas/:id    | SÍ    | user      | Obtener una bodega       | -                         | {bodega}                      |
| POST   | /bodegas        | SÍ    | owner     | Crear una bodega       | nombre, direccion         | {bodega}                      |
| PUT    | /bodegas/:id    | SÍ    | owner     | Actualizar una bodega   | nombre, direccion         | {mensaje: 'Bodega actualizada'} |
| DELETE | /bodegas/:id    | SÍ    | owner     | Eliminar una bodega     | -                         | {mensaje: 'Bodega eliminada'} |



Reservas


| METHOD | ENDPOINT           | TOKEN | ROLE   | DESCRIPTION                | POST PARAMS                | RETURNS                         |
|--------|--------------------|-------|--------|----------------------------|----------------------------|---------------------------------|
| GET    | /reservas          | SÍ    | Admin  | Lista todas las reservas   |                            | [{reserva}]                     |
| POST   | /reservas          | SÍ    | user   | Permite hacer una reserva  | fechaHora, numeroPersonas  | {reserva}                       |
| GET    | /reservas/:id      | SÍ    | user   | Obtiene detalles reserva   |                            | {reserva}                       |
| PUT    | /reservas/:id      | SÍ    | user   | Actualiza una reserva      | fechaHora, numeroPersonas  | {message: 'Reserva actualizada'}|
| DELETE | /reservas/:id      | SÍ    | user   | Cancela una reserva        |                            | {message: 'Reserva cancelada'}  |


Tour

| MÉTODO | ENDPOINT       | TOKEN | ROL       | DESCRIPCIÓN               | PARÁMETROS POST                         | DEVUELVE                       |
|--------|----------------|-------|-----------|---------------------------|-----------------------------------------|-------------------------------|
| GET    | /tours         | SÍ    | user     | Listar todos los tours     | -                                       | [{tour}]                      |
| GET    | /tours/:id     | SÍ    | user     | Obtener detalles de un tour| -                                       | {tour}                        |
| POST   | /tours         | SÍ    | owner    | Crear un tour                 | franja_horaria, max_personas, id_bodega | {tour}                        |
| PUT    | /tours/:id     | SÍ    | owner    | Actualizar un tour            | franja_horaria, max_personas            | {mensaje: 'Tour actualizado'} |
| DELETE | /tours/:id     | SÍ    | owner    | Eliminar un tour              | -                                       | {mensaje: 'Tour eliminado'}   |
| GET    | /tours/:idowner | SÍ    | owner    | Listar todos mis tours      | -                                       | [{tour}]                      |



Pedidos

| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION                      | POST PARAMS                | RETURNS                         |
|--------|-----------------|-------|--------|----------------------------------|----------------------------|---------------------------------|
| POST   | /pedidos        | SÍ    | user   | Crea nuevo pedido desde carrito  |                            | {pedido}                        |
| GET    | /pedidos/:id    | SÍ    | user   | Muestra detalles de un pedido    |                            | {pedido}                        |
| PUT    | /pedidos/:id    | SÍ    | Admin  | Actualiza el estado de un pedido | estadoPedido               | {message: 'Pedido actualizado'} |
| DELETE | /pedidos/:id    | SÍ    | Admin  | Cancela un pedido                |                            | {message: 'Pedido cancelado'}   |


Comentarios y Calificaciones


| METHOD | ENDPOINT                       | TOKEN | ROLE   | DESCRIPTION                      | POST PARAMS                 | RETURNS                            |
|--------|--------------------------------|-------|--------|----------------------------------|-----------------------------|------------------------------------|
| POST   | /vinos/:id_vino/comentarios    | SÍ    | user| Permite comentar sobre un vino   | textoComentario             | {comentario}                        |
| GET    | /vinos/:id_vino/comentarios    | SÍ   | user  | Lista comentarios de un vino     |                             | [{comentario}]                      |
| POST   | /vinos/:id_vino/calificaciones | SÍ   | user| Permite calificar un vino        | puntuacion                  | {calificacion}                      |
| GET    | /vinos/:id_vino/calificaciones |SÍ   | user  | Lista calificaciones de un vino|                             | [{calificacion}]                    |
