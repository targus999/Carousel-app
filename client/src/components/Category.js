import Dropdown from "react-bootstrap/Dropdown";
import CategoryList from "../data/category.json";
import React, { useState } from "react";

const Category = () => {
  const [category, setCategory] = useState("Japan");
  const [clientId, setclientId] = useState(
    "84K-62bUCwMYWCe1BLmkIPSNne2ILre2e5L5h8GV-EA"
  );
  function handleChange(event) {
    setCategory(event.target.key);
    console.log(event);
  }
  return (
    <div>
      <>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            {CategoryList.map((list, index) => {
              return (
                <Dropdown.Item onClick={handleChange} href={"/"+list.title} >
                  {list.title}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
};

export default Category;
