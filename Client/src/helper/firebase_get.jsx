import {database} from '../firebase/firebase';

export const handleGetSnapshotOfLibraryContent= ()=>{
    const libraryRef = database.child('users');
    return libraryRef.once('value').then(snapshot=> {
            const getDatabase = [];
            const library = snapshot.val();
            for (let id in library){         
                if(id === "vYENHq0syIY1ssVjuK3v13bS3Nx2")getDatabase.push(library[id].library)
            }
           return getDatabase
        })


}