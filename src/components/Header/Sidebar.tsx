import Link from "shared/components/Link";
import ChatButton from "./ChatButton";

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
  <div
    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[1000] transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <button className="absolute top-4 right-4" onClick={onClose}>Close</button>
    <nav className="flex flex-col gap-4 p-6">
      <Link linkText="Products" navigateTo="/products" />
      <Link linkText="Rooms" navigateTo="/rooms" />
      <Link linkText="Services" navigateTo="/services" />
      <Link linkText="Inspirations" navigateTo="/inspirations" />
      <ChatButton navigateTo="/chat" className=""/>
    </nav>
  </div>
);

export default Sidebar;
