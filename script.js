document.addEventListener("DOMContentLoaded", function () {

  ```
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function(event) {
  
      event.preventDefault();
  
      alert("Thank you for joining the New Generation Party (NGP)!");
  
      form.reset();
  
  });
  ```
  
  });
  