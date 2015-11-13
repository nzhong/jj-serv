README
======

This README describes the jj-server app, a simple embedded Java REST web server, based on Jetty & Jersey.

<br />

What is jj-server?
---------------------------------------------------------
jj-server is a starting point for a micro-service java web server. It is

* based on Jetty & Jersey
* should support static content, servlet, and REST APIs.
* should be really easy to host an AngularJS app, a ReactJS app, or a RestAPI server.

<br />

How to run?
---------------------------------------------------------
* ```mvn clean package```
* ```java -jar target/app.jar```