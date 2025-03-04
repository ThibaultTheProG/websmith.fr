"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Plus } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const showMenu = () => {
    setOpenMenu(true);
  };

  const hideMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center p-4">
        <Link href={"/"}>
          <Image
            src={"./images/SVG/logo_darkmode.svg"}
            width={150}
            height={400}
            alt="Logo Websmith"
          />
        </Link>
        {openMenu == false && (
          <Menu color="#FFFF" className="cursor-pointer" onClick={showMenu} />
        )}
        {openMenu && (
          <Plus color="#FFFF" className="cursor-pointer rotate-45" onClick={hideMenu} />
        )}
      </div>
      {openMenu && (
        <div className="flex flex-col pl-4 pb-4 space-y-2">
        <Link href={"/"} className={`hover:underline decoration-yellow-dark decoration-2 ${pathname === '/' ? 'underline' : ''}`} >Accueil</Link>
        <Link href={"/devweb"} className={`hover:underline decoration-yellow-dark decoration-2 ${pathname === '/devweb' ? 'underline' : ''}`}>Développement web</Link>
        <Link href={"/devmobile"} className={`hover:underline decoration-yellow-dark decoration-2 ${pathname === '/devmobile' ? 'underline' : ''}`}>Développement mobile</Link>
        <Link href={"/marketing"} className={`hover:underline decoration-yellow-dark decoration-2 ${pathname === '/marketing' ? 'underline' : ''}`}>Marketing Ops</Link>
        </div>
      )}
    </>
  );
}
