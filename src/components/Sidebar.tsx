import { Home, Users, Calendar, Clock, Settings, HelpCircle } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { icon: <Home className="h-5 w-5" />, label: 'Home', path: '/' },
    { icon: <Users className="h-5 w-5" />, label: 'Clienti', path: '/clients' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Calendario', path: '/calendar' },
    { icon: <Clock className="h-5 w-5" />, label: 'Turni', path: '/shifts' },
    { icon: <Settings className="h-5 w-5" />, label: 'Impostazioni', path: '/settings' },
  ];

  return (
    <aside className="w-16 h-screen bg-sidebar border-r border-default fixed z-10 left-0 top-0 flex flex-col items-center py-4">
      <div className="w-10 h-10 bg-primary text-reverse rounded-lg flex items-center justify-center mb-8">
        <span className="font-bold">BM</span>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  w-10 h-10 flex items-center justify-center
                  rounded-lg transition-all duration-200
                  relative
                  ${isActive
                    ? 'text-primary bg-primary/5 shadow-sm before:absolute before:w-1 before:h-full before:-left-4 before:bg-primary before:rounded-r'
                    : 'text-sidebar hover:text-primary hover:bg-primary/5'
                  }
                  group
                `}
                title={item.label}>
                {item.icon}
                <span className="absolute left-full ml-2 px-2 py-2 bg-primary text-reverse text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="w-10 h-10 flex items-center justify-center text-sidebar hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 group relative"
        title="Aiuto">
        <HelpCircle className="h-5 w-5" />
        <span className="absolute left-full ml-2 px-2 py-2 bg-primary text-reverse text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Aiuto
        </span>
      </button>
    </aside>
  );
}