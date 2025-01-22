import { FC, useState, useMemo } from "react";
import { CustomeTable } from "../ui/tables/CustomeTable";
import { IOrderModel } from "../models/Order";
import { CustomeSearch } from "../Search/CustomeSearch";
import { Sort } from "../Sort/Sort";
import { Filter } from "../Fliter/Filter";

export const Home: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterOption, setFilterOption] = useState<string | null>("All Order");
  const [sortOption, setSortOption] = useState<string>("");
  const orders: IOrderModel[] = [
    {
      id: 1,
      customerName: "Toka",
      status: "New",
      items: ["Milk", "Bread", "Cheese"],
      createdAt: "2025-01-20 ",
    },
    {
      id: 2,
      customerName: "Sarah",
      status: "Delivering",
      items: ["Rice", "Cooking Oil"],
      createdAt: "2025-01-18 ",
    },
    {
      id: 3,
      customerName: "Mohamed",
      status: "Completed",
      items: ["Sugar", "Tea", "Coffee"],
      createdAt: "2025-01-15 ",
    },
    {
      id: 4,
      customerName: "Hana",
      status: "New",
      items: ["Apples", "Bananas", "Oranges"],
      createdAt: "2025-01-21 ",
    },
    {
      id: 5,
      customerName: "Youssef",
      status: "Delivering",
      items: ["Tomatoes", "Cucumber", "Potatoes"],
      createdAt: "2025-01-19 ",
    },
    {
      id: 6,
      customerName: "Mona",
      status: "Completed",
      items: ["Chicken", "Beef", "Fish"],
      createdAt: "2025-01-14 ",
    },
    {
      id: 7,
      customerName: "Omar",
      status: "New",
      items: ["Soap", "Shampoo", "Toothpaste"],
      createdAt: "2025-01-20 ",
    },
    {
      id: 8,
      customerName: "Fatma",
      status: "Delivering",
      items: ["Lettuce", "Spinach", "Carrots"],
      createdAt: "2025-01-17 ",
    },
    {
      id: 9,
      customerName: "Khaled",
      status: "Completed",
      items: ["Eggs", "Butter", "Yogurt"],
      createdAt: "2025-01-13 ",
    },
    {
      id: 10,
      customerName: "Nada",
      status: "New",
      items: ["Juice", "Soda", "Chips"],
      createdAt: "2025-01-21 ",
    },
    {
      id: 11,
      customerName: "Layla",
      status: "Delivering",
      items: ["Flour", "Pasta", "Cereal"],
      createdAt: "2025-01-18 ",
    },
    {
      id: 12,
      customerName: "Tarek",
      status: "Completed",
      items: ["Lamb", "Onions", "Garlic", "Onions", "Garlic"],
      createdAt: "2025-01-12 ",
    },
  ];

  const filteredOrders = useMemo(() => {
    let filtered = orders.filter((order) => {
      const matchesSearch =
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.toString().includes(searchQuery);

      const matchesFilter =
        filterOption === "All Order" || order.status === filterOption;

      return matchesSearch && matchesFilter;
    });

    if (sortOption === "Last day") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (sortOption === "Last 7 days") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (sortOption === "Last 30 days") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return filtered;
  }, [orders, searchQuery, filterOption, sortOption]);

  return (
    <>
      <section className="py-8">
        <div className="container">
          <div className="flex flex-column sm:flex-row flex-wrap  items-center md:justify-end pb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-y-2 md:gap-x-2  md:gap-y-0 ">
              <div className="flex items-center gap-y-2 gap-x-2   order-2 md:order-3">
                <div className="order-2 md:order-3">
                  <Sort setSortOption={setSortOption} />
                </div>
                <div className="order-1 md:order-4">
                  <Filter setFilterOption={setFilterOption} />
                </div>
              </div>
              <div className="order-1 md:order-4 ">
                <CustomeSearch
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            </div>
          </div>
          <CustomeTable data={filteredOrders} />
        </div>
      </section>
    </>
  );
};
