//  first example
new Promise(function (resolve) {
  console.log("first");
  resolve();
  console.log("second");
}).then(function () {
  console.log("third");
});

console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");

/*function ready (){
    
        return new Promise((resolve) {
            function checkState(){
                if( document.readyState ==! 'loading'){
                   resolve();

                }

            }
            document.readyState.addEventListener('readystatechange', function(){
                checkState();
            });
        });
}
        */
// callback function
function greet(name) {
  console.log(`My name is ${name}`);
}
function profile(callback) {
  callback("Mrs Lyse");
}

profile(greet);
function profile(callback) {
  callback("DR Lyse", "Rwanda ", "kigali city", "Data scientist at google");
}

function address(name, country, city, career) {
  console.log(
    `My name is ${name} ,I live in ${country} ,${city} and I do ${career}`,
  );
}

profile(address);

// promises
 function checkcars(car){
 return new Promise((resolve, reject) => {
 
     let cars = ["Mercedes Benz", "Honda", "Hillux", "Suzuki", "Corolla", "Tesla"];
  if (cars.includes(car) === true) {
    resolve("Welcome to the club");
  } else {
    reject("You' re broke hh!");
  }
});
}

  checkcars('Tesla').then((result) => {
    console.log(result);
    return "show me car keys";
  })
  .then((result2) => {
    console.log(result2);
    return "Show me your car bill";
  })
  .then((result3)=>{
    console.log(result3)
    return " you are my G";
    
  })
  .then((result4)=>{
    console.log(result4)
  })

  .catch((error) => {
    console.log(error);
  });
  

// difference btn a thenable and a promise
// promise
const realPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

realPromise.then((result) => {
  console.log("Real Promise says:", result);
});

console.log("realPromise instanceof Promise:", realPromise instanceof Promise);

// thenable
const thenable = {
  then(resolve, reject) {
    setTimeout(() => {
      resolve("Thenable resolved!");
    }, 1000);
  }
};

thenable.then((result) => {
  console.log("Thenable says:", result);
});

console.log("thenable instanceof Promise:", thenable instanceof Promise);


// fetch
let data= await response.json()
let people= data.map((u)=>({name:u.name,email:u.emai




}))
return people;


async function (fetchId) {
  let [user1,todo1]

}
async function fetchWithRetry(url, retries)



function getUser(callback) {
  setTimeout(() => {
    const user = {
      name: "Neila",
      course: "JavaScript"
    };

    callback(user);
  }, 2000);
}

function displayUser(user) {
  console.log(`Welcome ${user.name}`);
  console.log(`Course: ${user.course}`);
}

getUser(displayUser);

console.log("Dashboard is loading...");