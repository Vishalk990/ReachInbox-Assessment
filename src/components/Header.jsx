import HeaderLogo from "../assets/HeaderLogo";

export const Header = () => {
  return (
    <div className="navbar h-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <HeaderLogo className="h-8 w-auto" />
    </div>
  );
};