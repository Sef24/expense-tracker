import React from "react";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="">
      <div className="flex justify-end p-2 mr-5 ">
        <div
          className="border-2 rounded-md border-inherit p-2 ml-6
        bg-gradient-to-r from-cyan-400 to-blue-500 
        hover:from-pink-500 hover:to-yellow-500 ...
        active:opacity-75 ..."
        >
          <label className="text-slate-200 font-bold mr-2">
            Filter by year
          </label>
          <select
            value={props.selected}
            onChange={dropdownChangeHandler}
            className="rounded-md p-1"
          >
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
