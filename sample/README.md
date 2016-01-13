spring jar hello.jar *.groovy

docker run java:8 java -java hello.jar

docker run -v $PWD:/app java:8 java -java /app/hello.jar

docker run -v $PWD:/app -p 8080:8080 java:8 java -java /app/hello.jar

docker build -t bhagwat/demogr8conf .
