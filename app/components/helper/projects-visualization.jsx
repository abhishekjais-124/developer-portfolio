"use client";

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "@/app/context/ThemeContext";

// Project categories distribution
const projectsData = [
  { name: "Full Stack", value: 4, color: "#c9a962" },
  { name: "Backend", value: 12, color: "#e8d5a3" },
  { name: "DevOps", value: 3, color: "#8d6b2f" },
  { name: "Mobile", value: 1, color: "#f6e7b8" },
];

export default function ProjectsVisualization() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? '#f3eee4' : '#1f1f1f';

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className={`${isDark ? 'bg-[#0c0c0d]' : 'bg-white'} p-3 border ${isDark ? 'border-[#c9a962]/25' : 'border-gray-200'} shadow-lg`}>
          <p className={`font-semibold ${isDark ? 'text-[#f3eee4]' : 'text-gray-900'}`}>
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
      <ResponsiveContainer width="100%" height={280} className="mx-auto">
        <PieChart>
          <Pie
            data={projectsData}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={false}
            outerRadius={70}
            innerRadius={0}
            fill="#8884d8"
            dataKey="value"
          >
            {projectsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: textColor, paddingTop: '10px', fontSize: '12px' }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-4">
        <p className={`${isDark ? 'text-white/80' : 'text-gray-700'} text-sm`}>
          Total Projects: <span className={`font-semibold ${isDark ? 'text-[#c9a962]' : 'text-green-600'}`}>20+</span>
        </p>
      </div>
    </div>
  );
}
