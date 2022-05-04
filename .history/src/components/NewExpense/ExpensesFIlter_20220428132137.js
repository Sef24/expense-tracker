import React from "react";

const ExpensesFilter = () => {
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="">
      <div className="flex justify-end p-2 mr-5 ">
        <div className="border-2 rounded-md border-inherit p-2 ">
          <label className="">Filter by year</label>
          <select onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
