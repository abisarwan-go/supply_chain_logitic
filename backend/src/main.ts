import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { execSync } from 'child_process';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('BizimRehber API')
    .setDescription('The BizimRehber API description')
    .setVersion('1.0')
    .addTag('bizimrehber')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  });

  SwaggerModule.setup('api-docs', app, document);

  // Start the server
  await app.listen(process.env.PORT ?? 3000);

  console.log(`Server is running on port ${await app.getUrl()}`);

  // Generate OpenAPI JSON file
  const outputPath = join(process.cwd(), 'openapi.json');
  fs.writeFileSync(outputPath, JSON.stringify(document, null, 2));

  const clientFrontEnd = join(process.cwd(), '../front-end/src/api/openapi');

  try {
    execSync(`npx @openapitools/openapi-generator-cli generate \
      -i ${outputPath} \
      -g typescript-axios \
      -o ${clientFrontEnd} \
      --skip-validate-spec \
      --additional-properties=supportsES6=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models,stringEnums=true,enumPropertyNaming=original \
      --type-mappings=DateTime=string \
      --import-mappings=DateTime=string \
      --global-property=modelDocs=false,apiDocs=false`);
    console.log(
      `TypeScript client generated successfully in ${clientFrontEnd}`,
    );
    console.log(
      `Swagger documentation available at ${await app.getUrl()}/api-docs`,
    );
  } catch (error) {
    console.error('Error generating TypeScript client:', error);
  }
}
bootstrap();
