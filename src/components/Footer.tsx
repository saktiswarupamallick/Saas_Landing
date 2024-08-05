import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../constants/index";

const Footer = () => (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
        <Image src='/logo.jpeg' alt='logo' width={168} height={38} className='object-contain' />
          <p className="text-base text-gray-300">
            Zeiko 2024 <br />
            All Rights Reserved &copy;
          </p>
        </div>
  
        <div className="flex flex-wrap justify-between md:justify-end gap-10 w-full md:w-auto">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 min-w-[150px]">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-2">
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} className="text-gray-400">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarHub. All rights reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/" className="text-gray-400">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-400">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
  
export default Footer;