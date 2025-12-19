"use client";

const stats = [
  { name: "Total Revenue", value: "$54,231", change: "+20.1%", icon: "DollarSign" },
  { name: "Subscribers", value: "2,350", change: "+180.1%", icon: "Users" },
  { name: "Sales", value: "12,234", change: "+19%", icon: "ShoppingCart" },
  { name: "Active Now", value: "573", change: "+201", icon: "Activity" },
];

// SVG Icon components
const DollarSignIcon = () => (
  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ActivityIcon = () => (
  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function DashboardPage() {
  // Icon mapping function
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSignIcon />;
      case "Users":
        return <UsersIcon />;
      case "ShoppingCart":
        return <ShoppingCartIcon />;
      case "Activity":
        return <ActivityIcon />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.name}</p>
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                {getIcon(stat.icon)}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {stat.change} from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
            <TrendingUpIcon />
          </div>
          <div className="flex items-center justify-center h-64 rounded-lg bg-gray-50 dark:bg-gray-900">
            <p className="text-gray-500">Chart will be implemented here</p>
          </div>
        </div>

        <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 rounded-xl dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <ActivityIcon />
          </div>
          <div className="space-y-4">
            {[
              { user: "Alex Johnson", action: "placed a new order", time: "2 min ago" },
              { user: "Maria Garcia", action: "updated profile", time: "5 min ago" },
              { user: "David Smith", action: "added new product", time: "10 min ago" },
              { user: "Sarah Miller", action: "commented on post", time: "15 min ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
                <div className="flex items-center justify-center w-8 h-8 mr-3 bg-gray-200 rounded-full dark:bg-gray-700">
                  <span className="text-sm font-medium">
                    {activity.user.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}