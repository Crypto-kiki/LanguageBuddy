// src/pages/sign-in.tsx
import axios from "axios";
import { FC, FormEvent, useState } from "react";

const SignIn: FC = () => {
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitSignIn = async (e: FormEvent) => {
    try {
      e.preventDefault();

      if (
        !account ||
        !password ||
        account.trim().length === 0 ||
        password.trim().length === 0
      )
        return;

      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/auth`,
        {
          account,
          password,
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center pb-20">
      <h1 className="text-2xl font-bold">Hinggu's Board Sign In</h1>
      <form className="mt-8 flex items-end gap-4" onSubmit={onSubmitSignIn}>
        <div className="flex flex-col gap-2 relative">
          <input
            className="input-style"
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <input
            className="input-style"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="absolute -bottom-5 left-2 text-xs text-blue-500 active:text-blue-700">
            Create an account
          </button>
        </div>
        <input className="button-style" type="submit" value="Sign In" />
      </form>
    </main>
  );
};

export default SignIn;
