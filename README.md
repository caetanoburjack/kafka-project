# kafka-project

clone the project and run:
```shell
docker-compose up -d
```
and

```shell
npm install
```

In one terminal, run:
```shell
node consumer.js
```
You will have something like this:
```shell
Sent message 1
Sent message 2
…
Sent message 100
```
In other terminal, run:
```shell
node producer.js
```
You will have something like this:
```shell
{ value: 'Message 1 sent by a Kafka Producer!' }
{ value: 'Message 2 sent by a Kafka Producer!' }
…
{ value: 'Message 100 sent by a Kafka Producer!' }
```
That means that everything is going as expected. The producer is producing the messages and the consumer is consuming the messages.

You can also track this through the Kafka UI on [localhost:8081](http://localhost:8081/).
