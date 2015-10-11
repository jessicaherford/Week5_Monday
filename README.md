# Outline for Monday, October 12th
- Review Practice.html Exercise
- Branching with GIT
- more jQuery

## GIT

## .each() and this
Similar to a `for` loop, `.each()` allows you to perform one or more statements on each of the items returned by a selector. Takes a function as its lone parameter. The `this` keyword refers to the current element
```javascript
<ul>
  <li id='1'></li>
  <li id='2'></li>
  <li id='3'></li>
</ul>


$('li').each(function(){
  var id = this.id;
  $(this).text('My ID is '+ id + "!");
})
```

## Event Methods with .on()

## Event handling

## More Effects!!

## In Class Exercise: List Animation !!
