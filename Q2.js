//JSON


"name": "John",
"age": 30,
"city": "New York",
"pets": ["dog", "cat"] 

  

//'for' loop

const jsonData = {
    "name" : "John",
    "age" : 30,
    "city" : "New York",
    "pets" : ["dog", "cat"]
  };
  
  for (let key in jsonData) {
    console.log(key + ": " + jsonData[key]);
  }
  

  //for . . .in loop

  const jsonData = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "pets": ["dog", "cat"]
  };
  
  for (let key in jsonData) {
    console.log(key + ": " + jsonData[key]);
  }

  
  //for . . . of loop

  const jsonData = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "pets": ["dog", "cat"]
  };
  
  for (let [key, value] of Object.entries(jsonData)) {
    console.log(key + ": " + value);
  }

  //for each

  const jsonData = {
  "name": "John",
  "age": 30,
  "city": "New York",
  "pets": ["dog", "cat"]
};

Object.entries(jsonData).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
