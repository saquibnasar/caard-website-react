import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useState } from "react";
import pdfImage from "../assets/images/pdf.png";
import downloadImage from "../assets/images/download.png";
export default function Documents({ data, loader }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  if (numPages === null) {
  } else {
    console.log(numPages);
    loader;
  }
  return (
    <>
      <div className="document mt-4">
        <div className="card mt-0 round-bottom-0">
          <div className="card_icon bg-bannner">
            <img className="img-fluid pdf" src={pdfImage} alt="" />
          </div>
          <p>{data.Title}</p>
          <a className="download-btn" href={data.URL} download={data.URL}>
            <img className="img-fluid" src={downloadImage} alt="" />
          </a>
        </div>
        <div className="pdf">
          <button
            id="prev-page"
            onClick={() => {
              setPageNumber((value) => {
                if (value === 1) {
                  return 1;
                }
                return value - 1;
              });
            }}
          >
            ❮
          </button>
          <button
            id="next-page"
            onClick={() => {
              setPageNumber((value) => {
                if (value === numPages) {
                  return numPages;
                }
                return value + 1;
              });
            }}
          >
            ❯
          </button>
          <Document file={data.URL} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              onLoadSuccess={removeTextLayerOffset}
            />
          </Document>
        </div>
      </div>
    </>
  );
}
