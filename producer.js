const { Kafka } = require('kafkajs');

const runProducer = async () => {
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9092'],
    });

    const producer = kafka.producer();

    await producer.connect();

    for (let i = 1; i <= 100; i++) {
        const message = {
            value: `Message ${i} sent by a Kafka Producer!`,
        };
        await producer.send({
            topic: 'my-first-topic',
            messages: [message],
        });
        console.log(`Sent message ${i}`);
    }

    await producer.disconnect();
};

runProducer().catch(console.error);