import {SsoConfig} from '../types'
import {User} from '@exp1/common-utils'

export function authenticateUser(ssoConfig: SsoConfig, sessionCookieValue: string): Promise<User>

export const SESSION_COOKIE: string
