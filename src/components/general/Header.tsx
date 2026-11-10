import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar((show) => !show);
  };

  return (
    <header
      className="Header h-32 bg-neutral-100 justify-center flex flex-col z-10
  "
    >
      <img
        src={"/svgs/menu.svg"}
        alt="Menu"
        width={50}
        height={50}
        className="ml-5 my-11"
        onClick={toggleSidebar}
      />
      <div>{showSideBar && <Sidebar />}</div>
    </header>
  );
}
