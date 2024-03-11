i
import "./globals.css";

export const metadata = {
  title: "EntrepNet",
  description: "A platform for enterpreneurs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
