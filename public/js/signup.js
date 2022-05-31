const signUpFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector("#first-name-signup").value.trim();
    const last_name = document.querySelector("#last-name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const country_name = document.querySelector("#country-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (first_name && last_name && country_name && email && password) {
      // create a post request with the details entered
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ first_name, last_name, country_name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        // redirect to homepage
        document.location.replace("/dashboard");
      } else {
        //  alert user if request has failed
        alert("Failed to sign in");
      }
    }
  };
  
  // event listener for the submit button
  document
    .querySelector(".signup-form")
    .addEventListener("submit", signUpFormHandler);