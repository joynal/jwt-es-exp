import { generateTokenWithPayload, readTokenPayload } from './jwtProvider.js';

const payload = {
  sub: 'jhon.doe@exmaple.com',
  first_name: 'Jhon',
  last_name: 'Doe',
  order_id: '34345',
  harver_session_id: 'igCSnyydQJtsRg48cHi/Jg==',
};

const accessToken = await generateTokenWithPayload(payload);

// const decodedData = await readTokenPayload(accessToken);

console.log({ accessToken });
