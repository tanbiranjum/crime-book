const login = async (email, password) => {
  const data = {
    email,
    password,
  };
  const res = await axios.post(
    "http://127.0.0.1:3000/api/v1/user/login",
    data,
    { withCredentials: true }
  );
  console.log(res);
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  login(email, password);
});
