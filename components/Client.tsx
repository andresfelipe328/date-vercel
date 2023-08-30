"use client";

import React, { useState } from "react";

const Client = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateValue = event.target.value;
    const selectedDateList = selectedDateValue.split("-");
    const year = parseInt(selectedDateList[0]);
    const month = parseInt(selectedDateList[1]) - 1;
    const day = parseInt(selectedDateList[2]);

    setDate(new Date(year, month, day));
  };

  return (
    <div className="flex flex-col gap-5 bg-green-200 rounded-md shadow-sm p-4">
      <h1 className="mx-auto">Client Side Component</h1>
      <p>toISOString: {date.toISOString()}</p>
      <p>toISOString [date]: {date.toISOString().slice(0, 10)}</p>
      <p>toDateString: {date.toDateString()}</p>
      <p>toTimeString: {date.toTimeString()}</p>
      <p>toLocaleDateString: {date.toLocaleDateString()}</p>
      <p>toLocaleTimeString: {date.toLocaleTimeString()}</p>

      <input
        type="date"
        value={date.toLocaleDateString("en-CA")}
        onChange={handleDateChange}
        className="font-title group-hover:bg-extra group-hover:text-medium transition-ease"
      />
    </div>
  );
};

export default Client;
