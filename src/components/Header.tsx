import { useState } from 'react';
import { Bell, Calendar, Settings, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import React from 'react';


export default function Header(props: {
  isDarkMode: boolean;
  onThemeChange: (isDark: boolean) => void;
}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-header border-b border-default sticky top-0 z-40">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          {/* Breadcrumb - Hidden on mobile */}
          <div className="flex items-center gap-2">
            <span className="text-primary font-medium">Dashboard</span>
            <ChevronRight className="h-4 w-4 text-header/50" />
            <span className="text-header">Clienti</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <button className="p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors relative group">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-error text-reverse text-xs rounded-full flex items-center justify-center">
                  3
                </span>
                <span className="absolute top-full right-0 mt-1 px-2 py-1 bg-primary text-reverse text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                  Notifiche
                </span>
              </button>
              <button className="p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors relative group">
                <Calendar className="h-5 w-5" />
                <span className="absolute top-full right-0 mt-1 px-2 py-1 bg-primary text-reverse text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                  Calendario
                </span>
              </button>
              <button className="p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors relative group">
                <Settings className="h-5 w-5" />
                <span className="absolute top-full right-0 mt-1 px-2 py-1 bg-primary text-reverse text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                  Impostazioni
                </span>
              </button>
              <button
                onClick={() => props.onThemeChange?.(!props.isDarkMode)}
                className="p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors relative group">
                {props.isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="absolute top-full right-0 mt-1 px-2 py-1 bg-primary text-reverse text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                  Cambia tema
                </span>
              </button>
              <div className="w-px h-6 border-r border-default mx-2" />
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <div className="text-sm font-medium text-default">Sofia Verdi</div>
                <div className="text-xs text-header">Amministratore</div>
              </div>
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-default cursor-pointer"
                />
                <div className="absolute top-full right-0 mt-1 w-48 bg-default rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-2">
                    <button className="w-full text-left px-3 py-2 text-sm text-header hover:bg-primary/5 hover:text-primary rounded-md transition-colors">
                      Profilo
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm text-header hover:bg-primary/5 hover:text-primary rounded-md transition-colors">
                      Impostazioni
                    </button>
                    <div className="border-t border-default my-1"></div>
                    <button className="w-full text-left px-3 py-2 text-sm text-error hover:bg-error/5 rounded-md transition-colors">
                      Esci
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="ml-2 p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors md:hidden"
            >
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-default py-4">
            <div className="space-y-2">
              <button className="flex items-center gap-2 w-full p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                <span>Notifiche</span>
                <span className="ml-auto bg-error text-reverse text-xs px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </button>
              <button className="flex items-center gap-2 w-full p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                <Calendar className="h-5 w-5" />
                <span>Calendario</span>
              </button>
              <button className="flex items-center gap-2 w-full p-2 text-header hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
                <span>Impostazioni</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}