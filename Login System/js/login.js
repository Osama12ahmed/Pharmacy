const login = document.getElementById("login");
login.onclick = (e) => {
  e.preventDefault();

  const usernameAddress = document.getElementById("username").value;
  const passwordAddress = document.getElementById("password").value;

  const getUser = localStorage.getItem("Username");
  const getPass = localStorage.getItem("Password");

  if (usernameAddress == "" && passwordAddress == "") {
    swal("Input field has no value");
  } else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
      swal({
        text: `Login successful, hi ${usernameAddress}`,
        timer: 2000, 
        button: false, 
        icon: 'success', 
        textColor: '#28a745'
      }).then(() => {
        setTimeout(() => {
          window.location.href = "../home\ page/home.html"; 
        }, 2000);
      });
    } else {
      swal("Something wrong");
    }
  }
}
