import React, { useState, useMemo, useEffect } from 'react';
import { 
  FileUp, FilePlus2, FileText, Settings2, ChevronRight, Star, Users,
  FileOutput, FileMinus2, FileSearch, FileWarning, FileX2, FileCheck2,
  Lock, Unlock, ImagePlus, Type, RotateCw, Scissors, Download, Share2,
  FileSignature, FileKey, FileJson, FileCode2, FileArchive, Table,
  Languages, Stamp, QrCode, Palette, Grid, ArrowUpDown, ArrowLeftRight,
  FileInput, Scale, Shield, Pencil, Eraser, Wrench, Image, Crop, 
  Maximize2, Minimize2, GalleryHorizontalEnd, Scan, Camera, Hash, Search,
  Globe2, Link2, Gauge, MessageSquare, Calculator, Binary, Percent,
  Calendar, HeartPulse, DollarSign, Clock, Ruler, Weight, Thermometer,
  Database, KeyRound, LockKeyhole, Command, Link, 
  MapPin, Award, Youtube, Instagram, Twitter, Facebook, Video, Tag, Smile, 
  BarChart, Printer, FileSpreadsheet, BookOpen, Bot, Map, Dices, 
  Zap, FileEdit, Eye, FileCheck, FileX, FileLock2, 
  FileImage, FileText as FileDoc, FileSpreadsheet as FileXls, FileCode,
  Scan as ScanIcon, FileSearch2, EyeOff, 
  RotateCcw, FileStack, Upload,
  FilePlus, FileMinus, Edit,
  Image as ImageIcon, FileSignature as SignIcon, Stamp as WatermarkIcon,
  RotateCw as RotateIcon, Globe2 as HtmlIcon, Lock as LockIcon,
  Unlock as UnlockIcon, ListOrdered as OrganizeIcon, Archive as ArchiveIcon,
  Wrench as RepairIcon, Hash as PageNumbersIcon, ScanLine as ScanPdfIcon,
  FileSearch as OcrIcon, GitCompare as CompareIcon, EyeOff as RedactIcon,
  IndianRupee, Sun, Moon, Menu, X, Home, ArrowUp, CheckCircle2, ShieldCheck,
  Clock3, Sparkles, ChevronDown, ArrowRight, LayoutGrid, Heart
} from 'lucide-react';

const allToolCategories = [
  {
    name: "PDF Tools",
    tools: [
      { 
        icon: <FileStack />, 
        title: 'Merge PDF', 
        desc: 'Combine PDFs in the order you want with the easiest PDF merger available',
        href: '/tools/merge-pdf',
        isNew: false
      },
      { 
        icon: <FileMinus />, 
        title: 'Split PDF', 
        desc: 'Separate one page or a whole set for easy conversion into independent PDF files',
        href: '/tools/split-pdf',
        isNew: false
      },
      { 
        icon: <Minimize2 />, 
        title: 'Compress PDF', 
        desc: 'Reduce file size while optimizing for maximal PDF quality',
        href: '/tools/compress-pdf',
        isNew: false
      },
      { 
        icon: <FileDoc />, 
        title: 'PDF to Word', 
        desc: 'Convert PDF files into easy to edit DOC and DOCX documents with high accuracy',
        href: '/tools/pdf-to-word',
        isNew: false
      },
      { 
        icon: <FileSpreadsheet />, 
        title: 'PDF to PowerPoint', 
        desc: 'Turn your PDF files into easy to edit PPT and PPTX slideshows',
        href: '/tools/pdf-to-powerpoint',
        isNew: false
      },
      { 
        icon: <FileXls />, 
        title: 'PDF to Excel', 
        desc: 'Convert PDF files into Excel spreadsheets quickly',
        href: '/tools/pdf-to-excel',
        isNew: false
      },
      { 
        icon: <FileDoc />, 
        title: 'Word to PDF', 
        desc: 'Make DOC and DOCX files easy to read by converting them to PDF',
        href: '/tools/word-to-pdf',
        isNew: false
      },
      { 
        icon: <FileSpreadsheet />, 
        title: 'PowerPoint to PDF', 
        desc: 'Make PPT and PPTX slideshows easy to view by converting them to PDF',
        href: '/tools/powerpoint-to-pdf',
        isNew: false
      },
      { 
        icon: <FileXls />, 
        title: 'Excel to PDF', 
        desc: 'Make EXCEL spreadsheets easy to read by converting them to PDF',
        href: '/tools/excel-to-pdf',
        isNew: false
      },
      { 
        icon: <Edit />, 
        title: 'Edit PDF', 
        desc: 'Add text, images, shapes or freehand annotations to a PDF document',
        href: '/tools/edit-pdf',
        isNew: true
      },
      { 
        icon: <ImageIcon />, 
        title: 'PDF to JPG', 
        desc: 'Convert each PDF page into a JPG or extract all images contained in a PDF',
        href: '/tools/pdf-to-jpg',
        isNew: false
      },
      { 
        icon: <ImageIcon />, 
        title: 'JPG to PDF', 
        desc: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins',
        href: '/tools/jpg-to-pdf',
        isNew: false
      },
      { 
        icon: <SignIcon />, 
        title: 'Sign PDF', 
        desc: 'Sign yourself or request electronic signatures from others',
        href: '/tools/sign-pdf',
        isNew: false
      },
      { 
        icon: <WatermarkIcon />, 
        title: 'Watermark', 
        desc: 'Stamp an image or text over your PDF in seconds',
        href: '/tools/watermark-pdf',
        isNew: false
      },
      { 
        icon: <RotateIcon />, 
        title: 'Rotate PDF', 
        desc: 'Rotate your PDFs the way you need them. Rotate multiple PDFs at once',
        href: '/tools/rotate-pdf',
        isNew: false
      },
      { 
        icon: <HtmlIcon />, 
        title: 'HTML to PDF', 
        desc: 'Convert webpages in HTML to PDF with a single click',
        href: '/tools/html-to-pdf',
        isNew: false
      },
      { 
        icon: <UnlockIcon />, 
        title: 'Unlock PDF', 
        desc: 'Remove PDF password security to freely use your PDFs',
        href: '/tools/unlock-pdf',
        isNew: false
      },
      { 
        icon: <LockIcon />, 
        title: 'Protect PDF', 
        desc: 'Protect PDF files with a password to prevent unauthorized access',
        href: '/tools/protect-pdf',
        isNew: false
      },
      { 
        icon: <OrganizeIcon />, 
        title: 'Organize PDF', 
        desc: 'Sort, delete or add PDF pages to your document',
        href: '/tools/organize-pdf',
        isNew: false
      },
      { 
        icon: <ArchiveIcon />, 
        title: 'PDF to PDF/A', 
        desc: 'Transform your PDF to PDF/A for long-term archiving',
        href: '/tools/pdf-to-pdfa',
        isNew: false
      },
      { 
        icon: <RepairIcon />, 
        title: 'Repair PDF', 
        desc: 'Repair damaged PDF and recover data from corrupt PDF files',
        href: '/tools/repair-pdf',
        isNew: false
      },
      { 
        icon: <PageNumbersIcon />, 
        title: 'Page Numbers', 
        desc: 'Add page numbers into PDFs with customizable positions and typography',
        href: '/tools/add-page-numbers',
        isNew: false
      },
      { 
        icon: <ScanPdfIcon />, 
        title: 'Scan to PDF', 
        desc: 'Capture document scans from your mobile device instantly',
        href: '/tools/scan-to-pdf',
        isNew: false
      },
      { 
        icon: <OcrIcon />, 
        title: 'OCR PDF', 
        desc: 'Convert scanned PDF into searchable and selectable documents',
        href: '/tools/ocr-pdf',
        isNew: false
      },
      { 
        icon: <CompareIcon />, 
        title: 'Compare PDF', 
        desc: 'Show side-by-side document comparison to spot changes between versions',
        href: '/tools/compare-pdf',
        isNew: true
      },
      { 
        icon: <RedactIcon />, 
        title: 'Redact PDF', 
        desc: 'Permanently remove sensitive information from PDF documents',
        href: '/tools/redact-pdf',
        isNew: true
      }
    ]
  },
  {
    name: "Image Tools",
    tools: [
      { 
        icon: <Image />, 
        title: 'HEIC to JPG', 
        desc: 'Convert HEIC images to JPG format', 
        href: '/tools/heic-to-jpg',
        isNew: true 
      },
      { 
        icon: <Image />, 
        title: 'WEBP to JPG', 
        desc: 'Convert WEBP images to JPG format', 
        href: '/tools/webp-to-jpg',
        isNew: true 
      },
      { 
        icon: <Image />, 
        title: 'JPEG to PNG', 
        desc: 'Convert JPEG images to PNG format', 
        href: '/tools/jpeg-to-png',
        isNew: true 
      },
      { 
        icon: <Image />, 
        title: 'PNG to JPEG', 
        desc: 'Convert PNG images to JPEG format', 
        href: '/tools/png-to-jpeg',
        isNew: true 
      },
      { 
        icon: <FileText />, 
        title: 'JPG to Text', 
        desc: 'Extract text from JPG images', 
        href: '/tools/jpg-to-text',
        isNew: true 
      },
      { 
        icon: <FileText />, 
        title: 'PNG to Text', 
        desc: 'Extract text from PNG images', 
        href: '/tools/png-to-text',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (50KB)', 
        desc: 'Convert JPG to PDF under 50KB', 
        href: '/tools/jpg-to-pdf-50kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (100KB)', 
        desc: 'Convert JPG to PDF under 100KB', 
        href: '/tools/jpg-to-pdf-100kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPEG to PDF (200KB)', 
        desc: 'Convert JPEG to PDF under 200KB', 
        href: '/tools/jpeg-to-pdf-200kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (300KB)', 
        desc: 'Convert JPG to PDF under 300KB', 
        href: '/tools/jpg-to-pdf-300kb',
        isNew: true 
      },
      { 
        icon: <FileDoc />, 
        title: 'JPG to PDF (500KB)', 
        desc: 'Convert JPG to PDF under 500KB', 
        href: '/tools/jpg-to-pdf-500kb',
        isNew: true 
      },
      { icon: <Image />, title: 'Image to PNG', desc: 'Convert images to PNG format', href: '/tools/image-to-png' },
      { icon: <ImagePlus />, title: 'Image to JPG', desc: 'Convert images to JPG format', href: '/tools/image-to-jpg' },
      { icon: <Maximize2 />, title: 'Image Resizer', desc: 'Resize images to any dimension', href: '/tools/image-resizer' },
      { icon: <Minimize2 />, title: 'Image Compressor', desc: 'Compress image file size', href: '/tools/image-compressor' },
      { icon: <Crop />, title: 'Image Cropper', desc: 'Crop images precisely', href: '/tools/image-cropper' },
      { icon: <FileCode2 />, title: 'Image to Base64', desc: 'Convert images to Base64', href: '/tools/image-to-base64' },
      { icon: <GalleryHorizontalEnd />, title: 'WebP to PNG', desc: 'Convert WebP to PNG format', href: '/tools/webp-to-png' },
      { icon: <Camera />, title: 'Screenshot to PDF', desc: 'Convert screenshots to PDF', href: '/tools/screenshot-to-pdf' }
    ]
  },
  {
    name: "SEO Tools",
    tools: [
      { icon: <FileJson />, title: 'Meta Tag Generator', desc: 'Generate meta tags', href: '/tools/meta-tag-generator' },
      { icon: <Hash />, title: 'Keyword Density', desc: 'Check keyword density', href: '/tools/keyword-density' },
      { icon: <FileArchive />, title: 'Sitemap Generator', desc: 'Generate XML sitemaps', href: '/tools/sitemap-generator' },
      { icon: <FileText />, title: 'Robots.txt Generator', desc: 'Create robots.txt files', href: '/tools/robots-txt-generator' },
      { icon: <Search />, title: 'Google Index Checker', desc: 'Check Google indexing', href: '/tools/google-index-checker' },
      { icon: <Globe2 />, title: 'Domain Authority', desc: 'Check domain authority', href: '/tools/domain-authority' },
      { icon: <Link2 />, title: 'Backlink Checker', desc: 'Analyze backlinks', href: '/tools/backlink-checker' },
      { icon: <Gauge />, title: 'Page Speed Checker', desc: 'Test page loading speed', href: '/tools/page-speed-checker' }
    ]
  },
  {
    name: "Text Tools",
    tools: [
      { icon: <Type />, title: 'Word Counter', desc: 'Count words in text', href: '/tools/word-counter' },
      { icon: <FileText />, title: 'Character Counter', desc: 'Count characters', href: '/tools/character-counter' },
      { icon: <ArrowUpDown />, title: 'Case Converter', desc: 'Convert text case', href: '/tools/case-converter' },
      { icon: <Search />, title: 'Plagiarism Checker', desc: 'Check for plagiarism', href: '/tools/plagiarism-checker' },
      { icon: <MessageSquare />, title: 'Grammar Checker', desc: 'Check grammar', href: '/tools/grammar-checker' },
      { icon: <FileSignature />, title: 'Fancy Text Generator', desc: 'Create fancy text styles', href: '/tools/fancy-text' },
      { icon: <Type />, title: 'Random Text Generator', desc: 'Generate random text', href: '/tools/random-text' }
    ]
  },
  {
    name: "Developer Tools",
    tools: [
      { icon: <FileJson />, title: 'JSON Formatter', desc: 'Format JSON data', href: '/tools/json-formatter' },
      { icon: <FileCode2 />, title: 'HTML to Markdown', desc: 'Convert HTML to Markdown', href: '/tools/html-to-markdown' },
      { icon: <Minimize2 />, title: 'CSS Minifier', desc: 'Minify CSS code', href: '/tools/css-minifier' },
      { icon: <Minimize2 />, title: 'JavaScript Minifier', desc: 'Minify JavaScript code', href: '/tools/js-minifier' },
      { icon: <Database />, title: 'SQL Formatter', desc: 'Format SQL queries', href: '/tools/sql-formatter' },
      { icon: <FileCode2 />, title: 'Color Code Picker', desc: 'Pick color codes', href: '/tools/color-picker' },
      { icon: <Binary />, title: 'Base64 Tools', desc: 'Encode/Decode Base64', href: '/tools/base64' }
    ]
  },
  {
    name: "Math & Calculators",
    tools: [
      { icon: <Percent />, title: 'Percentage Calculator', desc: 'Calculate percentages', href: '/tools/percentage-calc' },
      { icon: <Calendar />, title: 'Age Calculator', desc: 'Calculate age', href: '/tools/age-calculator' },
      { icon: <HeartPulse />, title: 'BMI Calculator', desc: 'Calculate BMI', href: '/tools/bmi-calculator' },
      { icon: <DollarSign />, title: 'Loan Calculator', desc: 'Calculate loan EMI', href: '/tools/loan-calculator' },
      { icon: <Calculator />, title: 'Scientific Calculator', desc: 'Advanced calculations', href: '/tools/scientific-calc' },
      { 
        icon: <IndianRupee />, 
        title: '7th CPC Calculator', 
        desc: 'Calculate salary as per 7th Pay Commission', 
        href: '/tools/7th-cpc-calculator',
        isNew: true
      },
      { 
        icon: <Calculator />, 
        title: 'GST Calculator', 
        desc: 'Calculate GST and final price', 
        href: '/tools/gst-calculator',
        isNew: true
      }
    ]
  },
  {
    name: "Unit Converters",
    tools: [
      { icon: <Ruler />, title: 'Length Converter', desc: 'Convert length units', href: '/tools/length-converter' },
      { icon: <Weight />, title: 'Weight Converter', desc: 'Convert weight units', href: '/tools/weight-converter' },
      { icon: <Clock />, title: 'Time Converter', desc: 'Convert time zones', href: '/tools/time-converter' },
      { icon: <Thermometer />, title: 'Temperature Converter', desc: 'Convert temperature', href: '/tools/temp-converter' }
    ]
  },
  {
    name: "Security Tools",
    tools: [
      { icon: <KeyRound />, title: 'Password Generator', desc: 'Generate secure passwords', href: '/tools/password-generator' },
      { icon: <LockKeyhole />, title: 'Hash Generator', desc: 'Generate MD5/SHA256', href: '/tools/hash-generator' },
      { icon: <Command />, title: 'String Generator', desc: 'Generate random strings', href: '/tools/string-generator' },
      { icon: <Link />, title: 'URL Shortener', desc: 'Shorten long URLs', href: '/tools/url-shortener' },
      { icon: <MapPin />, title: 'IP Lookup', desc: 'Lookup IP information', href: '/tools/ip-lookup' }
    ]
  },
  {
    name: "Social Media Tools",
    tools: [
      { icon: <Youtube />, title: 'YouTube Tools', desc: 'YouTube utilities', href: '/tools/youtube-tools' },
      { icon: <Instagram />, title: 'Instagram Tools', desc: 'Instagram utilities', href: '/tools/instagram-tools' },
      { icon: <Twitter />, title: 'Twitter Tools', desc: 'Twitter utilities', href: '/tools/twitter-tools' },
      { icon: <Facebook />, title: 'Facebook Tools', desc: 'Facebook utilities', href: '/tools/facebook-tools' },
      { icon: <Video />, title: 'TikTok Tools', desc: 'TikTok utilities', href: '/tools/tiktok-tools' },
      { icon: <Tag />, title: 'Hashtag Generator', desc: 'Generate hashtags', href: '/tools/hashtag-generator' },
      { icon: <Smile />, title: 'Emoji Keyboard', desc: 'Copy and paste emojis', href: '/tools/emoji-keyboard' }
    ]
  },
  {
    name: "Miscellaneous",
    tools: [
      { icon: <BarChart />, title: 'Barcode Generator', desc: 'Generate barcodes', href: '/tools/barcode-generator' },
      { icon: <FileSpreadsheet />, title: 'Invoice Generator', desc: 'Create invoices', href: '/tools/invoice-generator' },
      { icon: <BookOpen />, title: 'E-book Creator', desc: 'Create e-books', href: '/tools/ebook-creator' },
      { icon: <Bot />, title: 'AI Chatbot Demo', desc: 'Try AI chatbot', href: '/tools/chatbot-demo' },
      { icon: <Map />, title: 'Address Generator', desc: 'Generate fake addresses', href: '/tools/address-generator' },
      { icon: <Dices />, title: 'Random Generator', desc: 'Generate random data', href: '/tools/random-generator' },
      { icon: <Zap />, title: 'Speed Test', desc: 'Test internet speed', href: '/tools/speed-test' }
    ]
  }
];

const AdPlaceholder: React.FC<{ id: string; className: string }> = ({ id, className }) => (
  <div id={id} className={`bg-gray-100 rounded-lg ${className} flex items-center justify-center`}>
    <span className="text-gray-400">Advertisement</span>
  </div>
);

const ToolsHomepage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{title: string, category: string, href: string}>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const handleCategoryClick = (categoryName: string) => {
    setIsMenuOpen(false);
    setActiveCategory(null);
    
    const targetId = categoryName.startsWith('#') 
      ? categoryName.substring(1) 
      : categoryName.toLowerCase().replace(/[&\s]+/g, '-');

    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const allTools = useMemo(() => {
    return allToolCategories.flatMap(category => 
      category.tools.map(tool => ({
        ...tool,
        category: category.name
      }))
    );
  }, []);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return allToolCategories;

    const query = searchQuery.toLowerCase().trim();
    return allToolCategories.map(category => ({
      ...category,
      tools: category.tools.filter(tool => 
        tool.title.toLowerCase().includes(query) ||
        tool.desc.toLowerCase().includes(query)
      )
    })).filter(category => category.tools.length > 0);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const matchingTools = allTools
      .filter(tool => 
        tool.title.toLowerCase().includes(query.toLowerCase()) ||
        tool.desc.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5) // Reduced from 8 to 5 suggestions
      .map(tool => ({
        title: tool.title,
        category: tool.category,
        href: tool.href
      }));

    setSuggestions(matchingTools);
    setShowSuggestions(true);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#e7513b] to-[#ff6b6b] bg-clip-text text-transparent">
                  ConverterTools
                </span>
              </a>
              
              <nav className="hidden md:flex space-x-6">
                {[...allToolCategories.slice(0, 5), {
                  name: "All Tools",
                  tools: [
                    { icon: <Calculator />, title: 'Math & Calculators', desc: 'Mathematical tools and calculators', href: '#math-calculators' },
                    { icon: <Ruler />, title: 'Unit Converters', desc: 'Convert between different units', href: '#unit-converters' },
                    { icon: <Shield />, title: 'Security Tools', desc: 'Security and encryption tools', href: '#security-tools' },
                    { icon: <Share2 />, title: 'Social Media Tools', desc: 'Social media utilities', href: '#social-media-tools' },
                    { icon: <LayoutGrid />, title: 'Miscellaneous', desc: 'Other useful tools', href: '#miscellaneous' }
                  ]
                }].map((category) => (
                  <div
                    key={category.name}
                    className="relative group"
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <button 
                      onClick={() => handleCategoryClick(category.name)}
                      className={`flex items-center space-x-1 py-6 font-medium tracking-wide ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      } hover:text-[#e7513b] transition-colors`}
                    >
                      <span>{category.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    </button>
                    
                    {activeCategory === category.name && (
                      <div 
                        className={`absolute top-full left-0 w-72 ${
                          isDarkMode ? 'bg-gray-700' : 'bg-white'
                        } shadow-xl rounded-lg py-3 -ml-4 border ${
                          isDarkMode ? 'border-gray-600' : 'border-gray-100'
                        }`}
                      >
                        {category.tools.slice(0, 5).map((tool) => (
                          <a
                            key={tool.title}
                            href={tool.href}
                            onClick={(e) => {
                              if (tool.href.startsWith('#')) {
                                e.preventDefault();
                                handleCategoryClick(tool.href.substring(1));
                              }
                            }}
                            className={`flex items-center space-x-3 px-4 py-2.5 ${
                              isDarkMode 
                                ? 'hover:bg-gray-600 text-white' 
                                : 'hover:bg-gray-50 text-gray-700'
                            } transition-colors group`}
                          >
                            <span className="text-[#e7513b] transform transition-transform group-hover:scale-110">
                              {tool.icon}
                            </span>
                            <span className="font-medium">{tool.title}</span>
                          </a>
                        ))}
                        <div className="px-4 py-3 border-t border-gray-200 mt-2">
                          <button
                            onClick={() => handleCategoryClick(category.name)}
                            className="flex items-center space-x-2 text-[#e7513b] hover:text-[#d4402b] font-medium group w-full"
                          >
                            <span>View All {category.name}</span>
                            <ChevronDown className="w-4 h-4 transform transition-transform group-hover:translate-y-0.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className={`p-2 rounded-full hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-700' : ''}`}
                aria-label="Home"
              >
                <Home className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2  rounded-full hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-700' : ''}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className={`fixed inset-0 z-40 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} md:hidden`} style={{ top: '64px' }}>
          <div className="p-4">
            <nav className="space-y-4">
              <button 
                onClick={() => {
                  scrollToAbout();
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-[#e7513b]`}
              >
                About
              </button>
              <a href="/features" className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-[#e7513b]`}>Features</a>
              <a href="/contact" className={`block ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-[#e7513b]`}>Contact</a>
            </nav>
          </div>
        </div>
      )}

      <div className="pt-16">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#11263c]'} text-white relative`}>
          <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Every tool you need in one place
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-300">
              100+ free online tools for content creators, developers, and professionals
            </p>
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-4 md:p-8 max-w-2xl mx-auto shadow-lg relative`}>
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-4">
                <Search className={`w-6 h-6 md:w-8 md:h-8 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-lg md:text-xl font-semibold`}>
                  Search for tools
                </span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Search tools..."
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'border-gray-200 text-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-[#e7513b]`}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <div className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    {suggestions.map((suggestion, index) => (
                      <a
                        key={index}
                        href={suggestion.href}
                        className={`block px-4 py-3 ${
                          isDarkMode 
                            ? 'text-white hover:bg-gray-600' 
                            : 'text-gray-700 hover:bg-gray-100'
                        } first:rounded-t-lg last:rounded-b-lg`}
                      >
                        <div className="font-medium">{suggestion.title}</div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {suggestion.category}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-4">
          <AdPlaceholder id="top-ad" className="h-[90px] md:h-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                No tools found matching your search.
              </p>
            </div>
          ) : (
            filteredCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                id={category.name.toLowerCase().replace(/[&\s]+/g, '-')}
                className="mb-8 md:mb-16 scroll-mt-24"
              >
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-8 ${
                  isDarkMode ? 'text-white' : 'text-gray-700'
                }`}>
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <a 
                      key={toolIndex} 
                      href={tool.href}
                      className={`border rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer group no-underline relative ${
                        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                    >
                      {tool.isNew && (
                        <span className="absolute top-2 right-2 bg-[#e7513b] text-white text-xs px-2 py-1 rounded-full">
                          New!
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e7513b] rounded-lg flex items-center justify-center text-white">
                          {tool.icon}
                        </div>
                        <ChevronRight className={`${
                          isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        } group-hover:text-[#e7513b] transition-colors`} />
                      </div>
                      <h3 className={`text-lg md:text-xl font-semibold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-700'
                      }`}>
                        {tool.title}
                      </h3>
                      <p className={`text-sm md:text-base ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {tool.desc}
                      </p>
                    </a>
                  ))}
                </div>
                
                {categoryIndex % 2 === 1 && (
                  <div className="mt-8">
                    <AdPlaceholder id={`category-ad-${categoryIndex}`} className="h-[90px] md:h-[120px]" />
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <section id="about-section" className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} py-16 md:py-24 scroll-mt-16`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Why Choose ConverterTools?
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Trusted by thousands of professionals worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <div className="text-[#e7513b] mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  100% Secure
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Enterprise-grade security with automatic file deletion and encrypted processing
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <div className="text-[#e7513b] mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  Premium Quality
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Professional-grade tools with high-quality output and precision
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <div className="text-[#e7513b] mb-4">
                  <Clock3 className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  Lightning Fast
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Optimized for speed with cloud processing and instant results
                </p>
              </div>
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <div className="text-[#e7513b] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  Always Free
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  No hidden fees or subscriptions - all tools are completely free
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className={`inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg`}>
                <Users className="w-5 h-5 text-[#e7513b]" />
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-700'} font-semibold`}>
                  Trusted by over 1 million users worldwide
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-4">
          <AdPlaceholder id="bottom-ad" className="h-[90px] md:h-[120px]" />
        </div>

        <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#11263c]'} text-white py-8 md:py-12`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Popular Tools</h4>
                <ul className="space-y-2">
                  <li><a href="/tools/pdf-merge" className="text-sm md:text-base hover:text-[#e7513b]">PDF Merger</a></li>
                  <li><a href="/tools/image-converter" className="text-sm md:text-base hover:text-[#e7513b]">Image Converter</a></li>
                  <li><a href="/tools/text-tools" className="text-sm md:text-base hover:text-[#e7513b]">Text Tools</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-sm md:text-base hover:text-[#e7513b]">About</a></li>
                  <li><a href="/features" className="text-sm md:text-base hover:text-[#e7513b]">Features</a></li>
                  <li><a href="/contact" className="text-sm md:text-base hover:text-[#e7513b]">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-sm md:text-base hover:text-[#e7513b]">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-sm md:text-base hover:text-[#e7513b]">Terms of Service</a></li>
                  <li><a href="/cookies" className="text-sm md:text-base hover:text-[#e7513b]">Cookie Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Follow Us</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm md:text-base hover:text-[#e7513b]">Twitter</a></li>
                  <li><a href="#" className="text-sm md:text-base hover:text-[#e7513b]">Facebook</a></li>
                  <li><a href="#" className="text-sm md:text-base hover:text-[#e7513b]">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
              <p className="text-sm md:text-base mb-2">
                Made with <Heart className="inline-block w-4 h-4 text-red-500 mx-1" fill="currentColor" /> by ConverterTools Team
              </p>
              <p className="text-sm md:text-base">&copy; 2024 ConverterTools. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#e7513b] text-white p-3 rounded-full shadow-lg hover:bg-[#d4402b] transition-colors z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ToolsHomepage;
