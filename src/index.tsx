import React from "react";
import ReactDOM from "react-dom";
import {RBSearchWidget} from "./components/rb_search_widget";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div><RBSearchWidget {...{state: 'Texas', city: 'Dallas', zipCode: 11100, newTab: false}}/></div>,
        document.getElementById('app-container'),
    )
});