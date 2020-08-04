import {
  Controller,
  Get,
  Post,
  Body,
  InternalServerErrorException,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { privateKey, publicKey } from "./main";
import { setVapidDetails, sendNotification } from "web-push";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/subscription")
  sendPushNotifications(@Body() body: any): string {
    try {
      setVapidDetails("mailto:test@test.com", publicKey, privateKey);

      // Get Push Subscription Object
      const subscription = body;

      // Create Payload
      const payload = JSON.stringify({ title: "Push Test" });

      // Send Notification
      setTimeout(() => {
        sendNotification(subscription, payload).catch((err) =>
          console.log(err)
        );
      }, 10000);

      return this.appService.getHello();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
