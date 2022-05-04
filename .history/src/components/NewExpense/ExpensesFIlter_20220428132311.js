import React from "react";

const ExpensesFilter = () => {
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="">
      <div className="flex justify-end p-2 mr-5 ">
        <div
          className="border-2  rounded-md border-inherit p-2 mr-2
        bg-gradient-to-r from-blue-900 via-sky-700 to-indigo-900 ..."
        >
          <label className="text-slate-200 mr-2">Filter by year</label>
          <select onChange={dropdownChangeHandler} className="rounded-md">
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
