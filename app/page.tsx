"use client";
import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function () {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <Profile />
      ) : (
        <div className="flex w-full h-screen justify-center items-center">
          <Link href="/login">
            <button className="btn btn-accent">conexion</button>
          </Link>
        </div>
      )}
    </>
  );
}
