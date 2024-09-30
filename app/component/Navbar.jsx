"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session?.user?.name, status);

  const navLink = [
    {
      label: "Home",
      href: "/",
      id: 1,
    },

    {
      label: "Locations",
      href: "/locations",
      id: 2,
    },

    {
      label: "About",
      href: "/",
      id: 3,
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="p-2 flex justify-between items-center shadow">
      <div className="z-50">
        <Link href={"#"}>
          <Image
            src={"/logo-white.png"}
            width={900}
            height={900}
            alt="logo"
            className="w-14 h-14 rounded-full"
          />
          <span>Jottify</span>
        </Link>
      </div>

      <ul
        className={`ml-auto flex gap-10 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:h-dvh max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:w-full transition-all max-lg:bg-slate-200/90 ${
          !navOpen ? "max-lg:translate-x-full" : ""
        }`}
      >
        {navLink.map((link, index) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="uppercase font-semibold text-md hover:bg-gray-200 p-2 rounded-md"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {
      status === "loading" ? ("...") :
      status === "unauthenticated" ? (<Link href={"/signin"} className="uppercase font-semibold text-md hover:bg-gray-200 p-2 rounded-md">Sign in
      </Link>) : (
        <div className="ml-8 flex gap-10 uppercase font-semibold text-md justify-center items-center">
          <Link href={"/addnote"} className="hover:bg-gray-200 p-2 rounded-md">
            Add Note
          </Link>
          <Link href={"/notelist"} className="hover:bg-gray-200 p-2 rounded-md">
            Note List
          </Link>
          <button className="hover:bg-gray-200 p-2 rounded-md">Sign Out</button>

          <Avatar>
            <AvatarImage src={session?.user?.image} />
            <AvatarFallback>
              {session.user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      )}

      <button
        onClick={() => {
          return setNavOpen(!navOpen);
        }}
        className="lg:hidden z-50"
      >
        {navOpen ? (
          <IoCloseOutline className="text-2xl" />
        ) : (
          <MdMenu className="text-2xl" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
