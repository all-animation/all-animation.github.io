## Get Started

### Step 1

Include the necessary files in the head , so that the framework work properly

```html
    <link rel="stylesheet" type="text/css" href="yourpath/all-animation.css" />
```

### Step 2

To add the animation you can enter there by JavaScrip dynamically or statically placed there by html

```html
    <div class="dance">
        I am dancing
    </div>
```

### Or jQuery - Optional

The inclusion of jQuery is optional, you can also add a dynamic class with querySelectors

```html
    <div id="dancer">I am dancing</div>

    <button id="startToDance">Click here to dance</button>
```        

Using jQuery:


```javascript
      $("#startToDance").click(function(e){
            e.preventDefault();
            $("#dancer").addClass('dance');
      });
```

or vanilla js:

```javascript
document.querySelector('#startToDance').addEventListener('click',function(e){
            e.preventDefault();
            document.querySelector('#dancer').classList.add('dance');
        })
```

### Full Documentation

You can read the full documentation on github

[More on GitHub](https://github.com/all-animation/all-animation)
