import { WindowControls } from '#components';
import windowWrapper from '#hoc/windowWrapper';
import useWindowStore from '#store/window';
import { locations } from '#constants';

const Archive = () => {
  const { openWindow } = useWindowStore();
  const items = locations.trash?.children ?? [];

  const openItem = (item) => {
    if (item.fileType === 'pdf') return openWindow('resume');
    if (item.fileType === 'img') {
      openWindow('imgfile', { name: item.name, imageUrl: item.imageUrl });
      return;
    }
    if (['fig', 'url'].includes(item.fileType) && item.href) {
      window.open(item.href, '_blank');
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="trash" />
        <h2>Archive</h2>
      </div>

      <div className="archive-content">
        {items.length === 0 ? (
          <p className="empty-message">No items in Archive</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => openItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openItem(item);
                  }
                }}
              >
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const ArchiveWindow = windowWrapper(Archive, 'trash');

export default ArchiveWindow;
