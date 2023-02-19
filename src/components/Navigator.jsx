import { createContext } from "react";

export const NavigationContext = createContext();

import React from "react";

export function Navigator(props) {
  const [pathName, setPathName] = React.useState(window.location.pathname);
  const navigate = (_pathName) => {
    setPathName(_pathName);
    window.history.pushState(null, null, _pathName);
  };
  React.useEffect(() => {
    window.onpopstate = () => {
      setPathName(window.location.pathName);
    };
  }, []);
  return (
    <NavigationContext.Provider value={{ pathName, navigate }}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export const Route = ({ children, href }) => {
  var navObj = React.useContext(NavigationContext);

  var copy = { ...navObj };
  switch (copy.pathName) {
    case href:
      return children;
    default:
      return null;
  }
};
