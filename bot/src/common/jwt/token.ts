import * as jwt from 'jsonwebtoken';

export async function handleLogin(phone: string) {
  const accessToken = jwt.sign({phone}, 'doda_token', { expiresIn: '7d' });
  return await accessToken
}
