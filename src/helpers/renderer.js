// Used for the initial render of the react app through the server
// before being hydrated on the client 
// StaticRouter is used here instead of BrowserRouter since this wont be
// rendered on the browser 
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req,store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    { renderRoutes(Routes) }
                </div>
            </StaticRouter>
        </Provider>,
    );
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}
