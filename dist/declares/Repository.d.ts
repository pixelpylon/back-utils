import {CollectionReference, DocumentReference, Query} from '@firebase/firestore-types'

export declare class Repository<T> {
    constructor (db: object, collectionName: string)
    ref (id: string): DocumentReference<T>
    set(id: string, data: T): Promise<void>
    update(id: string, data: Partial<T>): Promise<void>

    one(id: string): Promise<T | null>
    list(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T[]>
    first(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T | null>

    unsafe(): {
        one(id: string): Promise<T>
        list(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T[]>
        first(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T>
    }
}
