# niholearn 🎌

**niholearn** is a comprehensive Japanese language learning platform designed with a clear progression path from complete beginner to conversational fluency. 

Built with React and modern web technologies, this Progressive Web App (PWA) offers a structured, engaging approach to mastering Japanese through interactive lessons, quizzes, and practice exercises.

---

## 🌟 Features

- 📚 Structured Learning Path
  - Complete beginner to JLPT N5 level
  - Step-by-step progression through 8 carefully designed stages
  - Clear milestones and achievement tracking


- 🎯 Interactive Learning Tools
  - 🃏 Flip cards for Hiragana, Katakana, and basic vocabulary
  - 📝 Interactive quizzes and exercises
  - 🗣️ Dialogue practice and sentence building
  - 📊 Reference charts and learning aids


- 🎨 Modern User Experience
  - Clean, minimalist Japanese-inspired design
  - Mobile-first responsive interface
  - Smooth animations and transitions
  - Dark mode support


- ⚡ Technical Features
  - Progressive Web App (PWA) for offline learning
  - Local progress tracking
  - Fast and lightweight performance
  - Cross-device synchronization (coming soon)

---

## 🗺️ Learning Stages

1. **Stage 0**: Introduction & Setup
2. **Stage 1**: Hiragana Mastery
3. **Stage 2**: Katakana Mastery
4. **Stage 3**: Basic Vocabulary & Phrases
5. **Stage 4**: Intro to Grammar
6. **Stage 5**: Kanji Introduction
7. **Stage 6**: Reading Practice
8. **Stage 7**: Listening & Speaking
9. **Stage 8**: Review & JLPT N5 Prep

---

## 📦 Tech Stack

- **Frontend**
  - React
  - SCSS for component styling
  - Modern JavaScript (ES6+)
  
- **Features & Libraries**
  - [Wanakana](https://github.com/WaniKani/wanakana) – Japanese text transliteration
  - Custom animation system
  - Progressive Web App capabilities
  - Local storage for progress tracking

- **Development**
  - Modular component architecture
  - Responsive design principles
  - Performance optimization

---

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/niholearn.git
```

2. Install dependencies
```bash
cd niholearn/client
npm install
```

3. Start the development server
```bash
npm start
```

Visit `http://localhost:3000` to see the app in action.

---

## 📁 Project Structure

```
niholearn/
├── client/
│   ├── public/          # Static files
│   └── src/
│       ├── components/  # Reusable UI components
│       │   ├── atoms/     # Basic building blocks
│       │   ├── molecules/ # Composite components
│       │   └── organisms/ # Complex components
│       ├── pages/      # Main page components
│       │   └── stages/   # Learning stage components
│       └── util/       # Utilities and data
└── README.md
```

### Component Architecture

- **Atoms**: Basic building blocks (buttons, inputs, containers)
- **Molecules**: Combinations of atoms (cards, charts, navigation)
- **Organisms**: Complex UI components (quizzes, interactive exercises)
- **Pages**: Full page components and stage-specific layouts
---

## 📱 Installation as PWA

1. Visit the website in Chrome or any modern browser
2. Look for the "Install" or "Add to Home Screen" option
3. Enjoy offline access and app-like experience!

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- The Japanese language community
- Contributors and supporters
- Open source libraries and tools used in this project


---

## 🔮 Future Plans

### Short-term Goals
- [ ] Finish all 8 Stages
- [ ] Progress tracking with localStorage and JSON
- [ ] Offline mode improvements
- [ ] Spaced repetition system for vocabulary
- [ ] Voice recognition for pronunciation practice

### Medium-term Goals
- [ ] Gamification system with rewards
- [ ] Advanced kanji learning tools

### Long-term Vision
- [ ] AI-powered learning recommendations
- [ ] Native speaker conversation practice
- [ ] JLPT preparation modules (N5 to N1)
