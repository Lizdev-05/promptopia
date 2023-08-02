import "@styles/global.css";
import { Children } from "react";

export const metadata = {
  title: "Prompt",
  description: " Discover & share AI prompts",
};

const RootLayout = () => {
  return (
    <html>
      <body lang="en">
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{Children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
