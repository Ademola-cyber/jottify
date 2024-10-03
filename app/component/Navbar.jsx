/*"use client";
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

export default Navbar;*/

"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navLinks = [
    {
      label: "home",
      href: "/",
      id: 1,
    },
    {
      label: "locations",
      href: "/locations",
      id: 2,
    },
    {
      label: "about",
      href: "/about",
      id: 3,
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const { data: session, status } = useSession();
  console.log(session?.user?.name, status);

  return (
    <div>
      <nav className="flex justify-between items-center p-4 shadow-md z-50">
        <div className="z-50">
          <Link href={"/"}>
            <Image
              width={900}
              height={900}
              src={"/logo-white.png"}
              alt="logo"
              className="w-14 h-14 rounded-full"
            />
          </Link>
        </div>
        <ul
          className={`flex gap-10 ml-auto max-lg:flex-col max-lg:w-full max-lg:h-dvh max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:bg-gray-900/90 transition-all ${
            !navOpen ? "max-lg:translate-x-full" : ""
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="uppercase font-semibold text-md
                            hover:bg-gray-100 p-3 rounded-md"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {status === "loading" ? (
          "..."
        ) : status === "unauthenticated" ? (
          <Link
            href={"/signin"}
            className="uppercase font-semibold text-md
                            hover:bg-gray-100 p-3 rounded-md lg:ml-5"
          >
            Sign In
          </Link>
        ) : (
          <div className="flex items-center gap-10 lg:ml-5">
            <Link
              href={"/add-note"}
              className="uppercase font-semibold text-md
                                hover:bg-gray-100 p-3 rounded-md"
            >
              add note
            </Link>
            <Avatar className="">
              <DropdownMenu>
                <DropdownMenuTrigger className="border-none outline-none">
                  <AvatarImage src={session?.user?.image} />
                  <AvatarFallback>
                    {session?.user?.name.slice(0, 2).toUpperCase}
                  </AvatarFallback>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/notes-list"}>View Notes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Avatar>
          </div>
        )}

        <button
          className="lg:hidden z-50"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          {navOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <CiMenuBurger className="text-3xl" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
