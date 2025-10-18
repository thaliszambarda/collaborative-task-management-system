import { NestFactory } from "@nestjs/core";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(rateLimit({ windowMs: 1000, max: 10 }));
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
