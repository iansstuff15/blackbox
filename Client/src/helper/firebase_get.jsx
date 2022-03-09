import {database} from '../firebase/firebase';

export const handleGetSnapshotOfLibraryContent= async ()=>{
    const getDatabase = [];
    let libraryList = [];
    const libraryRef = database;
     libraryRef.on('value',(snapshot)=> {
            const library = snapshot.val();

            for (let id in library){
                if(id === "vYENHq0syIY1ssVjuK3v13bS3Nx2")getDatabase.push(library[id])
            }
            
        })
    libraryList = getDatabase[0].library
    return libraryList
}