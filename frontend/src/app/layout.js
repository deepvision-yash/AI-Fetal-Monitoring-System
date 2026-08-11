import "./globals.css";

export const metadata = {
  title: "Select Input Mode - Fetal Monitor AI",
  description: "Select your input mode to begin fetal monitoring and AI analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Outfit:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-surface-container text-on-surface font-body-md min-h-screen flex flex-col font-body-md">
        {children}
      </body>
    </html>
  );
}
