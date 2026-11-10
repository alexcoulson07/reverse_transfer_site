import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <nav
      id="sidebar"
      className="Sidebar h-100 w-62 absolute bg-neutral-100  flex flex-col border-r-2 border-b-2 rounded-br-md "
    >
      <SidebarButton
        icon={"/svgs/home_orange.svg"}
        text={"Home"}
        link={"/home"}
      />
      <SidebarButton
        icon={"/svgs/school_orange.svg"}
        text={"Find Classes"}
        link={"/courses"}
      />
      <SidebarButton
        icon={"/svgs/data_table_orange.svg"}
        text={"Create Sections"}
        link={"/sections"}
      />
      <SidebarButton
        icon={"/svgs/help_orange.svg"}
        text={"How to use"}
        link={"/about"}
      />
      <SidebarButton
        icon={"/svgs/warning_orange.svg"}
        text={"Disclaimer"}
        link={"/disclaimer"}
      />
    </nav>
  );
}
