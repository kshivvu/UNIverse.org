import React from "react";
import Link from "next/link";
const about = () => {
  return (
    <div className="w-full h-screen bg-[#333] flex flex-col justify-center gap-y-30 items-center text-9xl text-green-600">
      this is about
      <br />
      <button>
        <Link href="./" className="px-4 py-2 bg-purple-600 text-green-500">
        back
        </Link>
      </button>
    </div>
  );
};

export default about;
