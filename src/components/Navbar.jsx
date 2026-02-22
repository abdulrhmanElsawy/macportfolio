import dayjs from 'dayjs';
import { navLinks, navIcons } from '#constants';
import useWindowStore from '#store/window';
import useThemeStore from '#store/theme';

const NAV_ICON_ACTIONS = {
  1: { window: 'safari', label: 'Open Safari (Articles)' },
  2: { window: 'finder', label: 'Open Finder (Portfolio)' },
  3: { window: 'contact', label: 'Open Contact' },
  4: { theme: true, label: 'Toggle dark mode' },
};

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { toggleTheme } = useThemeStore();

  const handleIconClick = (id) => {
    const action = NAV_ICON_ACTIONS[id];
    if (!action) return;
    if (action.theme) {
      toggleTheme();
    } else if (action.window) {
      openWindow(action.window);
    }
  };

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold text-xl"> ELSawy MAC OS </p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => {
            const action = NAV_ICON_ACTIONS[id];
            const label = action?.label ?? `Icon ${id}`;
            return (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleIconClick(id)}
                  className="icon-hover p-0 border-0 bg-transparent cursor-pointer"
                  aria-label={label}
                >
                  <img src={img} alt={label} />
                </button>
              </li>
            );
          })}
        </ul>

        <time>{dayjs().format('ddd, MMM D,h:mm A')}</time>
      </div>
    </nav>
  );
};

export default Navbar;
