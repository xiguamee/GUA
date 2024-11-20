"use client";

import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  {/*顶部栏收放*/}
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 * 16) {
        // 20rem = 20 * 16px
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {/*左部菜单栏收放*/}
  const [isSiderbarExpanded, setIsSiderbarExpanded] = useState(true);
  const toggleSiderbar = () => {
    setIsSiderbarExpanded(!isSiderbarExpanded);
  };

  {/*设置左部菜单栏文字显示延迟，为了防止边框还没完全弹出来就显示文字*/}
  const [shouldShowText, setShouldShowText] = useState(false);
  useEffect(() => {
    if (isSiderbarExpanded) {
      const timer = setTimeout(() => {
        setShouldShowText(true);
      }, 150);
      return () => {
        clearTimeout(timer);
      }
    } else {
      setShouldShowText(false);
    }
  })

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          <div className={`${isSiderbarExpanded ? "w-32" : "w-16"} transition-all duration-300 bg-green-500`}>
            <div>
              <ul>
                <li className="h-10">
                  <a className="mt-4 p-2 bg-blue-500 cursor-pointer" onClick={toggleSiderbar}>按钮</a>
                </li>
                <li className="h-10">
                  <Link href="/" className="flex">
                    <FontAwesomeIcon icon={faHome} className="h-6 w-6 px-3"/>
                    <h1 className={`${shouldShowText ? 'block' : 'hidden'} text-lg`}>主页</h1>
                  </Link>
                </li>
                <li className="h-10">
                  <Link href="/navigation" className="flex">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6 w-6 px-3"/>
                    <h1 className={`${shouldShowText ? 'block' : 'hidden'} text-lg`}>导航</h1>
                  </Link>
                </li>
                <li className="h-10">
                  <Link href="/TRUMP" className="flex">
                    <FontAwesomeIcon icon={faUser} className="h-6 w-6 px-3"/>
                    <h1 className={`${shouldShowText ? 'block' : 'hidden'} text-lg`}>TRUMP</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className={`w-full h-24 bg-white fixed transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"} shadow-md`}>
              {/* 这里是顶部栏固定高度h-24，所以下面的div有pt-24的顶部padding，是为了固定上部菜单 */}
            </div>
            <div className="flex-grow w-full pt-24 flex justify-center">
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
