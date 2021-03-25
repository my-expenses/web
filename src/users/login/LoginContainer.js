import {useState} from "react";
import Login from "./Login";
import api from "../../gateways/api";

const LoginContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    let formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    api({
      method: "POST",
      url: "/login",
      data: formData
    }).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <Login
        username={username}
        password={password}
        onUsernameChange={(value) => setUsername(value)}
        onPasswordChange={(value) => setPassword(value)}
        onSubmit={submitForm}
      />
    </div>
  );
};

export default LoginContainer;