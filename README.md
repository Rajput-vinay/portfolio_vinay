# Vinay Rajput — Portfolio

A dark-themed, animated React.js portfolio website.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── index.js              # Entry point
├── index.css             # Global styles & CSS variables
├── App.jsx               # Root component (layout, cursor, toast, nav tracking)
├── data.js               # All portfolio content (edit this to update your info)
└── components/
    ├── Navbar.jsx         # Fixed top navigation
    ├── Hero.jsx           # Landing / about section
    ├── Qualification.jsx  # Education timeline
    ├── Skills.jsx         # Tech skills grid
    ├── Projects.jsx       # Project cards
    ├── Experience.jsx     # Work experience timeline
    ├── Activities.jsx     # Extracurricular activities
    ├── Contact.jsx        # Contact form + info
    ├── Footer.jsx         # Footer with links
    └── UI.jsx             # Reusable: Card, Tag, Button, Section, SectionHeader
```

---

## ✏️ Updating Content

All portfolio data lives in **`src/data.js`**. Edit that file to:
- Add new projects to `PROJECTS`
- Add work experience to `EXPERIENCE`
- Update qualifications in `QUALIFICATIONS`
- Change skills in `SKILLS`
- Update contact info in `CONTACT_INFO`

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to **vercel.com** for automatic deployments.

---

## 🎨 Design

- **Theme:** Dark (navy-black background, cyan accent)
- **Fonts:** Syne (headings) + Space Mono (code/labels)
- **Animations:** CSS keyframe animations, hover transitions, IntersectionObserver scroll tracking
- **Features:** Cursor glow, grid background, animated section reveals, active nav highlighting
"# portfolio_vinay" 
