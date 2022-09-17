import React, { useEffect, useState } from 'react'

function Theme() {
  const [theme, setTheme] = useState((light) => {
    const saved = localStorage.getItem("current theme");
    const initialValue = JSON.parse(saved);
    return initialValue || "light";
  });
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("current theme", JSON.stringify(theme));

  }, [theme]);

  return (
    <div>
      <button
        className={theme === "dark"
        ?
        ("btn btn-sm  btn-warning  border-opacity-10")
        :
        ("btn btn-sm btn-outline-secondary border-opacity-10")
      }
        style={{borderRadius:"50px"}}
        onClick={toggleTheme}
      >
        {theme === "dark"
          ?
          (<i className="bi bi-brightness-high"> Light</i>)
          :
          (<i className="bi bi-moon-stars"> Dark</i>)
        }
      </button>
    </div>
  )
}

export default Theme
