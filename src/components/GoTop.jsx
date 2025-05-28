import { useEffect, useState } from "react";

const GoTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return <>{showTopBtn && <div className="go-top" onClick={goTop}></div>}</>;
};

export default GoTop;
