import { SessionData } from 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: any; // Yoki userning haqiqiy turini yozing, masalan: `user: UserType;`
  }
}
