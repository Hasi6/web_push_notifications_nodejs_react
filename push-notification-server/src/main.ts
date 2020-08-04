import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

export const publicKey =
  "BFz3McXY0GJSC4ZoSdY6xCHfeEzpOXkzXIE_GOTzA4yMM6O7fxHZdpzOFC1yvSC-RUqNvz8DTjxot1icHCQbWok";
export const privateKey = "pUjwuJDKrEGX2CsDh06OHSW1W4gisbC6OXZ8tM2vl18";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
