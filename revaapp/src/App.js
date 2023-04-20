import  React, { Fragment } from 'react';
function MyApp(){
  return(
    <Fragment>
    <h1>Hello</h1>
    <h2>World</h2>
    <h3>{2+3}</h3>
        <h2> From  Second Component</h2>
        <p>This is A Paragraph</p>
        
    </Fragment>
    
  );
  }
  export default MyApp;