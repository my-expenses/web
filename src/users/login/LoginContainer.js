import {useState} from "react";
import Login from "./Login";
import api from "../../gateways/api";
import qs from "qs";

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    api.post("/users/login", qs.stringify({
      email: email,
      password: password
    }))
      .then(res => {
        let token = res.data.token
        localStorage.setItem("token", token)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Login
        email={email}
        password={password}
        onEmailChange={(value) => setEmail(value)}
        onPasswordChange={(value) => setPassword(value)}
        onSubmit={() => submitForm()}
      />
    </div>
  );
};

export default LoginContainer;