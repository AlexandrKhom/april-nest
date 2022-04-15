import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    // useNewUrlParser: true,
    // ...getMongoOptions(),
  };
};

// configService.get('MONGO_LOGIN') +
// ':' +
// configService.get('MONGO_PASSWORD') +
// '@' +
const getMongoString = (configService: ConfigService) =>
  'mongodb://' +
  configService.get('MONGO_HOST') +
  ':' +
  configService.get('MONGO_PORT') +
  '/' +
  configService.get('MONGO_DB');

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
