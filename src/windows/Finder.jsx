import { WindowControls } from "#components";
import { SearchIcon } from "lucide-react";
import windowWrapper from "#hoc/windowWrapper";
import useLocationStore from "#store/location";
import { locations } from "#constants";
import useWindowStore from "#store/window";
const Finder = () => {

  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const openItem = (item) => {
    if(item.fileType === "pdf") return openWindow("resume");
    if(item.fileType === "folder") return setActiveLocation(item);
    if([ 'fig' ,'url'].includes(item.fileType) && item.href) return window.open(item.href, '_blank');

    openWindow(`${item.fileType}${item.kind}`, item);

  };
  const renderList = (items, name) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            className={item.id === activeLocation.id ? "active" : "not-active"}
            key={item.id}
            onClick={() => setActiveLocation(item)}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <SearchIcon className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList(Object.values(locations), "Favorites")}
          {renderList(locations.work.children, "Work")}
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = windowWrapper(Finder, "finder");

export default FinderWindow;
