# niholearn 🎌

**niholearn** is a minimalist, offline-capable Japanese language learning tool focused on mastering Hiragana and Katakana through interactive flip cards. Built with React and designed for simplicity, this Progressive Web App (PWA) is perfect for beginners learning to read Japanese.

---

## 🌟 Features

- 🃏 Interactive flip cards for Hiragana & Katakana
- 🎨 Clean, mobile-first UI with dark mode support
- ⚡ Fast and lightweight — works offline (PWA)
- 🧠 Tracks progress locally (coming soon)
- 📁 Export & import progress (coming soon)

---
<!--
## 🚀 Demo

> Live Demo: [https://yourusername.github.io/niholearn](https://yourusername.github.io/niholearn) TBD

(Or install it as an app from your browser!) 

---
-->

## 📦 Tech Stack

- **React** – UI library
- **Tailwind CSS** – for clean, utility-first styling
- **Vanilla JS** – flip card logic
- **PWA** – Offline-first, installable
- **[Wanakana](https://github.com/WaniKani/wanakana)** – Hiragana/Katakana transliteration
- **Custom card flip logic** (no external dependencies)

---

## 🖥️ Installation

Clone the repo and run locally:

```bash
git clone https://github.com/yourusername/niholearn.git
cd niholearn/client
npm install
npm run dev  # or npm start
```

---

## 🧪 Development Scripts

| Command        | Description                     |
|----------------|---------------------------------|
| `npm run dev`  | Start dev server                |
| `npm run build`| Build production version        |
| `npm run lint` | Lint your code                  |

---

## 📁 Project Structure

```bash
.
├── public/              # Static assets, manifest.json
├── src/
│   ├── components/      # React components (Card, Deck, etc.)
│   ├── data/            # Kana data JSON
│   ├── utils/           # Helper functions
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── tailwind.config.js   # Tailwind setup
└── package.json
```

---

## 🧩 Future Plans

- [ ] Add Kanji + JLPT vocab decks
- [ ] Add spaced repetition system (SRS)
- [ ] Save & resume user progress with localStorage
- [ ] User authentication and syncing (if backend added later)
- [ ] Electron version for desktop

---

## 📱 PWA Support

- Works offline
- Installable on desktop and mobile (via "Add to Home Screen")
- Manifest and service worker included

---

## 📖 License

MIT © [James Price](https://github.com/JumesP)

---

## 🤝 Contributing

Contributions are welcome! Open an issue or submit a PR.

---
<!--
## 📬 Contact

For questions, suggestions, or feedback:

📧 your.email@example.com  
🐦 [@yourhandle](https://twitter.com/yourhandle)
-->