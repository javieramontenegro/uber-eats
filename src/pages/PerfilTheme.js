import React  from 'react';
import '../style/win.css'
import {Link} from 'react-router-dom'




class PerfilTheme extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         
          
        }
        
        }
      
       render(){
   return(
       <React.Fragment>
           <Link to="/win" className="btn-to-win">a win</Link>
       </React.Fragment>
   )
   }


}
export default PerfilTheme;