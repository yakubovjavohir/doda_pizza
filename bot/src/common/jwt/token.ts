import * as jwt from 'jsonwebtoken';

export async function handleLogin(phone: string) {
  const accessToken = jwt.sign({phone}, process.env.TOKEN_KEY, { expiresIn: '100y' });
  return await accessToken
}
