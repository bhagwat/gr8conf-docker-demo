package gr8conf

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

class Todo {
    @Id
    String id
    String description
    Boolean done
}

@RepositoryRestResource(collectionResourceRel = "todos", path = "todo")
interface TodoRepository extends MongoRepository<Todo, String> {}

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
