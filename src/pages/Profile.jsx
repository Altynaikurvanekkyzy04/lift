import { useState, useEffect } from "react";
import { users } from "../data/users";

const Profile = () => {
  const local = localStorage.getItem('user');
  const id = JSON.parse(local);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = users.find(u => u.id === id);
    console.log(currentUser);
    setUser(currentUser);
  }, [id]);

  const LogOut = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

  if (!user) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>{user.email}</p>
      <img src={user.avatar} alt="User avatar" />
      <button onClick={LogOut}>LogOut</button>
    </div>
  );
}

export default Profile;
