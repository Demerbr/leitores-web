import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

type DesktopMenuProps = {
  items: MenuItem[];
};

const DesktopMenu = ({ items }: DesktopMenuProps) => {
  return (
    <nav className="   md:!flex   ">
      <ul className="flex space-x-4">
        {items.map((item) => (
            <Link
            key={item.label}
            href={item.href}
            className="
              font-sora 
              px-3 py-2 
              rounded 
              transition duration-300
              hover:shadow-[0_0_20px_rgba(254,210,10,0.8),0_0_30px_rgba(254,210,10,0.6)]
              hover:bg-accent hover:text-primary
            "
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;