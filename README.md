Resume Builder AI ✨
Build stunning, ATS-friendly resumes with AI-powered enhancements
A modern web app that transforms your resume creation experience.

🚀 Live Demo
(https://resume-builder-ai-frontend.onrender.com)
✨ Key Features
🤖 AI-Powered Enhancements – Improve job descriptions, personal info, and content using OpenAI

🎨 Beautiful & Modern UI – Intuitive drag-and-drop editing with real-time preview

📄 Smart Resume Management – Upload, edit, duplicate, or create new resumes from scratch

🔒 Secure Authentication – Protected user accounts with industry-standard security

📤 Flexible Export Options – Download as PDF, share via link, or set visibility (public/private)

☁️ Cloud Storage – All resumes safely stored and accessible anywhere

🛠️ Tech Stack
Frontend: React.js with modern UI components

Backend: Express.js REST API

Database: MongoDB with Mongoose ODM

AI Integration: OpenAI API for content generation

Authentication: JWT with bcrypt password hashing

Deployment: Automated via GitHub Actions

🏗️ Getting Started
Prerequisites
Node.js (v16 or higher)

MongoDB instance (local or Atlas)

OpenAI API key

🚦 Quick Usage Guide
Sign up for a new account or log in

Create a new resume or upload an existing one

Customize sections with AI suggestions or manual edits

Preview in real-time and adjust styling

Download as PDF or share with your unique link

🧠 AI Features in Action
✍️ Content Enhancement – Get professional rewrites for any section

🎯 Keyword Optimization – Improve ATS compatibility

📝 Grammar & Tone – Polish your writing style

💡 Suggestions – Get intelligent content recommendations

🛡️ Security Highlights
Password hashing with bcrypt

JWT-based authentication

Protected API endpoints

Secure file uploads

Private resume visibility options

🚧 Development Challenges & Solutions
🔧 Real-time Sync Between Components
Struggle: Keeping the resume preview updated instantly as users typed, without performance lag.
Solution: Implemented a debounced update system with React state optimization.

🤖 OpenAI API Integration & Cost Management
Struggle: Managing API costs while providing meaningful AI suggestions without delays.
Solution: Created a smart caching layer and optimized prompt engineering for concise, effective responses.

📄 PDF Generation with Dynamic Layouts
Struggle: Exporting complex React components to clean, formatted PDFs without layout breaking.
Solution: Used a specialized PDF library with custom CSS for print styling.

🔐 Secure File Storage Strategy
Struggle: Safely handling resume uploads and preventing unauthorized access.
Solution: Implemented secure cloud storage with signed URLs and user-based access controls.

⚡ GitHub Actions Deployment Pipeline
Struggle: Automating deployment for both frontend and backend with proper environment variables.
Solution: Created a multi-stage workflow that builds, tests, and deploys both services simultaneously.

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
OpenAI for the amazing GPT API

React and Express communities

MongoDB Atlas for database hosting

Made with ❤️ by Sandesh
If you found this project helpful, consider giving it a ⭐ on GitHub!
