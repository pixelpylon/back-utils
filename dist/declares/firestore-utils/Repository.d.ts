import {CollectionReference, DocumentReference, Query} from '@firebase/firestore-types'
import {Transaction} from './Transaction'

export declare class Repository<T> {
    constructor (db: object, collectionName: string)
    ref (id?: string): DocumentReference<T>
    set(id: string, data: T): Promise<DocumentReference<T>>
    create(id: string, data: T): Promise<DocumentReference<T>>
    update(id: string, data: Partial<T>): Promise<DocumentReference<T>>
    add(data: Partial<T>): Promise<DocumentReference<T>>

    one(id: string): Promise<T | null>
    list(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T[]>
    first(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T | null>

    tx(tx: object): Transaction<T>
}
