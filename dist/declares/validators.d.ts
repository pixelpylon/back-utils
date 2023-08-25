import { Validator } from "common-utils"
import {MailerConfig, RpcClientsConfig, SsoConfig} from './types'

export const mailerConfig: Validator<MailerConfig>
export const ssoConfig: Validator<SsoConfig>
export const rpcClientsConfig: Validator<RpcClientsConfig>
