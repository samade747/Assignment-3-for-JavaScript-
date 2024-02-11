document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
  });
  
  var div = document.getElementById("myDiv");
  
  div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "#ff9999"; 
  });
        
  div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "#ccc";
  });


  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    var usernameInput = document.getElementById("username").value;
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
  
    if (usernameInput.length >= 5 && alphanumericRegex.test(usernameInput)) {
      alert("Success! Username is valid.");
    } else {
      alert("Error! Username must be at least 5 characters long and contain only letters and numbers.");
    }
  });


  var toggleButton = document.getElementById("toggleButton");
var myDiv = document.getElementById("myDiv");

toggleButton.addEventListener("click", function() {
  if (myDiv.style.display === "none") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
});


function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Async operation successful");
        } else {
          reject("Async operation failed");
        }
      }, 1000); 
    });
  }

  simulateAsyncOperation(true)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


simulateAsyncOperation(false)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



  function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = "Fetched data";
        resolve(data);
      }, 1000); 
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 1000); 
    });
  }
  
  fetchData()
    .then((data) => {
      console.log("Data fetched:", data);
      return processData(data); 
    })
    .then((processedData) => {
      console.log("Processed data:", processedData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  