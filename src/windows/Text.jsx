import { WindowControls } from '#components';
import windowWrapper from '#hoc/windowWrapper';
import useWindowStore from '#store/window';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  const paragraphs = Array.isArray(description) ? description : [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name ?? 'Untitled'}</h2>
      </div>

      <div className="p-4 overflow-auto flex flex-col gap-3">
        {image && (
          <img
            src={image}
            alt={name ?? ''}
            className="w-full max-h-48 object-contain rounded bg-gray-100"
          />
        )}
        {subtitle && (
          <p className="text-sm font-semibold text-gray-600">{subtitle}</p>
        )}
        {paragraphs.length > 0 && (
          <div className="space-y-2">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, 'txtfile');

export default TextWindow;
