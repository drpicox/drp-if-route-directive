If Route Directive
===================

An AngularJS directive that acts like ngIf but shows/removes the element based in the current route path.


Examples
--------

```html
<div drp-if-route="/?">
    This is present only when route is the root.
</div>

<div drp-if-route="/products">
    This is present only when route is /products.
</div>

<div drp-if-route="/products/[^/]+">
    This is present only when route is pointing to a product, /products/:id.
</div>
```





How to install
--------------

Add the bower component `drp-if-route-directive`:

```bash
    $ bower install --save drp-if-route-directive
```

Add the dependency to your `index.html`:

```html
    <script src="bower_components/drp-if-route-directive/drp-if-route-directive.js"></script>
```

Make sure that you have included the dependency with `drp-if-directive-support`:

```html
    <script src="bower_components/drp-if-directive-support/drp-if-directive-support.js"></script>
```

Add the dependency to you `YourApp.js`:

```javascript
    angular.module('YourApp', [

        // ...your other dependencies...

        'com.david-rodenas.DrpIfRouteDirective',

    ]);
```




How to use
----------

Invoke it in your html templates using the directive as attribute and as value a string with a regular expression that should satisfy the current url:

```html
<element drp-if-route="yourStringRegex"> content present when the route matches</element>
```




