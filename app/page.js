"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <h2>Welcome to the Home Page</h2>

      <div className="w-[30px] h-[30px] relative border border-red-800">
        <Image
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlMfwOaVSZg3RfjPzv0MizIV5H4p6-hj2GRw2lPyR6sY4BwPl-ovHCBcekg-sfbEPYwAnPKqwn"
          fill
          alt="Random Image"
        />
        <h3>
          Hi there
        </h3>
      </div>
    </>
  );
}
