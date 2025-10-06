import { useState } from "react";
import { users } from "../data/users";

export default function Login({ goToProfile }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SignIn() {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.id));
      goToProfile();
    } else {
      alert('Неправильный email или пароль');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={SignIn}>
        Sign In
      </button>
    </div>
  );
}

