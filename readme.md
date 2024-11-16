
# **FlowMotion**
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/DALM1/Flowmotion?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/DALM1/Flowmotion?style=for-the-badge)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/DALM1/Flowmotion?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/DALM1/Flowmotion?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/DALM1/Flowmotion?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/DALM1/Flowmotion?style=for-the-badge)

**FlowMotion** is a lightweight and intuitive React library for managing smooth transitions between pages or components. Based on **@react-spring/web**, it allows you to create dynamic animations with minimal configuration.

---

## 🚀 **Installation**

Add FlowMotion to your project with npm :

```bash
npm install flowmotion
```

---

## 📖 **Usage**

Here’s how to use **FlowMotion** to animate page or component transitions.

### Basic usage example

```javascript
import React, { useState } from 'react';
import { PageTransition } from 'flowmotion';

const App = () => {
  const [location, setLocation] = useState('home');

  return (
    <div>
      <button onClick={() => setLocation('home')}>Home</button>
      <button onClick={() => setLocation('about')}>About</button>

      <PageTransition location={location}>
        {(item) => (
          <div style={{ padding: 20 }}>
            {item === 'home' ? <h1>Welcome to Home Page</h1> : <h1>About Us</h1>}
          </div>
        )}
      </PageTransition>
    </div>
  );
};

export default App;
```

---

## ⚙️ **API**

### **PageTransition**

The main component for managing transitions.

| Prop         | Type     | Description                                                                 |
|--------------|----------|-----------------------------------------------------------------------------|
| `location`   | `any`    | A unique key to identify the current state or page (e.g., route, ID).       |
| `children`   | `func`   | A function that returns the content to display during the transition.       |

---

## 🧙‍♂️ **How does it work?**

FlowMotion uses `useTransition` from **@react-spring/web** to animate transitions based on the `location` property. Each new `location` triggers an exit and entry animation.

---

## 📦 **Advanced Example**

Here is an example with custom styles and complex transitions:

```javascript
import React, { useState } from 'react';
import { PageTransition } from 'flowmotion';

const App = () => {
  const [location, setLocation] = useState('page1');

  return (
    <div>
      <button onClick={() => setLocation('page1')}>Page 1</button>
      <button onClick={() => setLocation('page2')}>Page 2</button>
      <button onClick={() => setLocation('page3')}>Page 3</button>

      <PageTransition location={location}>
        {(item) => (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              background: item === 'page1' ? '#f4a261' : item === 'page2' ? '#2a9d8f' : '#e76f51',
              color: '#fff',
            }}
          >
            {item === 'page1' && 'This is Page 1'}
            {item === 'page2' && 'Welcome to Page 2'}
            {item === 'page3' && 'You are on Page 3'}
          </div>
        )}
      </PageTransition>
    </div>
  );
};

export default App;
```

---

## 🛠️ **Advanced Configuration**

You can customize the animations by modifying the styles or the entry/exit settings in `PageTransition`:

```javascript
const transitions = useTransition(location, {
  from: { opacity: 0, transform: 'translateY(100%)' },
  enter: { opacity: 1, transform: 'translateY(0)' },
  leave: { opacity: 0, transform: 'translateY(-100%)' }
});
```

---

## 👩‍💻 **Contributions**

Contributions are welcome! If you find a bug or have a suggestion, please create an issue or submit a pull request on [GitHub](https://github.com/DALM1/flowmotion).

---

## 📝 **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
