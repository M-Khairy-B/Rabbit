# React + TypeScript + Vite Order Table

## Project Description

This project is a React + TypeScript application that displays an order table with filtering functionality and responsive design. It is built to manage and display orders with fields like Order ID, Customer Name, Order Status, Order Items, and Created At timestamp. The application is designed to be user-friendly and visually appealing on all devices.

## Features

1. **Order Table:**

   - Displays a list of orders with the following fields:
     - **Order ID**
     - **Customer Name**
     - **Order Status:** One of the following statuses - "New," "Picking," "Delivering," or "Delivered."
     - **Order Items:** A list of items in the order (e.g., "Item 1, Item 2").
     - **Created At:** Timestamp indicating when the order was created.

2. **Filter Functionality:**

   - A dropdown or selector allows filtering the table based on the order status.
   - Options in the dropdown include specific statuses (e.g., "New") and an option to show all orders.

3. **Responsive Design:**

   - Fully responsive layout to ensure the table looks great on both desktop and mobile devices.
   - Clean and modern design with styled headers, row hover effects, and proper spacing.

4. **Static Data Source:**
   - The orders are sourced from a static array of objects for simplicity and demonstration purposes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/M-Khairy-B/Rabbit.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Rabbit
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. **View Orders:**

   - The application will display a table of orders upon loading.

2. **Filter Orders:**

   - Use the dropdown to filter orders by their status.
   - Select "All" to view all orders.

3. **Responsive Design:**
   - Access the application on desktop or mobile devices for an optimized user experience.

```

## Technologies Used

- **React:** For building the user interface.
- **TypeScript:** To provide type safety and improve code quality.
- **CSS:** For responsive and modern design with beautiful colors.

## Future Improvements

- Add integration with a backend API for dynamic data.
- Implement sorting functionality for each column.
- Add unit tests to ensure functionality and reliability.
```
