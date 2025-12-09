import React, { forwardRef } from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";

const ResumePreview = forwardRef(({ data, template, accentColor, classes = "" }, ref) => {

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };

  return (
    <>
      <div
        ref={ref}
        id="resume-preview"
        className={
          "w-full bg-gray-100 border border-gray-200 print:shadow-none print:border-none resume-print-container " +
          classes
        }
      >
        {renderTemplate()}
      </div>

      <style>
        {`
          @page {
            size: A4;
            margin: 0;
          }
          @media print {
            html, body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              padding: 0;
              margin: 0;
              width: 100%;
            }
            body * {
              visibility: hidden !important;
            }
            #resume-preview, #resume-preview * {
              visibility: visible !important;
            }
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100% !important;
              height: auto !important;
              margin: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              border: none !important;
            }
          }
        `}
      </style>
    </>
  );
});

export default ResumePreview;
