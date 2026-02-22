import { WindowControls } from '#components';
import windowWrapper from '#hoc/windowWrapper';
import useWindowStore from '#store/window';

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{name ?? 'Untitled'}</p>
      </div>

      <div className="preview">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name ?? ''}
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = windowWrapper(Image, 'imgfile');

export default ImageWindow;
