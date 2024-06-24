import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = {
    "Most Ordered": [
      "Coney dog's - $5.99"
    ],
    "PARKSIDE’s Appetizers": [
      "Coney dog's - $5.99",
      "Sandwiches - $4.99",
      "Wing Dings (Served with Texas toast) - $8.99",
      "Nachos - $7.50",
      "Burgers (Includes lettuce, tomato , onions, pickles, ketchup, mustard, and mayo) - $9.99",
      "Melts - $7.99",
      "Parkside’s famous pita’s - $6.50",
      "Deli Sandwiches - $8.50",
      "Salads - $6.99",
      "Quesadilla’s - $7.99"
    ],
    "Dinners (Served with fries, Texas toast and drink)": [
      "Stir Fry - $12.99",
      "Breakfast sandwiches - $5.50"
    ],
    "PARKSIDE BREAKFAST ANYTIME": [],
    "Omelettes (Served with hash browns or grits, toast and jelly)": [],
    "Desserts": [],
    "Sides": [],
    "Beverages": [
      "Juice - $3.29",
      "Coffee - $2.29",
      "Hot Chocolate - $2.29",
      "Hot Tea - $2.29"
    ]
  };

  return (
    <section>
      <h2>Our Menu</h2>
      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Menu;

