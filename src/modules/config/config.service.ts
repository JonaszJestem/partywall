import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import * as fs from 'fs';
import { Logger } from '@nestjs/common';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly logger = new Logger(ConfigService.name);
  private readonly envConfig: EnvConfig;
  private jwtPrivate: string;
  private jwtPublic: string;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string().valid(['development', 'production']).default('development'),
      PORT: Joi.number().default(3000),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  port = () => Number(this.envConfig.PORT);

  getJWTPrivateKey = () => {
    this.generateKeysIfNotPresent();

    return this.jwtPrivate;
  };

  getJwtPublicKey = () => {
    this.generateKeysIfNotPresent();

    return this.jwtPublic;
  };

  private generateKeysIfNotPresent() {
    this.logger.debug("Generatingkeys")
    if (!this.jwtPrivate || !this.jwtPublic) {
      const { publicKey, privateKey } = this.generateKeys();
      this.jwtPrivate = privateKey;
      this.jwtPublic = publicKey;
    }
  }

  generateKeys = () => {
    const { generateKeyPairSync } = require('crypto');
    return generateKeyPairSync('rsa', {
      modulusLength: 512,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });
  };
}
