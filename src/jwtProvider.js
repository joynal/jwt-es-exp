import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { readFile } from 'fs';
import * as crypto from 'crypto';

const asyncJwtSign = promisify(jwt.sign);
const asyncJwtVerify = promisify(jwt.verify);
const asyncReadFile = promisify(readFile);

const CERT_SECRET = await asyncReadFile('./certs/ec_private.pem');
const CERT_PUBLIC = await asyncReadFile('./certs/ec_public.pem');
const KEY_ID = '85ee7a1a-49f9-46b5-977f-7dbb8b14e3e3';

const nonceBytes = 16; // 128 bits of entropy

const options = {
  expiresIn: '1h',
  algorithm: 'ES256',
  audience: 'harver.com',
  jwtid: crypto.randomBytes(nonceBytes).toString('base64'),
  keyid: KEY_ID,
};

export const generateTokenWithPayload = (payload) => asyncJwtSign(payload, CERT_SECRET, options);

export const readTokenPayload = (token) => asyncJwtVerify(token, CERT_PUBLIC, options);
