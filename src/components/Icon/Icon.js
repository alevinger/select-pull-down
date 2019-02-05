import React from 'react';
import { MdSearch, MdClear } from "react-icons/md";
import './Icon.css';

const icon = (props) => {
    let icon = null;
    switch ( props.type ) {
           case ( 'clear' ):
               icon = <MdClear />;
               break;
           case ( 'search' ):
               icon = <MdSearch />;
               break;
           default:
               icon = null;
       }
  return  <div className="Icon" onClick={props.clicked}>{icon}</div>
}

export default icon;
