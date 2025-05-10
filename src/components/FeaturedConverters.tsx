
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";

const FeaturedConverters = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Try Our Featured Converters</h2>
        
        <Tabs defaultValue="length" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="length">Length</TabsTrigger>
            <TabsTrigger value="temperature">Temperature</TabsTrigger>
            <TabsTrigger value="weight">Weight</TabsTrigger>
          </TabsList>
          
          <Card>
            <CardContent className="p-6">
              <TabsContent value="length">
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Length Converter</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">From:</label>
                      <div className="flex space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Enter value" 
                          className="flex-1"
                          id="length-from-value" 
                          name="length-from-value" 
                        />
                        <Select defaultValue="meters">
                          <SelectTrigger className="w-[150px]" id="length-from-unit" name="length-from-unit">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meters">Meters</SelectItem>
                            <SelectItem value="kilometers">Kilometers</SelectItem>
                            <SelectItem value="miles">Miles</SelectItem>
                            <SelectItem value="feet">Feet</SelectItem>
                            <SelectItem value="inches">Inches</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">To:</label>
                      <div className="flex space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Result" 
                          className="flex-1" 
                          readOnly 
                          id="length-to-value" 
                          name="length-to-value"
                        />
                        <Select defaultValue="feet">
                          <SelectTrigger className="w-[150px]" id="length-to-unit" name="length-to-unit">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meters">Meters</SelectItem>
                            <SelectItem value="kilometers">Kilometers</SelectItem>
                            <SelectItem value="miles">Miles</SelectItem>
                            <SelectItem value="feet">Feet</SelectItem>
                            <SelectItem value="inches">Inches</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="mx-auto flex gap-2">
                      <ArrowRightLeft className="h-4 w-4" />
                      Convert
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="temperature">
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Temperature Converter</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">From:</label>
                      <div className="flex space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Enter value" 
                          className="flex-1"
                          id="temp-from-value" 
                          name="temp-from-value" 
                        />
                        <Select defaultValue="celsius">
                          <SelectTrigger className="w-[150px]" id="temp-from-unit" name="temp-from-unit">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="celsius">Celsius</SelectItem>
                            <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                            <SelectItem value="kelvin">Kelvin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">To:</label>
                      <div className="flex space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Result" 
                          className="flex-1" 
                          readOnly
                          id="temp-to-value" 
                          name="temp-to-value" 
                        />
                        <Select defaultValue="fahrenheit">
                          <SelectTrigger className="w-[150px]" id="temp-to-unit" name="temp-to-unit">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="celsius">Celsius</SelectItem>
                            <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                            <SelectItem value="kelvin">Kelvin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="mx-auto flex gap-2">
                      <ArrowRightLeft className="h-4 w-4" />
                      Convert
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="weight">
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Weight Converter</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">From:</label>
                      <div className="flex space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Enter value" 
                          className="flex-1"
                          id="weight-from-value" 
                          name="weight-from-value" 
                        />
                        <Select defaultValue="kilograms">
                          <SelectTrigger className="w-[150px]" id="weight-from-unit" name="weight-from-unit">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kilograms">Kilograms</SelectItem>
                            <SelectItem value="pounds">Pounds</SelectItem>
                            <SelectItem value="ounces">Ounces</SelectItem>
                            <SelectItem value="grams">Grams</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">To:</label>
                      <div className="flex space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Result" 
                          className="flex-1" 
                          readOnly
                          id="weight-to-value" 
                          name="weight-to-value" 
                        />
                        <Select defaultValue="pounds">
                          <SelectTrigger className="w-[150px]" id="weight-to-unit" name="weight-to-unit">
                            <SelectValue placeholder="Unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kilograms">Kilograms</SelectItem>
                            <SelectItem value="pounds">Pounds</SelectItem>
                            <SelectItem value="ounces">Ounces</SelectItem>
                            <SelectItem value="grams">Grams</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="mx-auto flex gap-2">
                      <ArrowRightLeft className="h-4 w-4" />
                      Convert
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedConverters;
