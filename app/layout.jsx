import "@/styles/globals.css";

export const metadata = {
  title: "Prompt",
  description: " Discover & share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body lang="en">
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
