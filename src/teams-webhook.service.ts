import { Inject, Injectable, LiteralObject } from '@nestjs/common';
import fetch from 'node-fetch';

interface ISendOTP {
  facts: LiteralObject;
  title?: string;
  subtitle?: string;
}
@Injectable()
export class TeamsWebhookService {
  constructor(
    @Inject('MICROSOFT_TEAMS_WEBHOOK_URL_1646368532413') private url: string,
  ) {}

  /**
   * @example
   * sendRaw({ text: "Hello" });
   */
  async sendRaw(body: LiteralObject) {
    if (!this.url) throw new Error('Missing webhook url');
    return await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * @example
   * sendMessage("Your OTP code is 123456")
   */
  async sendMessage(message: string) {
    if (!this.url) throw new Error('Missing webhook url');

    return await this.sendRaw({ text: message });
  }

  /**
   * @example
   * sendMessageCard({
   *   title: "Forgot password",
   *   subtitle: "Expires in 15minutes",
   *   facts: {
   *     Environment: "development",
   *     Phone: "0123456789",
   *     OTP: "123456",
   *     "Due Date": "03/04/2022 05:27:10"
   *   }
   * })
   */
  async sendMessageCard({ title, subtitle, facts }: ISendOTP) {
    if (!this.url) throw new Error('Missing webhook url');

    return await this.sendRaw({
      '@type': 'MessageCard',
      '@context': 'http://schema.org/extensions',
      themeColor: '0076D7',
      summary: 'Teams webhook',
      sections: [
        {
          activityTitle: title,
          activitySubtitle: subtitle,
          facts: Object.keys(facts).map((name) => ({
            name,
            value: facts[name],
          })),
          markdown: true,
        },
      ],
      potentialAction: [],
    });
  }
}
