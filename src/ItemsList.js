import React from "react";

const ItemsList = (val) => {
  return (
    <div className="product" key={val.id}>
      <div>
        <img
          src={
            val.Image !== "N/A" ? val.Image : "https://via.placeholder.com/400"
          }
          alt={val.Name}
        />
      </div>
      <div>
        <h3>{val.Name}</h3>

        <h4>
          <p>
            Price = <span>{val.Price}</span>
          </p>
          <p>
            Protein = <span>{val.Protein}</span>
          </p>
          <p>
            Carbohydrate = <span>{val.Carbohydrate}</span>
          </p>
          <p>
            Fats = <span>{val.Fats}</span>
          </p>
        </h4>
      </div>
    </div>
  );
};

export default ItemsList;
