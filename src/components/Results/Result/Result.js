import React from 'react';
import './Result.css';

const result = (props) => {
  let text = props.text;
  if(props.nrofresults) text = text + " ("+props.nrofresults+")";
  if(props.subtext && props.subtext.length) {
    text = text.replace(props.subtext, "<b>"+props.subtext+"</b>");
  }
  return (
    <div
    className="Result"
    dangerouslySetInnerHTML={{__html: text}} />
  )
}

export default result;
