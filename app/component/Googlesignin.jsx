"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { LuLoader2 } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

const Googlesignin = () => {
  const [processing, setProcessing] = useState(false);
  const handleSignin = () => {
    signIn("google", { callbackUrl: "/" });
    setProcessing(true);
  };

  return (
    <div>
      <button
        onClick={handleSignin}
        disabled={processing}
        className="flex gap-4 border rounded-md p-3 items-center  hover:bg-sky-500 hover:text-white shadow"
      >
        <FcGoogle className="text-2xl" />
        <span className="text-2xl font-bold">Continue With Google</span>
        {processing && <LuLoader2 className="text-2xl animate-spin" />}
      </button>
    </div>
  );
};

export default Googlesignin;
