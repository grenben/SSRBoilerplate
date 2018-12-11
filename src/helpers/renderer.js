import React from 'react'
import { renderToString } from 'react-DOM/server'
import Routes from '../client/Routes'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )

    return ` 
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}