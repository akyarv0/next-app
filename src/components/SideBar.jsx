import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="w-40 h-screen bg-cyan-300 float-left text-black pt-10 underline">
      <nav className="flex flex-col">
        <Link href="/dashboard/projects">Projects</Link>
        <Link href="/dashboard/team">Team</Link>
        <Link href="/dashboard/users">Users</Link>
      </nav>
    </div>
  );
};

export default SideBar;
