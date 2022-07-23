import app from "./Firebase"
import { getFirestore } from 'firebase/firestore'

const db = getFirestore(app)

export default db