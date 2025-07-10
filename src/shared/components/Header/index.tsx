import Image from 'next/image';
import Menu from '../Menu';

const Header = () => {
  const menuItems = [
    { label: 'Catálogo', href: '/' },
    { label: 'Meus Empréstimos', href: '/meusEmprestimos' },
    { label: 'Regras', href: '/regras' },
  ];

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4  flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="PIB Juscelino Logo" width={48} height={48} className="mr-3" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold font-sora">PIB Leitores</h1>
            <p className="text-xs md:text-sm opacity-80 hidden md:block">Biblioteca Comunitária da Primeira Igreja Batista em Juscelino</p>
          </div>
        </div>
        
        <Menu items={menuItems} />
      </div>
    </header>
  );
};

export default Header;