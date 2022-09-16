import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [message, setMessage] = useState("");

  const validate = () => {
    const e1 = !email ? "Email is required. " : "";
    const e2 = !/^[^@]*@[^@]*$/.test(email) ? "Email is invalid. " : "";
    const e3 = !password ? "Password is required. " : "";
    const e4 =
      password.length < 8
        ? "Password must contain at least 8 characters. "
        : "";
    const e5 =
      password !== passwordConfirm
        ? "Password and Confirm Password must be same. "
        : "";
    const e6 = !passwordConfirm ? "Confirm Password is required. " : "";

    const errors = e1 + e2 + e3 + e4 + e5 + e6;
    setMessage(errors);
    return errors ? false : true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setMessage("User Created! ");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password</label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <div>{message}</div>
      <input type="submit" value="Submit" />
    </form>
  );
}
