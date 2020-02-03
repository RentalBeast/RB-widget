# RB-widget
RB Search Info customizable embeddable widget

#Usage
Minimum React verion to be used to embed this widget is 16.8

#Embedding Widget
1. Add this tag in the place you want your widget <div id="rb-app-container"></div>
2. Add these following lines before your body tag closes
`<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script type="text/javascript" src="https://cdn.rentalbeast.com/front_end/rb_widget.js"></script>`
3. Add an event listener along with search filters. for example
  `<script>
const settings = {state: 'Texas', city: 'Dallas'};//Here you should replace your settings
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div><RBSearchWidget {...{settings, newTab: false}}/></div>,
        document.getElementById('app-container'),
    )
});
</script>`

#Setting Filters
Acceptable set of filters/ settings are 

state - string
city - string
zip_codes - number
gen_neighborhood - string
unitNumber - number
min_price - number
max_price - number
min_bedrooms - number
min_bathrooms - number
Either all of them or only some of them can be used.
