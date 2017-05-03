webpack-umd-module
=====

1.  install the npm dependencies: 
```
npm install
``` 
2.  run the webpack server:
```
npm start
```
3. access the `index.html` file [index.html](http://localhost:8080/)

4. create in the console new `TestService` object and check its methods and properties:
```
var obj = new TestService();
console.log(obj.testProp); // 27
obj.showTest('NEW value'); // This is a public test method. The parameter value is:  NEW value
```