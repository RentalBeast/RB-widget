import React from "react";
import ReactDOM from "react-dom";
import {RBSearchWidget} from "./components/rb_search_widget";

const settings = {state: 'Texas', city: 'Dallas'}
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div><RBSearchWidget {...{settings, newTab: false}}/></div>,
        document.getElementById('app-container'),
    )
});