import { DynamicModule, Module } from '@nestjs/common';
import { TeamsWebhookService } from './teams-webhook.service';

@Module({})
export class TeamsWebhookModule {
  static register(url: string): DynamicModule {
    return {
      module: TeamsWebhookModule,
      providers: [
        {
          provide: 'MICROSOFT_TEAMS_WEBHOOK_URL_1646368532413',
          useValue: url,
        },
        TeamsWebhookService,
      ],
      exports: [TeamsWebhookService],
    };
  }
}
