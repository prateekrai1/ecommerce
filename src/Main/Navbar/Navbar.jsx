import React, {useState} from "react";
import "./Navbar.css";

const Navbar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(activeIndex);
  return (
    <div>
      <div className="navbar-content">
        <ul className="navbar-ul">
          {items.map((item, index) => (
            <li
              key={index}
              className="navbar-li"
              onMouseEnter={() => setActiveIndex(null)}
              onMouseLeave={() => setActiveIndex(index)}
            >
              <a href={item.href}>{item.label}</a>
              {item.subItems && activeIndex === index && (
                <div className="absolute left-0 top-full w-screen bg-gray-700 text-black z-50">
                  <div className="container mx-auto px-4 py-2">
                    <ul className="flex space-x-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.href} className="block py-2 px-4 hover:bg-gray-600">
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
