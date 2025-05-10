
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  categoryColor: string;
  new?: boolean;
  popular?: boolean;
}

const tools: Tool[] = [
  // Unit Converters
  {
    id: "length",
    name: "Length Converter",
    description: "Convert between meters, feet, inches, and more",
    category: "Unit",
    categoryColor: "bg-blue-100 text-blue-700",
    popular: true
  },
  {
    id: "weight",
    name: "Weight Converter",
    description: "Convert between kg, pounds, ounces, and more",
    category: "Unit",
    categoryColor: "bg-blue-100 text-blue-700",
    popular: true
  },
  {
    id: "temperature",
    name: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit, and Kelvin",
    category: "Unit",
    categoryColor: "bg-blue-100 text-blue-700",
    popular: true
  },
  {
    id: "volume",
    name: "Volume Converter",
    description: "Convert between liters, gallons, and more",
    category: "Unit",
    categoryColor: "bg-blue-100 text-blue-700"
  },
  
  // File Converters
  {
    id: "pdf-word",
    name: "PDF to Word",
    description: "Convert PDF files to editable Word documents",
    category: "File",
    categoryColor: "bg-green-100 text-green-700",
    popular: true
  },
  {
    id: "word-pdf",
    name: "Word to PDF",
    description: "Convert Word documents to PDF format",
    category: "File",
    categoryColor: "bg-green-100 text-green-700"
  },
  {
    id: "excel-csv",
    name: "Excel to CSV",
    description: "Convert Excel spreadsheets to CSV format",
    category: "File",
    categoryColor: "bg-green-100 text-green-700"
  },
  {
    id: "mp4-mp3",
    name: "MP4 to MP3",
    description: "Extract audio from video files",
    category: "File",
    categoryColor: "bg-green-100 text-green-700",
    new: true
  },
  
  // Image Converters
  {
    id: "jpg-png",
    name: "JPG to PNG",
    description: "Convert JPG images to PNG format",
    category: "Image",
    categoryColor: "bg-purple-100 text-purple-700",
    popular: true
  },
  {
    id: "png-jpg",
    name: "PNG to JPG",
    description: "Convert PNG images to JPG format",
    category: "Image",
    categoryColor: "bg-purple-100 text-purple-700"
  },
  {
    id: "webp-jpg",
    name: "WebP to JPG",
    description: "Convert WebP images to JPG format",
    category: "Image",
    categoryColor: "bg-purple-100 text-purple-700",
    new: true
  },
  {
    id: "image-resize",
    name: "Image Resizer",
    description: "Resize images to specific dimensions",
    category: "Image",
    categoryColor: "bg-purple-100 text-purple-700"
  },
  
  // Text Converters
  {
    id: "json-csv",
    name: "JSON to CSV",
    description: "Convert JSON data to CSV format",
    category: "Text",
    categoryColor: "bg-yellow-100 text-yellow-700"
  },
  {
    id: "xml-json",
    name: "XML to JSON",
    description: "Convert XML data to JSON format",
    category: "Text",
    categoryColor: "bg-yellow-100 text-yellow-700",
    new: true
  },
  {
    id: "md-html",
    name: "Markdown to HTML",
    description: "Convert Markdown to HTML",
    category: "Text",
    categoryColor: "bg-yellow-100 text-yellow-700"
  },
  {
    id: "text-case",
    name: "Text Case Converter",
    description: "Convert text between different case formats",
    category: "Text",
    categoryColor: "bg-yellow-100 text-yellow-700"
  }
];

const ToolsGrid = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">All Conversion Tools</h2>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input 
              type="search" 
              placeholder="Search tools..." 
              className="w-full pl-9 pr-4"
            />
          </div>
          
          <Tabs defaultValue="all" className="flex-1">
            <TabsList className="w-full grid grid-cols-3 md:grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unit">Unit</TabsTrigger>
              <TabsTrigger value="file">File</TabsTrigger>
              <TabsTrigger value="image">Image</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Card key={tool.id} className="border hover:shadow-md transition-all">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className={tool.categoryColor}>
                    {tool.category}
                  </Badge>
                  {tool.new && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      New
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                <a 
                  href={`#${tool.id}`} 
                  className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium inline-block"
                >
                  Use this tool
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
