import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  function Order({ closeHour, openHour }) {
    return (
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00. Come visit us or
          order online.
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}
export default Footer;
