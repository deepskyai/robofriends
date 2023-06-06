import React from "react";

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '1000px'}}>
    {props.children};
    </div>
  );
}
// Even though we haven't passed state into <Scroll> in App.js, it automatically gets Props as an argument
export default Scroll;