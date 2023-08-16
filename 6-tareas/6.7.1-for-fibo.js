let a = 0;
let b = 1;

//console.log(a);

for (let index = 2; index < 100; index++) {
    const temp = a + b
    a = b
    b = temp

    console.log(a, index)
    
    
}


// fibonacci con funciones

function fibonacci(n) {
    var a = 0;
    var b = 1;
  
    for (var i = 2; i <= n; i++) {
      var temp = a + b;
      a = b;
      b = temp;
    }
  
    return b;
  }
  
  var fibo = fibonacci(10);
  console.log(fibo);
