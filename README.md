# Clepher Task

This project fetches stock data from the Alpha Vantage API and displays it in a candlestick chart with options for selecting different intervals. You can see live demo [here](https://clepher-task-phi.vercel.app/)

## Steps to Run the Project Locally

1. **Clone the repository**  
   Open your terminal and clone the repository:
   ```bash
   git clone https://github.com/aditya-v22/clepher-task.git
   ```
   Then move into the project directory:
   ```bash
   cd clepher-task
   ```

2. **Install dependencies**  
   Run the following command to install all the necessary packages:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**  
   Create a `.env` file at the root of your project and add your Alpha Vantage API key:
   ```env
   NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY="<your-api-key>"
   ```

4. **Start the development server**  
   Run the following command to start the Next.js development server:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Tech Stack

1. **Next.js 14** (with the new App Directory)
2. **Tailwind CSS** (for styling)
3. **TypeScript** (for static type checking)
4. **ApexCharts** (for data visualization)
5. **Shadcn** (for UI components)
6. **Fetch API** (for making API requests)

## Features

1. **Fetch Stock Data**  
   The project fetches stock data from Alpha Vantage's `TIME_SERIES_INTRADAY` function.

2. **Dynamic Interval Selection**  
   Users can select different time intervals (e.g., 5min, 15min) via a dropdown to display stock data accordingly.

3. **Server-Side Rendering (SSR)**  
   The initial stock data is fetched using Next.js Server Actions to leverage SSR and passed to the client-side components as props.

4. **Loading State Handling**  
   The app gracefully handles loading states while fetching data from the API.

5. **Candlestick Chart**  
   The fetched stock data is visualized using ApexCharts' candlestick chart.
