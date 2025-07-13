'use client';
import { signIn } from 'next-auth/react';
export function Login() {
  return (
    <div>
      <button onClick={() => signIn('github', { redirectTo: '/' })}>
        signIn with Github
      </button>
      <button onClick={() => signIn('google', { redirectTo: '/' })}>
        signIn with Google
      </button>
    </div>
  );
}
