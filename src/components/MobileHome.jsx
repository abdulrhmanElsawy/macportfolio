import { useState } from 'react';
import { dockApps } from '#constants';
import useWindowStore from '#store/window';

export default function MobileHome() {
  const { openWindow } = useWindowStore();
  const [showViewportNotice, setShowViewportNotice] = useState(true);

  const handleOpen = (app) => {
    if (!app.canOpen) return;
    openWindow(app.id);
  };

  return (
    <section id="mobile-home" className="mobile-home">
      {showViewportNotice && (
        <div
          className="mobile-viewport-notice-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="viewport-notice-title"
        >
          <div className="mobile-viewport-notice">
            <h2 id="viewport-notice-title" className="mobile-viewport-notice-title">
              Best on desktop & tablet
            </h2>
            <p className="mobile-viewport-notice-text">
              This portfolio is designed to be viewed on desktop and tablet for the best experience.
            </p>
            <button
              type="button"
              className="mobile-viewport-notice-btn"
              onClick={() => setShowViewportNotice(false)}
              aria-label="Continue to mobile view"
            >
              Continue anyway
            </button>
          </div>
        </div>
      )}

      <div className="mobile-home-inner">
        <p className="mobile-welcome-sub">Hey, I'm Abdelrhman Elsawy</p>
        <h1 className="mobile-welcome-title">Portfolio</h1>
        <p className="mobile-welcome-desc">Tap an app to open</p>

        <div className="mobile-app-grid">
          {dockApps.filter((a) => a.canOpen).map((app) => (
            <button
              key={app.id}
              type="button"
              className="mobile-app-icon"
              onClick={() => handleOpen(app)}
              aria-label={app.name}
            >
              <img src={`/images/${app.icon}`} alt="" />
              <span>{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
