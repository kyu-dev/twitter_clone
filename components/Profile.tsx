import { useSession } from "next-auth/react";
import Image from "next/image";

export default function () {
  const { data: session } = useSession();
  return (
    <div>
      <div className="avatar avatar-offline">
        <Image
          alt="user avatar"
          src={session?.user?.image ?? "/default-avatar.png"}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}
