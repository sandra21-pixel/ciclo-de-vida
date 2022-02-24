import React,{Component} from 'react';
import Genre  from './Genre';
import axios from 'axios'

// let genres = [
//     // {genre: 'Acción'},
//     // {genre: 'Animación'},
//     // {genre: 'Aventura'},
//     // {genre: 'Ciencia Ficción'},
//     // {genre: 'Comedia'},
//     // {genre: 'Documental'},
//     // {genre: 'Drama'},
//     // {genre: 'Fantasia'},
//     // {genre: 'Infantiles'},
//     // {genre: 'Musical'}
// ]

class GenresInDb extends Component{
    constructor(){
        super()

        this.state ={
            genres : "",
            bg: false
        }
    }

    componentDidMount(){
        axios("http://localhost:3001/api/genres")
            .then(res =>{
                this.setState({genres:res.data.data})
                
            })
            .catch(error=>console.log(error))
    }
    handleMouseOver(){
        this.setState({bg:!this.state.bg})
    }

    render(){
        return (
            <>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={()=>this.handleMouseOver()} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                     this.state.genres !== "" ? this.state.genres.map((genre,index)=>{
                                            return  <Genre  {...genre}  key={index} /> 
                                        }) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </>
        )


    }

    

}
export default GenresInDb;