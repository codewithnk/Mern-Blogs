import React from "react";
import Logo from "@/assets/Logo.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import SearchBox from "./SearchBox";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center h-16 fixed w-full z-20n px-5 border-b">
      <div>
        <img src={Logo} width={120} />
      </div>
      <div className="w-[500px]">
        <SearchBox/>
      </div>
      <div>
        <Button asChild>
          <Link to="" className="rounded-full">
            <FaSignInAlt />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
