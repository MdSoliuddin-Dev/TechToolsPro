
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          100+ Free Online Converter Tools
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Convert anything to anything with our extensive collection of free online conversion tools. No downloads required.
        </p>
        
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <Input 
              type="search" 
              placeholder="Search for a converter tool..." 
              className="w-full pl-10 pr-4 py-6 text-lg rounded-lg border-gray-200 focus:border-blue-500 shadow-sm"
              id="hero-search" 
              name="hero-search" 
              autoComplete="off"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Button className="bg-[#e7513b] hover:bg-[#d4402b]">Get Started</Button>
          <Button variant="outline">View All Tools</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
