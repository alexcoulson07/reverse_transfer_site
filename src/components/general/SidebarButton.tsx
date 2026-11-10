import { Link } from "react-router-dom";

interface SidebarButtonProps {
  icon: string;
  text: string;
  link: string;
}

export default function SidebarButton({
  icon,
  text,
  link,
}: SidebarButtonProps) {
  return (
    <Link to={link}>
      <div className="flex hover:bg-neutral-200 py-5">
        <img
          src={icon}
          alt={text}
          width={24}
          height={24}
          className="ml-5 mr-2"
        />
        <p className="text-xl">{text}</p>
      </div>
    </Link>
  );
}
