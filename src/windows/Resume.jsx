import windowWrapper from '#hoc/windowWrapper';
import { WindowControls } from '#components';
import { DownloadIcon } from 'lucide-react';

import {pdfjs} from 'react-pdf';
import { Document, Page } from 'react-pdf';

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const resume = () => {

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>resume.pdf</h2>

        <a href="files/resume.pdf" download className="cursor-pointer" >
            <DownloadIcon className="icon" />
        </a>
      </div>

      <Document file="files/resume.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer/>
      </Document>





    </>
  )
}

const resumeWindow = windowWrapper(resume, "resume");

export default resumeWindow;