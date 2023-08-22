export type Permissions<T> = Record<string, T>

export type User<T> = {
  id: string
  name: string
  email: string
  locations: string[]
  permissions: Permissions<T>
}

export type SsoConfig = {
  domain: string
  serviceKey: string
}

export function authenticateUser<T>(ssoConfig: SsoConfig, sessionCookieValue: string): Promise<User<T>>
