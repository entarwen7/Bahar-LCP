
import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Repostería Primavera Turca",
  description: "Postres artesanales con inspiración en la primavera turca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${playfair.variable} font-sans bg-graySoft text-brownDeep`}>
        {children}
      </body>
    </html>
  );
}

