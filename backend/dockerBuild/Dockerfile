FROM java:8
MAINTAINER Bhagwat Kumar "bhagwat.kumar@tothenew.com"
#Add latest build jar file
ADD backend-mongo-rest-0.1.0.jar app.jar
EXPOSE 8080
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]