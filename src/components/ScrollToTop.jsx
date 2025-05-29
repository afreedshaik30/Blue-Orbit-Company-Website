import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component crolls the page to top when route changes
/*
      const location = useLocation();
      c.log(location);
        {
           pathname: "/about",
           search: "",
           hash: "",
           state: null,
           key: "xyz123"
        }
*/

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current path from React Router

  // When the route (pathname) changes, scroll to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: This runs the effect whenever pathname changes

  return null; // This component does not render any UI
};

export default ScrollToTop;
