
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  description: string;
  iconClass: string;
  color: string;
  count: number;
}

const categories: Category[] = [
  {
    id: "unit",
    name: "Unit Converters",
    description: "Convert between different units of measurement",
    iconClass: "i-ruler",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    count: 28
  },
  {
    id: "file",
    name: "File Converters",
    description: "Convert between different file formats",
    iconClass: "i-file",
    color: "bg-green-100 text-green-700 border-green-200",
    count: 42
  },
  {
    id: "image",
    name: "Image Converters",
    description: "Convert between different image formats",
    iconClass: "i-image",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    count: 15
  },
  {
    id: "text",
    name: "Text Converters",
    description: "Convert between different text formats",
    iconClass: "i-text",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    count: 21
  },
  {
    id: "number",
    name: "Number Converters",
    description: "Convert between different number systems",
    iconClass: "i-calculator",
    color: "bg-red-100 text-red-700 border-red-200",
    count: 12
  },
  {
    id: "time",
    name: "Time Converters",
    description: "Convert between different time formats",
    iconClass: "i-clock",
    color: "bg-indigo-100 text-indigo-700 border-indigo-200",
    count: 8
  },
  {
    id: "color",
    name: "Color Converters",
    description: "Convert between different color formats",
    iconClass: "i-palette",
    color: "bg-pink-100 text-pink-700 border-pink-200",
    count: 6
  },
  {
    id: "currency",
    name: "Currency Converters",
    description: "Convert between different currencies",
    iconClass: "i-currency",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    count: 1
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Browse By Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={cn("border overflow-hidden transition-all hover:shadow-md", 
                `hover:border-${category.color.split(" ")[2].split("-")[0]}-300`)}
            >
              <CardContent className="p-0">
                <a href={`#${category.id}`} className="block p-5">
                  <div className="flex items-start mb-2">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", category.color)}>
                      <div className={category.iconClass}></div>
                    </div>
                    <div className="ml-3 flex-1">
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{category.count} tools</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
