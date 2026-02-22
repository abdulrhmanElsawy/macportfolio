import useWindowStore from '#store/window';
import useThemeStore from '#store/theme';
import { Home, FileText, FolderOpen, Mail, Sun } from 'lucide-react';

const TABS = [
  { id: 'home', label: 'Home', icon: Home, action: 'home' },
  { id: 'safari', label: 'Articles', icon: FileText, action: 'safari' },
  { id: 'finder', label: 'Portfolio', icon: FolderOpen, action: 'finder' },
  { id: 'contact', label: 'Contact', icon: Mail, action: 'contact' },
  { id: 'theme', label: 'Theme', icon: Sun, action: 'theme' },
];

export default function MobileBottomNav() {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const { toggleTheme } = useThemeStore();

  const handleTab = (tab) => {
    if (tab.action === 'home') {
      Object.keys(windows).forEach((key) => closeWindow(key));
      return;
    }
    if (tab.action === 'theme') {
      toggleTheme();
      return;
    }
    const w = windows[tab.action];
    if (w?.isOpen) closeWindow(tab.action);
    else openWindow(tab.action);
  };

  return (
    <nav id="mobile-bottom-nav" className="mobile-bottom-nav" aria-label="App navigation">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive =
          tab.action === 'theme' ? false : windows[tab.action]?.isOpen;
        return (
          <button
            key={tab.id}
            type="button"
            className="mobile-nav-item"
            onClick={() => handleTab(tab)}
            aria-label={tab.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <Icon size={24} strokeWidth={1.8} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
