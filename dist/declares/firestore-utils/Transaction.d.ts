import {
  DocumentReference,
  CollectionReference,
  Query
} from '@firebase/firestore-types'

export declare class Transaction<T> {
  constructor (tx: object, db: object, collectionName: string)
  ref (id?: string): DocumentReference<T>

  set(id: string, data: T): Promise<DocumentReference<T>>
  create(id: string, data: T): Promise<DocumentReference<T>>
  update(id: string, data: Partial<T>): Promise<DocumentReference<T>>
  add(data: T): Promise<DocumentReference<T>>

  one(id: string): Promise<T | null>
  list(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T[]>
  first(getQuery: (collectionRef: CollectionReference<T>) => Query<T>): Promise<T | null>
}
