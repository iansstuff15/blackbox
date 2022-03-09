import {database} from '../firebase/firebase';

export const handleGetSnapshotOfLibraryContent= (path, choice)=>{
    //path is the reference of the realtime database
    //choice is the method on what to get whether it is data or library
    const libraryRef = database.child(`${path}`);
    return libraryRef.once('value').then(snapshot=> {
            const library = snapshot.val();
            const getDatabase = [];
            if (choice === "library"){
                for (let id in library){         
                    if(id === "vYENHq0syIY1ssVjuK3v13bS3Nx2")getDatabase.push(library[id].library)
                }
            }else if (choice === "data"){
                for (let id in library){         
                    if(id === "vYENHq0syIY1ssVjuK3v13bS3Nx2")getDatabase.push(library[id].data)
                } 
            }
               return getDatabase
    

        })


}