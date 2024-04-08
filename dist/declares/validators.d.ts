import { Validator, ListParams, FirstParams, PaginatedListParams } from "@exp1/common-utils"
import {MailerConfig, RpcClientsConfig, SsoConfig} from './types'

export const mailerConfig: Validator<MailerConfig>
export const ssoConfig: Validator<SsoConfig>
export const rpcClientsConfig: Validator<RpcClientsConfig>
export const firstParams: Validator<FirstParams>
export const listParams: Validator<ListParams>
export const paginatedListParams: Validator<PaginatedListParams>
