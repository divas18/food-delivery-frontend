import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {

    const handleMenuSelection = (e) => {
        const dataSrc = e.target.getAttribute('data-src');

        if(dataSrc) {
            setCategory((prev) => prev === dataSrc ? "All" : dataSrc);
        }
    }

  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="explore-menu-heading">Explore our menu</h1>
      <p className="explore-menu-subheading">
        Choose a Diverse menu featuring a delectable array of dishes crafted
        with finest ingredient and stisfy your cravings and elevate your dining
        experience.
      </p>
      <div className="explore-menu-list" onClick={handleMenuSelection}>
        {menu_list?.map((item, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img src={item.menu_image} alt={item.menu_name} data-src={item.menu_name} className={category === item.menu_name ? "active": ""} />
              <p data-src={item.menu_name}>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
