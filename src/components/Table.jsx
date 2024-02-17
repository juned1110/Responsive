import React, { useState } from "react";

const Table = () => {
  const items = [
    {
      id: 1,
      title: "Back End Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: 2,
      title: "Front End Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: 3,
      title: "User Interface Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: 4,
      title: "Back End Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: 5,
      title: "Front End Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: 6,
      title: "User Interface Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * 5;
  const indexOfFirstItem = indexOfLastItem - 5;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-[30px] m-4 ">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="flex flex-1 sm:flex-auto items-center justify-center sm:justify-start sm:space-x-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <span className="mb-2 sm:mb-0">Product Summary</span>
              <button className="shadow-xl border border-solid bg-[#FDFEFE] px-2">
                Show
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <select className="w-full bg-[#FDFEFE] border outline-none">
                <option>ALL COLUMNS</option>
                {items &&
                  Object.keys(items[0]).map((heading, index) => (
                    <option className="uppercase" key={index}>
                      {heading}
                    </option>
                  ))}
              </select>
            </div>
            <button className="h-10 w-34 rounded-md bg-[#404CEB] text-[#fff] font-[sans-serif] text-sm font-medium  px-10 leading-none ">
              DISPATCH SELECTED
            </button>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                Previous
              </button>
              {items.length > 5 && (
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  {currentPage} of {Math.ceil(items.length / 5)}
                </span>
              )}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= items.length}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                Next
              </button>
            </nav>
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" name="" id="" />
              </th>
              {items &&
                Object.keys(items[0]).map((heading, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.title}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.department}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.type}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {item.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
