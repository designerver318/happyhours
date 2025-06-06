
import Navbar from "../MyComponents/Navbar";
import "./globals.css";
import Footer from "../MyComponents/Footer";
import  AuthProvider  from "@/context/AuthContext";


export const metadata = {
  title: "HAPPY HOURS SECONDARY SCHOOL",
  description: "An English Medium Co-Educational School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white`}
      >
        <AuthProvider>
        <Navbar />
        {children}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
