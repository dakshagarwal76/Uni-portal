// src/components/NavLink.tsx
import { NavLink as RouterNavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function NavLink({
  to,
  icon,
  text,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <RouterNavLink
      to={to}
      onClick={() => toast(`${text} loaded`, { icon: '🚀', duration: 1200 })}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-primary text-white shadow-md'
            : 'text-gray-600 hover:bg-primary hover:text-white'
        }`
      }
    >
      {icon}
      <span>{text}</span>
    </RouterNavLink>
  );
}

export default NavLink;
