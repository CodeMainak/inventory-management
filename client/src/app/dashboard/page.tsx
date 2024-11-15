"use client"

import { Package, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSumamry from "./CardExpenseSumamry";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSumamry />
      <StatCard title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"></Package>}
        dateRange="22 - 29 October 2024"
        details={[{
          title: "Customer Growdth",
          amount: "175.00",
          changePercentage: 131,
          IconComponent: TrendingUp
        },
        {
          title: "Expenses",
          amount: "10.00",
          changePercentage: -56,
          IconComponent: TrendingDown
        }
        ]}
      />
      <StatCard title="Dues & Pending Orders"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"></Package>}
        dateRange="22 - 29 October 2024"
        details={[{
          title: "Dues",
          amount: "250.00",
          changePercentage: 131,
          IconComponent: TrendingUp
        },
        {
          title: "Pending Orders",
          amount: "147",
          changePercentage: -56,
          IconComponent: TrendingDown
        }
        ]}
      />
      <StatCard title="Sales and Discount"
        primaryIcon={<Package className="text-blue-600 w-6 h-6"></Package>}
        dateRange="22 - 29 October 2024"
        details={[{
          title: "Sales",
          amount: "1000.00",
          changePercentage: 131,
          IconComponent: TrendingUp
        },
        {
          title: "Discount",
          amount: "200",
          changePercentage: -10,
          IconComponent: TrendingDown
        }
        ]}
      />
    </div>
  )
}

export default Dashboard;