import React from "react";
import ReactDOM from "react-dom";
import {RBSearchWidget} from "./components/rb_search_widget";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div><RBSearchWidget {...{...{settings: {state: 'Texas'}}, newTab: false}}/></div>,
        document.getElementById('app-container'),
    )
});