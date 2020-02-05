# RB-widget
RB Search Info customizable embeddable widget

# Usage
Minimum React verion to be used to embed this widget is 16.0.8

# Jenkins Build
Use `yarn build --label v1.x.x` where v1.x.x is the repo label latest version. 

# Steps to Embed RB Widget
1. Add this tag in the place you want your widget <div id="rb-app-container"></div>
2. Add these following lines before your body tag closes

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script type="text/javascript" src="https://cdn.rentalbeast.com/front_end/rb_widget.js"></script>
```

3. Add an event listener along with search filters. for example

```
<script>

const settings = {state: 'Texas', city: 'Dallas'}; //Here you should replace your settings

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div><RBSearchWidget {...{settings, newTab: false}}/></div>,
        document.getElementById('app-container'),
    )
});
</script>
```


# Setting Filters
Acceptable set of filters/ settings are 

1. state - string
2. city - string
3. zip_codes - number
4. gen_neighborhood - string
5. unitNumber - number
6. min_price - number
7. max_price - number
8. min_bedrooms - number
9. min_bathrooms - number
Either all of them or only some of them can be used.
