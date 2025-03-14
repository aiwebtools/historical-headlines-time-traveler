
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cyber-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark-blue/30 to-cyber-dark/80" />
      
      <div className="relative z-10 max-w-md w-full cyber-card text-center p-8">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        
        <AlertTriangle size={48} className="mx-auto mb-4 text-cyber-orange" />
        
        <h1 className="text-4xl font-cyber font-bold mb-2 text-white">404</h1>
        <p className="text-xl text-cyber-gray mb-6">This timeline doesn't exist in our archives</p>
        
        <p className="text-cyber-gray mb-8">
          The historical article you're looking for couldn't be found. Perhaps it's from an alternate timeline?
        </p>
        
        <Link to="/" className="cyber-button inline-flex items-center mx-auto">
          <Home size={18} className="mr-2" />
          Return to Present Day
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
