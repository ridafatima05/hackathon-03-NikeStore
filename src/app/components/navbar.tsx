import React from "react";
import Image from "next/image";
import { Separator } from "../components/ui/separator";

import Link from "next/link";
import Header from "./header";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
    <div
      style={{ backgroundColor: "rgba(245, 245, 245, 100%)" }}
      className="px-5 "
    >
      <div className="w-full h-[36px] flex justify-between pt-1">
        <div>
          <Image src="/images/logo.png" alt="Icon" width={25} height={25} />
        </div>

        <div className="h-[36px] flex justify-center p-2 space-x-3">
          <Link href="/allproduct" className="text-[10px] md:text-[13px] mx-2">
            Find a Store
          </Link>
          <Separator
            orientation="vertical"
            className="bg-black hidden md:block"
          />

          <Link href="/help" className="text-[10px] md:text-[13px] mx-3">
            Help
          </Link>
          <Separator
            orientation="vertical"
            className="bg-black hidden md:block"
          />

          <Link href="/joinus" className="text-[10px] md:text-[13px] mx-3">
            Join Us
          </Link>
          <Separator
            orientation="vertical"
            className="bg-black hidden md:block"
          />

          <Link href="/login" className="text-[10px] md:text-[13px] mx-3">
            Sign In
          </Link>
        </div>
      </div>
    </div>
    <Header/>
    </div>
  );
};

export default Navbar;
