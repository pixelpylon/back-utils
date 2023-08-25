import {SsoConfig} from '../types'

export function authenticateUser<User>(ssoConfig: SsoConfig, sessionCookieValue: string): Promise<User>

export const SESSION_COOKIE: string
