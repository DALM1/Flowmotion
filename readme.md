
# **FlowMotion**

**FlowMotion** est une librairie React légère et intuitive pour gérer des transitions fluides entre des pages ou des composants. Basée sur **@react-spring/web**, elle vous permet de créer des animations dynamiques avec une configuration minimale.

---

## 🚀 **Installation**

Ajoutez FlowMotion à votre projet avec npm :

```bash
npm install flowmotion
```

---

## 📖 **Usage**

Voici comment utiliser **FlowMotion** pour animer des transitions de pages ou de composants.

### Exemple d'utilisation basique

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

Le composant principal pour gérer les transitions.

| Prop         | Type     | Description                                                                 |
|--------------|----------|-----------------------------------------------------------------------------|
| `location`   | `any`    | Une clé unique pour identifier l'état ou la page actuelle (ex : route, ID). |
| `children`   | `func`   | Une fonction qui retourne le contenu à afficher dans la transition.         |

---

## 🧙‍♂️ **Comment ça fonctionne ?**

FlowMotion utilise `useTransition` de **@react-spring/web** pour animer les transitions en fonction de la propriété `location`. Chaque nouvelle `location` déclenche une animation de sortie et d'entrée.

---

## 📦 **Exemple avancé**

Voici un exemple avec des styles personnalisés et des transitions complexes :

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

## 🛠️ **Configuration avancée**

Vous pouvez personnaliser les animations en modifiant les styles ou les paramètres d'entrée/sortie dans `PageTransition` :

```javascript
const transitions = useTransition(location, {
  from: { opacity: 0, transform: 'translateY(100%)' },
  enter: { opacity: 1, transform: 'translateY(0)' },
  leave: { opacity: 0, transform: 'translateY(-100%)' }
});
```

---

## 👩‍💻 **Contributions**

Les contributions sont les bienvenues ! Si vous trouvez un bug ou avez une suggestion, créez une issue ou soumettez une pull request sur [GitHub](https://github.com/yourusername/flowmotion).

---

## 📝 **Licence**

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.
# Flowmotion
