import { ReactNode } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

type MenuItem = {
  label: string;
  href: string;
};

type MenuProps = {
  items: MenuItem[];
};

type MenuComponent = {
  (props: MenuProps): ReactNode;
  Desktop: typeof DesktopMenu;
  Mobile: typeof MobileMenu;
};

const Menu: MenuComponent = ({ items }) => {
  return (
    <div className="flex flex-col md:flex-row"> 
      <div className="md:!block  hidden">
        <DesktopMenu items={items} />
      </div>
      <div className="md:hidden">
        <MobileMenu items={items} />
      </div>
    </div>
  );
};

Menu.Desktop = DesktopMenu;
Menu.Mobile = MobileMenu;

export default Menu;