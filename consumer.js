const {Kafka} = require('kafkajs');

const runConsumer = async () => {
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9092'],
    });

    const consumer = kafka.consumer({groupId: 'my-first-group'});

    await consumer.connect();
    await consumer.subscribe({topic: 'my-first-topic', fromBeginning: true});

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            console.log({
                value: message.value.toString(),
            });
        },
    });
};

runConsumer().catch(console.error);