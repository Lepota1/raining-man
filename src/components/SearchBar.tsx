import React, { useState, useRef } from "react";

import type { DataType } from "../utils";

export const SearchBar: React.FC<{ data: DataType[] }> = ({
  data,
}): JSX.Element => {
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [wordEntered, setWordEntered] = useState<string>("");

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  window.addEventListener("load", () => inputRef.current?.focus());

  const handleFilter = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value;
    setWordEntered(searchWord);

    const newFilter: DataType[] = data.filter(({ city }): boolean =>
      city.toLowerCase().startsWith(searchWord.toLowerCase())
    );

    if (!searchWord) return setFilteredData([]);
    setFilteredData(newFilter);
  };

  const clearInput = (): void => {
    setFilteredData([]);
    setWordEntered("");
    inputRef.current?.focus();
  };

  const onSerch = (serchTerm: string) => {
    setWordEntered(serchTerm);

    const newFilter: DataType[] = data.filter(({ city }): boolean =>
      city.toLowerCase().startsWith(serchTerm.toLowerCase())
    );

    if (!serchTerm) return setFilteredData([]);
    setFilteredData(newFilter);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form className="flex items-center justify-center w-full">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-1/2 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            value={wordEntered}
            onChange={handleFilter}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter city name"
            ref={inputRef}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            console.log(wordEntered);
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      {filteredData.length !== 0 && filteredData[0].city !== wordEntered && (
        <div className="w-80 h-full bg-white  rounded-xl mt-2 overflow-hidden overflow-y-auto scrollbar-hide border-black border-2 ">
          {filteredData.slice(0, 4).map(({ city }, key) => (
            <div
              className="w-full h-14 flex items-center text-black pl-3 hover:bg-gray-300  "
              key={key}
              onClick={() => onSerch(city)}
              onChange={handleFilter}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
