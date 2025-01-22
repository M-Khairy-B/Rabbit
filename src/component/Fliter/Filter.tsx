import React, { FC, useState } from "react";
import ArrowIcon from "../ui/icons/ArrowIcon";
import FliterIcon from "../ui/icons/FliterIcon";

interface FliterProps {
  setFilterOption: (option: string) => void;
}

export const Filter: FC<FliterProps> = ({ setFilterOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "All Order"
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setFilterOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
      >
        <FliterIcon />
        <span>{selectedOption}</span>
        <ArrowIcon />
      </button>

      {isOpen && (
        <div className="z-10 absolute w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
          <ul
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRadioButton"
          >
            <li>
              <div
                onClick={() => handleOptionClick("All Order")}
                className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">
                  All Order
                </span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleOptionClick("New")}
                className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">
                  New
                </span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleOptionClick("Delivering")}
                className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">
                  Delivering
                </span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleOptionClick("Completed")}
                className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">
                  Completed
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
