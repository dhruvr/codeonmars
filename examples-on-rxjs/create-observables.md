## Create Observables

You can create an Observable from scratch by using the **Create **operator. You pass this operator a function that accepts the observer as its parameter.

```js
const source = Rx.Observable.create((observer) => {
    observer.next(42);
    observer.next(52);
});

const subscription = source.subscribe(value => console.log(value));
```



