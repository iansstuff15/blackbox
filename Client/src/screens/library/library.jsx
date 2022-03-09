import React from 'react'
import { handleGetSnapshotOfLibraryContent } from '../../helper/firebase_get'
import './library.css'

class Library extends React.Component{

    state = {
        Library: [],
        libraryState: false
     
      }


    componentDidMount(){
        const game_library = handleGetSnapshotOfLibraryContent();
        console.log(game_library)
        this.setState({Library: game_library})
        this.state.Library!==null?this.setState({libraryState:true}):this.setState({libraryState:false});
        // console.log('library state' + this.state.Library)
    }

    render(){
        return(
            <div>

                {/* {this.state.Library!==null? 
                    this.state.Library.map((entry)=>{
                        console.log(entry)
                        return(<p>appearing</p>)
                    }) : <p>Loading</p>} */}
            </div>
        )
    }
}

export default Library