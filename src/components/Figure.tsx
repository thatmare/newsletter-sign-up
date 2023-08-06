import React, { useState, useEffect } from "react";

export function Figure() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 376);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 376);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <figure>
      {isMobile ? (
        <img
          src="assets/images/illustration-sign-up-mobile.svg"
          alt="Illustration that displays a couple of screens with stats and a list alluding to project management."
        />
      ) : (
        <img
          src="assets/images/illustration-sign-up-desktop.svg"
          alt="Illustration that displays a couple of screens with stats and a list alluding to project management."
        />
      )}
    </figure>
  );
}
