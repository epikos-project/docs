The event bus is an integral part of the simulation. It allows the events
that occur within the simulation to be communicated to downstream applications
such as the user interface, telemetry or other systems.

The event bus basic unit is a message. A message is a simple object that
contains a type and a payload. 

We support different providers for the event bus, such as:

- Redis
- Kafka
- RabbitMQ
- NATS


And different adapters for storing the messages, such as:
- In-memory
- Database