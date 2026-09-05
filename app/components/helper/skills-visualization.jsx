"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from "@/app/context/ThemeContext";

// Skills data with proficiency levels
const skillsVisualizationData = [
  { skill: "Python", proficiency: 90, category: "Language" },
  { skill: "Java", proficiency: 85, category: "Language" },
  { skill: "Golang", proficiency: 85, category: "Language" },
  { skill: "AWS", proficiency: 85, category: "Cloud" },
  { skill: "Docker", proficiency: 85, category: "DevOps" },
  { skill: "MySQL", proficiency: 85, category: "Database" },
  { skill: "LLD", proficiency: 90, category: "Design" },
  { skill: "HLD", proficiency: 90, category: "Design" },
];

const COLORS = ['#c9a962', '#e8d5a3', '#8d6b2f', '#f6e7b8', '#b08d4a', '#d4b56a', '#a07c38', '#e0c88a'];

export default function SkillsVisualization() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? '#f3eee4' : '#1f1f1f';
  const gridColor = isDark ? '#ffffff20' : '#00000020';
  const bgColor = isDark ? 'transparent' : '#ffffff';

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`${isDark ? 'bg-[#0c0c0d]' : 'bg-white'} p-3 border ${isDark ? 'border-[#c9a962]/25' : 'border-gray-200'} shadow-lg`}>
          <p className={`font-semibold ${isDark ? 'text-[#f3eee4]' : 'text-gray-900'}`}>
            {payload[0].payload.skill}
          </p>
          <p className={`text-sm ${isDark ? 'text-[#c9a962]' : 'text-green-600'}`}>
            Proficiency: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full overflow-x-auto">
      <ResponsiveContainer width="100%" height={280} minWidth={260} className="sm:h-[420px]">
        <BarChart data={skillsVisualizationData} margin={{ top: 20, right: 15, left: -5, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            dataKey="skill" 
            tick={{ fill: textColor, fontSize: 10 }} 
            angle={-35}
            textAnchor="end"
            height={70}
            interval={0}
          />
          <YAxis 
            tick={{ fill: textColor, fontSize: 10 }}
            domain={[0, 100]}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: textColor }} />
          <Bar dataKey="proficiency" fill="#c9a962" radius={[2, 2, 0, 0]} name="Proficiency Level">
            {skillsVisualizationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
