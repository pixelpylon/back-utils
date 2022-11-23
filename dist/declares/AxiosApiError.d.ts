import {AxiosError} from "axios"
import {ServiceError} from 'common-utils'

export declare class AxiosApiError extends ServiceError {
    constructor (error: AxiosError)
}
