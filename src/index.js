import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { createBrowserHistory } from "history";

import assignmentReducer from "./store/reducers/assignments";
import eventReducer from "./store/reducers/event";
import FABReducer from "./store/reducers/floatingmenu";

const rootReducer = combineReducers({
    assign: assignmentReducer,
    event: eventReducer,
    fab: FABReducer,
});

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById("root"),
);

serviceWorker.unregister();
