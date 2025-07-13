'use client';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function () {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="user avatar"
              width={32}
              height={32}
            />
          )}
          {session.user.name && <span>{session.user.name}</span>}
          <button
            onClick={() => {
              signOut();
            }}
          >
            Déconexion
          </button>
        </>
      ) : (
        <Link href="/login">
          <button>conexion</button>
        </Link>
      )}
    </>
  );
}
