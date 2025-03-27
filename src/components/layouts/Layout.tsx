import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Define the props interface for the Layout component
interface LayoutProps {
  children: ReactNode; // ReactNode allows any valid React child elements
}

// Layout component to wrap pages with a common Header and Footer
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow">{children}</main>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
