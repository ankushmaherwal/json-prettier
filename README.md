# JSON Formatter / Prettifier

A powerful, free online JSON toolkit built with Next.js that helps developers format, validate, parse, and minify JSON data instantly. No registration required - just open and use!

🌐 **Live Demo**: [https://jsonprettier.in](https://jsonprettier.in)

## ✨ Features

### 🔧 **JSON Formatter / Prettifier**
- **Beautify JSON** - Format messy JSON into readable, properly indented code
- **Syntax highlighting** - Color-coded JSON for better readability
- **Copy to clipboard** - One-click copying of formatted JSON
- **Download formatted JSON** - Save formatted files directly
- **Real-time formatting** - Instant results as you type

### ✅ **JSON Validator**
- **Syntax validation** - Check if your JSON is valid
- **Error highlighting** - Pinpoint exact syntax errors
- **Detailed error messages** - Clear explanations of what's wrong
- **Line-by-line validation** - See exactly where issues occur

### 🔍 **JSON Parser**
- **Visual tree structure** - Interactive JSON object tree
- **Data type identification** - See data types at a glance
- **Expandable/collapsible nodes** - Navigate large JSON easily
- **Statistics** - Object size, depth, and property counts

### 📦 **JSON Minifier**
- **Remove whitespace** - Compress JSON to smallest size
- **Preserve functionality** - Maintains JSON validity
- **Size comparison** - See compression savings
- **Download minified** - Save compressed files

## 🚀 **Built With**

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Beautiful notifications
- **Lucide React** - Modern icon library

## 🛠️ **Tech Stack**

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Analytics**: Google Analytics
- **Deployment**: Vercel (recommended)

## 📱 **Responsive Design**

- **Mobile-first** - Optimized for all screen sizes
- **Touch-friendly** - Easy to use on mobile devices
- **Progressive Web App** - Install as native app
- **Fast loading** - Optimized performance

## 🎯 **Use Cases**

### **For Developers**
- **API Development** - Format API responses
- **Configuration Files** - Validate JSON configs
- **Data Processing** - Parse and analyze JSON data
- **Debugging** - Pretty-print JSON for debugging

### **For Designers**
- **JSON Mockups** - Format data for prototypes
- **API Documentation** - Create readable examples
- **Data Visualization** - Understand JSON structure

### **For Students**
- **Learning JSON** - Practice with real examples
- **Assignment Help** - Format and validate JSON
- **Project Work** - Clean up messy JSON data

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/json-prettier.git
   cd json-prettier
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 **Project Structure**

```
json-prettier/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about-us/          # About Us page
│   │   ├── contact-us/        # Contact Us page
│   │   ├── json-minifier/     # JSON Minifier tool
│   │   ├── json-parser/       # JSON Parser tool
│   │   ├── json-validator/    # JSON Validator tool
│   │   └── page.tsx           # Home page (Formatter)
│   ├── components/            # React components
│   │   ├── AdPlacement.tsx    # Ad placement component
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx         # Site header
│   │   ├── JsonMinifier.tsx   # Minifier component
│   │   ├── JsonParser.tsx     # Parser component
│   │   ├── JsonPrettifier.tsx # Formatter component
│   │   └── JsonValidator.tsx  # Validator component
│   ├── config/                # Configuration files
│   │   └── page-config.json   # Page settings
│   └── lib/                   # Utility functions
│       ├── ads-config.ts      # Ad configuration
│       └── use-beautify-counter.ts # Usage counter hook
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## 🔧 **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🤝 **Contributing**

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Support**

- **Email**: jsonprettier@outlook.com
- **Issues**: [GitHub Issues](https://github.com/ankushmaherwal/json-prettier/issues)
- **Documentation**: [Project Wiki](https://github.com/ankushmaherwal/json-prettier/wiki)

## 🙏 **Acknowledgments**

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment
- **Tailwind CSS** - For the utility-first CSS
- **Open Source Community** - For inspiration and tools

## 📈 **Roadmap**

- [ ] **JSON Schema Validator** - Validate against schemas
- [ ] **JSON to XML Converter** - Convert between formats
- [ ] **JSON Diff Tool** - Compare two JSON files
- [ ] **API Integration** - Validate against live APIs
- [ ] **Dark Mode** - Theme switching
- [ ] **Keyboard Shortcuts** - Power user features

---

**Made with ❤️ by a tech enthusiast who loves building productivity tools**

[Visit JSON Prettifier](https://jsonprettier.in) | [Report Bug](https://github.com/ankushmaherwal/json-prettier/issues) | [Request Feature](https://github.com/ankushmaherwal/json-prettier/issues)