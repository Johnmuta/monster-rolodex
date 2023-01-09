import React from "react";
import './search-field.styles.css'
export const SearchFiled = props => {
    return (<div >  
              <input className='search' type='search' placeholder= {props.placeholder} onChange={props.handlechange}/>
            </div>
            )
}