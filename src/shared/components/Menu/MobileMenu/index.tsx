import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

type MenuItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  items: MenuItem[];
};

const MobileMenu = ({ items }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="p-2 text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-primary p-2 rounded-md shadow-lg">
            {items.map((item, index) => (
              <DropdownMenu.Item key={index} className="focus:outline-none">
                <Link href={item.href} className="block px-4 py-2 text-white hover:bg-accent hover:text-primary rounded transition duration-300">
                  {item.label}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default MobileMenu;