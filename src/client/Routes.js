import React from 'react';
// import { Route } from 'react-router-dom';
import App from './App';


// Classic style using jsx 
// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={App}></Route>
//         </div>
//     );
// };

// Advanced style without jsx instead uses react-router-config library 
// in order to use react-router server side rendering
export default [
    {   
        ...App,
        path: '/',
        exact: true
    }
]