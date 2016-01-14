#gr8conf.docker.demo

curl http://$localhost:8080/todo

curl -XPOST \
-H "Content-Type:application/json" \
 http://$localhost:8080/todo -d '{ 
  "description" : "Finish demo before lunch",
  "done": false
}'

curl -XGET http://$localhost:3000/todoAction