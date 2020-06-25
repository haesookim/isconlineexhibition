import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import { createStore, combineReducers } from "redux";

import { createBrowserHistory } from "history";

import assignmentReducer from "./store/reducers/assignments";

const rootReducer = combineReducers({
    assign: assignmentReducer,
});

const store = createStore(rootReducer);

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById("root"),
);

serviceWorker.unregister();
