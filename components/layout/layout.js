import { Fragment, useState } from 'react';

import MainNavigation from './main-navigation';

function Layout(props) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Fragment>
      <MainNavigation toggleDarkMode={toggleDarkMode} />
      <main className={darkMode ? 'dark' : 'light'}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
