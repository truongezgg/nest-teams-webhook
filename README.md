
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# @truongezgg/nest-teams-webhook

Library for sending webhook messages to Microsoft Teams chanel

# Installation

```bash
npm i @truongezgg/nest-teams-webhook
```

# Quick start

Prepare URL [Send notification on a Microsoft Teams channel from a Data Factory pipeline](https://techcommunity.microsoft.com/t5/azure-data-factory-blog/send-notification-on-a-microsoft-teams-channel-from-a-data/ba-p/2456636#:~:text=Open%20Microsoft%20Teams%20and%20go,icon%20to%20identify%20your%20messages.)

1. Module

```Typescript
import { TeamsWebhookModule } from '@truongezgg/nest-teams-webhook';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    TeamsWebhookModule.register("CHANEL_WEBHOOK_URL_HERE")
  ],
  controllers: [],
  providers: [],
})
export class ExampleModule {}

```

2. Service

```Typescript
@Injectable()
export class ExampleService {
  constructor(private readonly teamsWebhookService: TeamsWebhookService) {}

  async sendMessage() {
      // Send message
      await this.teamsWebhookService.sendMessage("Hello, this is message");
  }

  async sendMessageCard() {
      // Template OTP
      await this.teamsWebhookService.sendMessageCard({
          title: "Webhook message",
          subtitle: "Forgot password",
          facts: {
            "Environment": "development",
            "Phone": "0123456789",
            "Verification code": "123456",
            "Expires at": "2022-01-01T00:00:00Z"
          }
      });
  }

  async sendRaw() {
      // Send without custom body
      await this.teamsWebhookService.sendRaw({ text: "This is raw message" });
  }

}

```
