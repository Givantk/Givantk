function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

//always return promise
async function asyncCall() {
  console.log('calling');
  //await is used with a function that return a promise;
  var result = await resolveAfter2Seconds();
  console.log('hi')
  return new promise(resolve=>resolve(result))

  // expected output: 'resolved'
}
//I can't use it directly like that because of promise pending 
//console.log(asyncCall())

//after promise resolved then do it
//asyncCall().then(result=>console.log(result));
console.log((async ()=>result=await asyncCall())());
