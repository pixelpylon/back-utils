import {User} from '@exp1/common-utils'
import {SsoConfig} from '../types'

export function authenticateUser(ssoConfig: SsoConfig, sessionCookieValue: string): Promise<User>

export declare const SESSION_COOKIE: string
