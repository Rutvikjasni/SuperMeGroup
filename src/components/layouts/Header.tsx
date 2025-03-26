import SupremeLogo from "../../../public/Logo.svg"



export default function Header() {
  return (
    <header className="bg-gray-100 py-4 px-6 flex justify-between items-center">
    {/* Logo */}
    <div className="text-blue-700 font-bold text-lg">
    <img
                  src={SupremeLogo}
                  className="h-10 md:h-12 xlg:h-12"
                  alt="Supreme logo"
                  title="logo"
                />
    </div>
    
    {/* Nav Items */}
    <div className="flex items-center space-x-6">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Contact Us</button>
      <span className="cursor-pointer">in</span>
      <span className="cursor-pointer">ENG</span>
    </div>
  </header>
  );
}
