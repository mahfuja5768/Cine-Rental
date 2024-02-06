import Logo from "../src/assets/logo.svg";
import Ring from "../src/assets/ring.svg";
import Cart from "../src/assets/shopping-cart.svg";
import Moon from "../src/assets/icons/moon.svg";
import Sun from "../src/assets/icons/sun.svg";
import { useContext, useState } from "react";
import CardDetails from "./cine/CardDetails";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {
  const [showCard, setShowCard] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(state?.cardData);
  return (
    <header>
      {showCard && (
        <CardDetails
          onClose={() => {
            setShowCard(false);
          }}
        />
      )}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowCard(true)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Cart} width="24" height="24" alt="" />
              {state?.cardData?.length > 0 && (
                <span className=" rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] h-[30px] w-[30px] ">
                  {state?.cardData?.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
