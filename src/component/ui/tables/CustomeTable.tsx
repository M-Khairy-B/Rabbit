import React, { FC } from "react";
import { IOrderModel } from "../../models/Order";

interface TableProps {
  data: IOrderModel[];
}

export const CustomeTable: FC<TableProps> = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-[#DCFD51] bg-[#124830] dark:bg-gray-600 dark:text-gray-300 ">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Order
            </th>
            <th scope="col" className="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3">
              Order Status
            </th>
            <th scope="col" className="px-6 py-3">
              Order Items
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black dark:text-white"
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4 font-medium dark:text-white">
                  {order.customerName}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full border ${
                      order.status === "New"
                        ? "text-green-600 bg-green-100 border-green-600"
                        : order.status === "Delivering"
                        ? "text-blue-600 bg-blue-100 border-blue-600"
                        : order.status === "Completed"
                        ? "text-gray-600 bg-gray-100 border-gray-600"
                        : "text-black bg-gray-200 border-gray-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-x-1">
                    {order.items.map((item, index) => (
                      <span
                        key={index}
                        className="border border-[#3D3D3D] p-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">{order.createdAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="px-6 py-4 text-center text-gray-500 dark:text-gray-300"
              >
                No Order Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
