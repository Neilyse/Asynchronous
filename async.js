//  first example
new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
}).then(function() {
  console.log('third');
});

console.log('A')
setTimeout(()=>{console.log('B')},1000)
console.log('C')