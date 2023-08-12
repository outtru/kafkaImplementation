import { Module } from '@nestjs/common';
import { KafkaService } from './kafka/kafka.service';
import { ProducerService } from './producer/producer.service';
import { ConsumerService } from './consumer/consumer.service';

@Module({
  providers: [KafkaService, ProducerService, ConsumerService]
})
export class KafkaModule {}
