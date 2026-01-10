"use client";

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "@/app/context/ThemeContext";

// Project categories distribution
const projectsData = [
  { name: "Full Stack", value: 4, color: "#16f2b3" },
  { name: "Backend", value: 12, color: "#6a5af9" },
  { name: "DevOps", value: 3, color: "#ffa366" },
  { name: "Mobile", value: 1, color: "#a8d5ff" },
];

export default function ProjectsVisualization() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ffffff' : '#1f1f1f';

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className={`${isDark ? 'bg-[#0a0d1e]' : 'bg-white'} p-3 rounded-lg border ${isDark ? 'border-white/20' : 'border-gray-200'} shadow-lg`}>
          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {data.name}
          </p>
          <p style={{ color: data.color }} className="font-semibold">
            {data.value} Projects
          </p>
          <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            {((data.value / projectsData.reduce((sum, d) => sum + d.value, 0)) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={projectsData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {projectsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: textColor, paddingTop: '20px' }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-4">
        <p className={`${isDark ? 'text-white/80' : 'text-gray-700'} text-sm`}>
          Total Projects: <span className={`font-semibold ${isDark ? 'text-[#16f2b3]' : 'text-green-600'}`}>20+</span>
        </p>
      </div>
    </div>
  );
}
