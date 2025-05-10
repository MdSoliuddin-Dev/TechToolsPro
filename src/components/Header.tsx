
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-2xl font-bold text-blue-500">
              <span>Converter</span>
              <span className="text-blue-700">Tools</span>
            </div>
          </div>
          
          <div className="hidden md:flex md:flex-1 mx-4 lg:mx-8 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                type="search" 
                placeholder="Search for converters..." 
                className="w-full pl-9 pr-4 py-2 border-gray-200 focus:border-blue-500"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-5">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Categories</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Popular</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">New</a>
            <Button variant="outline" size="sm" className="hidden lg:inline-flex">
              Feedback
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
