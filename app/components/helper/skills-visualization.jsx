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

const COLORS = ['#16f2b3', '#6a5af9', '#f472b6', '#ff8fb3', '#a8d5ff', '#ffa366', '#98d8c8', '#f7b731'];

export default function SkillsVisualization() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ffffff' : '#1f1f1f';
  const gridColor = isDark ? '#ffffff20' : '#00000020';
  const bgColor = isDark ? 'transparent' : '#ffffff';

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`${isDark ? 'bg-[#0a0d1e]' : 'bg-white'} p-3 rounded-lg border ${isDark ? 'border-white/20' : 'border-gray-200'} shadow-lg`}>
          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {payload[0].payload.skill}
          </p>
          <p className={`text-sm ${isDark ? 'text-[#16f2b3]' : 'text-green-600'}`}>
            Proficiency: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={skillsVisualizationData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            dataKey="skill" 
            tick={{ fill: textColor, fontSize: 12 }} 
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis 
            tick={{ fill: textColor, fontSize: 12 }}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: textColor }} />
          <Bar dataKey="proficiency" fill="#16f2b3" radius={[8, 8, 0, 0]} name="Proficiency Level">
            {skillsVisualizationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
