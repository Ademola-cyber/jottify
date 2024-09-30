"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

const Githubsignin = () => {
  const [processing, setProcessing] = useState(false);
  const handleSignin = () => {
    signIn("github", { callbackUrl: "/" });
    setProcessing(true);
  };
  return (
    <div>
      <button
        onClick={handleSignin}
        disabled={processing}
        className="flex gap-4 border rounded-md py-3 px-3.5 items-center  hover:bg-slate-500 hover:text-white shadow"
      >
        <FaGithub className="text-2xl" />
        <span className="text-2xl font-bold">Continue With Github</span>
        {processing && <LuLoader2 className="text-2xl animate-spin" />}
      </button>
    </div>
  );
};

export default Githubsignin;
