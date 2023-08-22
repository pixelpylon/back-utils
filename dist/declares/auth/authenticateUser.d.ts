export type Permissions<Role, Permission> = Record<keyof Role, Permission>

export type User<Role, Permission> = {
  id: string
  name: string
  email: string
  locations: string[]
  permissions: Permissions<Role, Permission>
}

export type SsoConfig = {
  domain: string
  serviceKey: string
}

export function authenticateUser<Role, Permission>(ssoConfig: SsoConfig, sessionCookieValue: string): Promise<User<Role, Permission>>

export const SESSION_COOKIE: string
