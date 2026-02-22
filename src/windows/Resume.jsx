import { useState } from 'react';
import windowWrapper from '#hoc/windowWrapper';
import { WindowControls } from '#components';
import { DownloadIcon } from 'lucide-react';
import { assetUrl } from '#utils/assetUrl';

import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resume = () => {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>resume.pdf</h2>

        <a href={assetUrl('files/resume.pdf')} download className="cursor-pointer">
          <DownloadIcon className="icon" />
        </a>
      </div>

      <div className="resume-document">
        <Document file={assetUrl('files/resume.pdf')} onLoadSuccess={onLoadSuccess} loading={<p className="text-sm text-gray-500 p-4">Loading PDF…</p>}>
          {numPages != null &&
            Array.from({ length: numPages }, (_, i) => (
              <Page
                key={i + 1}
                pageNumber={i + 1}
                renderTextLayer
                renderAnnotationLayer
              />
            ))}
        </Document>
      </div>


    </>
  )
}

const resumeWindow = windowWrapper(resume, "resume");

export default resumeWindow;