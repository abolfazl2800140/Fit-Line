import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const TinyLineChartWithAxes = ({ data }) => {
  return (
    <div className="w-custom-calc h-full px-4 overflow-y-scroll">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <XAxis
            dataKey="label"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10 }}
            width={30}
            axisLine={false}
            tickLine={false}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6" // Tailwind blue-500
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyLineChartWithAxes;
