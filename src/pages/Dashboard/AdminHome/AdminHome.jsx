import { GiWallet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer } from 'recharts';

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure('/admin-stats');
      return res.data;
    }
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ['chart-data'],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    }
  })

  // Bar Chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // Pie Chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full mx-auto bg-[#F6F6F6] min-h-screen pt-5 md:pt-10 px-5 md:px-14">
      <h2 className="text-2xl font-semibold capitalize">Hi {user?.displayName}, Welcome Back!</h2>

      {/* Stats Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#bb34f5] to-[#edcff0] rounded-md">
          <GiWallet className="text-[32px] mr-3" />
          <div>
            <p className="text-center text-3xl font-bold">${stats.revenue}</p>
            <p className="text-xl">Revenue</p>
          </div>
        </div>

        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#D3A256] to-[#f3ddb6] rounded-md">
          <FaUsers className="text-[32px] mr-3" />
          <div>
            <p className="text-center text-3xl font-bold">{stats.users}</p>
            <p className="text-xl">Customers</p>
          </div>
        </div>

        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#FE4880] to-[#f1c2dd] rounded-md">
          <IoFastFoodSharp className="text-[32px] mr-3" />
          <div>
            <p className="text-center text-3xl font-bold">{stats.products}</p>
            <p className="text-xl">Menu Items</p>
          </div>
        </div>

        <div className="flex justify-center p-4 text-white items-center bg-gradient-to-r from-[#6AAEFF] to-[#b0eef7] rounded-md">
          <CiDeliveryTruck className="text-[37px] mr-3" />
          <div>
            <p className="text-center text-3xl font-bold">{stats.orders}</p>
            <p className="text-xl">Orders</p>
          </div>
        </div>
      </div>

      {/* Bar and Pie chart */}
      <div className="md:flex gap-5 md:gap-x-20 mt-10 bg-white py-2">
        {/* Bar Chart */}
        <div className="w-1/2">
          <BarChart
            width={600}
            height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
              <Pie
                data={chartData}
                cx="60%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
