A simple users management (insert, update, delete, find by id) project in spring boot, phpmyadmin MySQL database.

### Requirment
* Spring Boot 2.7.0
* Java Version 17

### Dependencies
* spring-boot-starter-data-jpa
* spring-boot-starter-thymeleaf
* spring-boot-starter-web
* spring-boot-devtools
* mysql-connector-java
* spring-boot-starter-test

### application.properties
```java
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost/springboot
spring.datasource.username=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL5Dialect
```
### database columns
`database.sql` also uploaded in root folder, you can use it or create new database with those fields.

| name  | type   |
| ------------ | ------------ |
| id  |  int(11) (primary) |
|  name  |  varchar(50) |
| age  |  varchar(3) |
|  email  |varchar(50)   |

