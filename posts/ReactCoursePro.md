---
title: 'React PRO with TypeScript'
date: '2022-06-04'
image: reactPro.png
excerpt: A course to improve your current skills in React, where you can learn about Formik, Lazyload, Storybook, PWA, and More. 💎
isFeatured: false
---

**Course content**: 📗
A course of **27 HOURS and 233 LECTURES** A course to improve your current skills in React, where you can learn about Formik, Lazyload, Storybook, PWA, and More. It is a perfect course to continue improving our skills using React.js and learn new ones.

_Key topics_:

- React with TypeScript
- Lazyload and Suspense
- Routing
- Modularization
- GIT - GITHUB , branches , versions, actions, etc.
- Build component patterns
  - Compound Components Pattern
  - Extensible Styles Pattern
  - Control Props Pattern
  - State Initializer Pattern
  - Function Child Pattern
  - Custom State Initializer + Function Child pattern
- Deploy in NPM (TSDX , StoryBox to NPM and Semantic Release automatic)
- Formik
  - Traditional Forms
  - manual validations
  - Yup validations
  - Custom Formik Hooks
  - Components in Formik
  - Formik abstraction
  - Dinamic formularies
- Storybook
  - Propieties, options, elements , controls, deploys.
  - Authomatic documentation
- GitHub Actions
  - Actions config.
  - Node instalation
  - Releases
  - Authomatic deploy tO NPM
- PWA:
  - service worker
  - Manifest
  - Authomatic and manuals config.
  - Cache stategies
  - offline-mode
  - CRUD without conection
- WorkBox
  - wizard, Background Sync, Indexed DB, Workbox modules.

---

## A custom HOOK 🤗 used to make work a Shopping cart.

```js
const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: PropsUseProduct) => {
  const [state, setIncrease] = useState(initialValues?.state || value);

  const handleIncrease = (increase: number) => {
    let newAmout = Math.max(state + increase, 0);

    initialValues?.maxCount &&
      (newAmout = Math.min(newAmout, initialValues.maxCount));

    setIncrease(newAmout);

    onChange && onChange({ state: newAmout, product });
  };

  const handleReset = () => {
    setIncrease(initialValues?.state || 0);

    onChange && onChange({ state: 0, product });
  };
  return {
    state,
    handleIncrease,
    isMaxCountReached:
      !!initialValues?.maxCount && state === initialValues.maxCount,

    maxCount: initialValues?.maxCount,
    handleReset,
  };
};

export default useProduct;
```

---

## You can visit the repository built in this course in the above links 😲

**Component Pattern** - _Navigating throug the different branches you will be able to see the proccess_

you can visit the repository clicking 👉👉👉 [**GitHub**](https://github.com/lolo-vignolo/navbar-routes-ready/tree/main)

![Create routes via your file + folder structure](patterns.png)

**PWA**, _in this Reposiroty you can see the proccess to convert and SPA application into a PWA application._

you can visit the repository clicking 👉👉👉 [**GitHub**](https://github.com/lolo-vignolo/PWA---convert-an-App-to-a-PWA)

![Create routes via your file + folder structure](PWA.png)

**Divide an app into different modules** _can be really useful, here you can see how to use lazyLoad thanks to modularization._

you can visit the repository clicking 👉👉👉 [**GitHub**](https://github.com/lolo-vignolo/React-PRO-)

![Create routes via your file + folder structure](lazyLoad.png)

---

## Diplomas, React.js PRO course 📜

- _React PRO - take your knowleadge to another level_

![Create routes via your file + folder structure](diploma.jpg)
