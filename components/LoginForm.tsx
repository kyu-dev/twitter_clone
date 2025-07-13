"use client";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
export function Login() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-xl w-xs border p-6">
      <h3 className="pb-4 text-3xl text-center font-bold">Login</h3>
      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <button className="btn btn-accent mt-4">Login</button>
      <p className="text-center">or</p>
      <button
        className="btn"
        onClick={() => signIn("github", { redirectTo: "/" })}
      >
        Sign in with GitHub <FaGithub />
      </button>
      <button
        className="btn"
        onClick={() => signIn("google", { redirectTo: "/" })}
      >
        sign In with Google <FaGoogle />
      </button>
    </fieldset>
  );
}
