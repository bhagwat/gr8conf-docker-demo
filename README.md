# gr8conf-docker-demo
Sample applications used for "Dockerize it all" session during GR8Conf-IN 2016 

## hello-docker
Source code contains a **Springboot CLI** application `hello.groovy` . To run it locally you need to install springboot CLI tool. You can easily install it using SDKMAN or follow the instrucitons on spring boot website.

**Run locally without docker**

`spring run *.groovy`

**Build locally which you will do after code changes and before docker build to use latest jar**

`spring jar hello.jar *.groovy`

### Run 

docker run -v $PWD:/app -p 8080:8080 java:8 java -jar /app/hello.jar

### Build Image

docker build -t bhagwatkumar/hellodocker .

### Push Image to docker hub

docker push bhagwatkumar/hellodocker

## backend
### Build
This is written using **Springboot** and **Mongodb** dependecy with Spring data rest. You will find all 3 Groovy classes in Application.groovy.

Make sure you execute `gradle build` first to use the latest jar file if you have changed demo code.

docker build -t bhagwatkumar/backend dockerBuild

### Run

docker-compose up 

## frontend
This is a Nodejs+Angularjs application which depends on Backend app for TODO rest endpoints.

### Build

docker build -t bhagwatkumar/frontend .

### Run

It depends on `localhost` environment variable to find the IP of running backend application. In case of Mac OSX and Windows use `docker-machine ip default` to find the IP of host machine.

docker-compose up

## Production

There is no need of localhost environment in production mode as respective services is mentioned as link. Try experimenting with changing environment variable for mongodb host to some externally running mongodb server and remove the linking and image defination for mongodb from dcoker-compose.yml. This is what you usually do in production environment.

docker-compose up -d 
