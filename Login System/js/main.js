let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let psw = document.getElementById("psw");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});
const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};
const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};
const mailFormat = (e) => {
  const re = /\w+@\w+.\w+/;
  return re.test(String(e).toLowerCase());
};
const passFormat = (p) => {
    const re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu;
    return re.test(p);
}
const userFormat = (u) => {
    const re = /[^0-9]/;
    return re.test(u);
}
btn.addEventListener("click", () => {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    itemsList = [];
  } else {
    itemsList = localItems;
  }
  itemsList.push(username.value);
  itemsList.push(email.value);
  itemsList.push(password.value);
  itemsList.push(psw.value);
  localStorage.setItem("localItem", JSON.stringify(itemsList));
});


// هنا فانكشن الفالديشن باختصار هتتشيك علي اللوكال استودرج بتاعتنا وتشوف الكلام صح ولا نو
function validation() {
  let user = username.value.trim();
  let mail = email.value.trim();
  let pass1 = password.value.trim();
  let pass2 = psw.value.trim();

  localStorage.setItem("Username", user);
  localStorage.setItem("Email", mail);
  localStorage.setItem("Password", pass1);
  localStorage.setItem("Cpassword", pass2);

  let isValid = true;

  if (user === "") {
    setError(username, "Username is required");
    isValid = false;
  } else if (!userFormat(user)) {
    setError(username, "Digital are not allowed");
    isValid = false;
  } else {
    setSuccess(username);
  }
  if (mail === "") {
    setError(email, "Email is required");
    isValid = false;
  } else if (!mailFormat(mail)) {
    setError(email, "Please enter a valid email");
    isValid = false;
  } else {
    setSuccess(email);
  }
  if (pass1 === "") {
    setError(password, "Password is required");
    isValid = false;
  } else if (!passFormat(pass1)) {
    setError(password, "Password must be a minimum of 8 characters including number, Upper, Lower And one special character");
    isValid = false;
  } else {
    setSuccess(password);
  }
  if (pass2 === "") {
    setError(psw, "Please confirm your password");
    isValid = false;
  } else if (pass2 != pass1) {
    setError(psw, "Passwords does't match");
    isValid = false;
  } else {
    setSuccess(psw);
  }
 //هنا المسدج بتاعت لو الداتا صح هتظهر المسدج بتاعت ساكسيفوووووول
  if (isValid) {
    swal("Validation successful!", "All fields are correct.", "success").then(() => {
      window.location.href = "login.html"; 
    });
  }
}
