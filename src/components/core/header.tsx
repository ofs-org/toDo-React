import logo from '@/assets/logo-toDo.svg';
const Header = () => {
  return (
    <header className="flex bg-base-700 items-center justify-center h-50">
      <img width={126} height={48} src={logo} alt="" />
    </header>
  );
};

export default Header;
