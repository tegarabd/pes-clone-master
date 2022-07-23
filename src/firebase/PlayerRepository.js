import db from "./Firestore"
import { collection, addDoc, getDocs } from 'firebase/firestore'

const docRef = collection(db, 'players')

export async function addPlayer(player) {
    const result = await addDoc(docRef, {
        ...player
    })

    console.log(result.id);
}

export async function getPlayers() {
    const result = await getDocs(docRef)

    result.forEach(player => {
        console.log(`player id: ${player.id} => ${player.data()}`)
    })
}