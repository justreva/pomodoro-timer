interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex items-center space-x-1 justify-center">
      <h1 className=" text-primary text-3xl font-bold">{title}</h1>
			<img src="/logo.svg" className="size-10" alt="logo" />
    </div>
  );
};

export default Header;
