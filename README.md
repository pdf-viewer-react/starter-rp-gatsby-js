# React PDF Starter Toolkit in Gatsby and JavaScript


[![Open example in codesandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/devbox/exciting-orla-6m74z8)

Welcome to the React PDF Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF with Gatsby and JavaScript. It showcases how React PDF can be integrated and rendered as part of a React.js project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/pdf-viewer-react/starter-rpv-gatsby-js.git
   cd starter-rpv-gatsby-js
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm, yarn, pnpm or bun.

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Example Project

This repository includes an example project to demonstrate React PDF in action.

1. **Start the Development Server**: Use the following command to start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:8000` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```jsx
import React from "react"
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
} from "@pdf-viewer/react";

const AppPdfViewer = (props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPDefaultLayout {...defaultLayoutProps}>
          <RPPages />
        </RPDefaultLayout>
      ) : (
        <div style={{ width: "100%", height: "550px" }}>
          <RPPages />
        </div>
      )}
    </RPProvider>
  );
};
```

2. **Lazy Load the PDF Viewer Component**: Use React's lazy function to load the AppPdfViewer component only when it's needed

```jsx
import React from "react"

export const LazyAppPdfViewer =  React.lazy(()=> import("./AppPdfViewer"))
```

3. **Use the component in the page**: Add the React PDF component to your page

```jsx
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
```

## Examples

For more examples, please refer to the `src/pages/index.jsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf.dev) site.

## Meta

- Homepage: [https://www.react-pdf.dev](https://www.react-pdf.dev)
- Docs: [https://docs.react-pdf.dev](https://docs.react-pdf.dev)

---

Thank you for using React PDF! We hope this toolkit helps you build amazing React.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!