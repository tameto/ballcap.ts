import * as FirebaseFirestore from '@google-cloud/firestore'

export let firestore: FirebaseFirestore.Firestore
export const initialize = (appFirestore: any) => {
    firestore = appFirestore
}