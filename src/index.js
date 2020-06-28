import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { createBrowserHistory } from "history";

import assignmentReducer from "./store/reducers/assignments";
import eventReducer from "./store/reducers/event";
import FABReducer from "./store/reducers/floatingmenu";
import messageReducer from "./store/reducers/guestBook";

const history = createBrowserHistory();
const rootReducer = combineReducers({
    assign: assignmentReducer,
    event: eventReducer,
    fab: FABReducer,
    message: messageReducer,
    router: connectRouter(history),
});

const middlewares = [thunk, routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById("root"),
);

serviceWorker.unregister();
