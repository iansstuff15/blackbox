import { getDatabase, ref, set } from "firebase/database";

export const handleFirebaseSet=(path,data)=>{
    const db = getDatabase();
    set(ref(db, path), {
     data
    });
}