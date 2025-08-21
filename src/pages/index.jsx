import React from "react";
import { LazyAppPdfViewer } from "../components/LazyAppPdfViewer";
import { RPConfig } from "@pdf-viewer/react";

const IndexPage = () => {
  const isSSR = typeof window === "undefined";
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <RPConfig>
            <div className="container">
              <h1>RP Starter Toolkit: Gatsby + JavaScript</h1>
              <br />
              <h2>Default Toolbar</h2>
              <LazyAppPdfViewer />
              <h2>Without Toolbar</h2>
              <LazyAppPdfViewer
                showToolbar={false}
                defaultLayoutProps={{
                  style: { width: "100%", height: "550px" },
                }}
              />
              <h2>Mobile</h2>
              <LazyAppPdfViewer
                defaultLayoutProps={{
                  style: { width: "500px" },
                }}
              />
            </div>
          </RPConfig>
        </React.Suspense>
      )}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
