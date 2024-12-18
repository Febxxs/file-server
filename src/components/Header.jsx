import { Bell, ChevronFirst, ChevronLast, User } from "lucide-react";

const Header = ({ toggleSidebar, isOpen }) => {
  return (
    <header className="bg-white p-4 flex items-center justify-between">
      <div
        onClick={() => toggleSidebar(!isOpen)}
        className="p-1 hover:bg-primary rounded hover:text-white transition-colors"
      >
        {isOpen ? <ChevronFirst /> : <ChevronLast />}
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          aria-label="Notifications"
        >
          <Bell size={24} />
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-200"
          aria-label="User profile"
        >
          <User size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
