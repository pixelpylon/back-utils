import {validate} from 'common-utils'

type ServiceKey = {serviceKey: string} | {serviceId: string}

export type SsoConfig = ServiceKey & {
  domain: string
}

export type MailerConfig = {
  url: string
  bcc?: string
  replyTo?: string
  fromSender: string
  fromAddress: string
}
