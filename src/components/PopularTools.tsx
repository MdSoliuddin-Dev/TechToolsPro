
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryColor: string;
  popular: boolean;
}

const tools: Tool[] = [
  {
    id: "jpg-to-png",
    name: "JPG to PNG",
    description: "Convert JPG images to PNG format",
    category: "Image",
    categoryColor: "bg-purple-100 text-purple-700",
    popular: true
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert PDF documents to Word format",
    category: "File",
    categoryColor: "bg-green-100 text-green-700",
    popular: true
  },
  {
    id: "miles-to-km",
    name: "Miles to Kilometers",
    description: "Convert miles to kilometers",
    category: "Unit",
    categoryColor: "bg-blue-100 text-blue-700",
    popular: true
  },
  {
    id: "celsius-to-fahrenheit",
    name: "Celsius to Fahrenheit",
    description: "Convert Celsius to Fahrenheit",
    category: "Unit",
    categoryColor: "bg-blue-100 text-blue-700",
    popular: true
  },
  {
    id: "binary-to-text",
    name: "Binary to Text",
    description: "Convert binary to text",
    category: "Number",
    categoryColor: "bg-red-100 text-red-700",
    popular: true
  },
  {
    id: "mp4-to-mp3",
    name: "MP4 to MP3",
    description: "Extract audio from video files",
    category: "File",
    categoryColor: "bg-green-100 text-green-700",
    popular: true
  },
  {
    id: "hex-to-rgb",
    name: "HEX to RGB",
    description: "Convert HEX color codes to RGB",
    category: "Color",
    categoryColor: "bg-pink-100 text-pink-700",
    popular: true
  },
  {
    id: "json-to-csv",
    name: "JSON to CSV",
    description: "Convert JSON to CSV format",
    category: "Text",
    categoryColor: "bg-yellow-100 text-yellow-700",
    popular: true
  }
];

const PopularTools = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Converters</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Card key={tool.id} className="border hover:shadow-md transition-all">
              <CardContent className="p-5">
                <Badge variant="secondary" className={tool.categoryColor}>
                  {tool.category}
                </Badge>
                <h3 className="font-semibold text-gray-900 mt-3">{tool.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                <a 
                  href={`#${tool.id}`} 
                  className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                >
                  Convert now <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTools;
