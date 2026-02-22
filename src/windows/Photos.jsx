import { useState } from 'react';
import { WindowControls } from '#components';
import windowWrapper from '#hoc/windowWrapper';
import useWindowStore from '#store/window';
import { photosLinks, gallery } from '#constants';
import { assetUrl } from '#utils/assetUrl';

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [activeTabId, setActiveTabId] = useState(1);

  const openImage = (item) => {
    const url = item.img ?? item.imageUrl;
    openWindow('imgfile', {
      name: item.name ?? `Image ${item.id}`,
      imageUrl: url ? assetUrl(url) : undefined,
    });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
      </div>

      <div className="flex h-full min-h-0">
        <div className="sidebar">
          <h2>My Albums</h2>
          <ul>
            {photosLinks.map((link) => (
              <li
                key={link.id}
                role="button"
                tabIndex={0}
                className={activeTabId === link.id ? 'active' : ''}
                onClick={() => setActiveTabId(link.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveTabId(link.id);
                  }
                }}
              >
                <img src={assetUrl(link.icon)} alt="" />
                <p>{link.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map((item) => (
              <li
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => openImage(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openImage(item);
                  }
                }}
              >
                <img src={assetUrl(item.img)} alt={item.name ?? `Gallery image ${item.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = windowWrapper(Photos, 'photos');

export default PhotosWindow;
