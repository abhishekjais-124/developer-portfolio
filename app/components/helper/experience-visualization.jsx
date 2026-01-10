"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "@/app/context/ThemeContext";

// Experience data over time (years)
const experienceData = [
  { year: 2021, projects: 2, impact: 25 },
  { year: 2021.5, projects: 4, impact: 40 },
  { year: 2022, projects: 6, impact: 55 },
  { year: 2022.5, projects: 8, impact: 65 },
  { year: 2023, projects: 10, impact: 75 },
  { year: 2023.5, projects: 12, impact: 85 },
  { year: 2024, projects: 14, impact: 90 },
  { year: 2024.5, projects: 15, impact: 95 },
];

export default function ExperienceVisualization() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ffffff' : '#1f1f1f';
  const gridColor = isDark ? '#ffffff20' : '#00000020';

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`${isDark ? 'bg-[#0a0d1e]' : 'bg-white'} p-3 rounded-lg border ${isDark ? 'border-white/20' : 'border-gray-200'} shadow-lg`}>
          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {payload[0].payload.year.toFixed(1)} Years
          </p>
          <p className={`text-sm ${isDark ? 'text-[#6a5af9]' : 'text-indigo-600'}`}>
            Projects: {payload[0].payload.projects}
          </p>
          <p className={`text-sm ${isDark ? 'text-[#16f2b3]' : 'text-green-600'}`}>
            Impact: {payload[0].payload.impact}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full overflow-x-auto">
      <ResponsiveContainer width="100%" height={340} minWidth={300}>
        <AreaChart data={experienceData} margin={{ top: 10, right: 15, left: 5, bottom: 20 }}>
          <defs>
            <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6a5af9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6a5af9" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16f2b3" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#16f2b3" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            dataKey="year" 
            tick={{ fill: textColor, fontSize: 10 }}
            label={{ value: 'Years', position: 'insideBottomRight', offset: -5, fill: textColor, fontSize: 10 }}
          />
          <YAxis 
            tick={{ fill: textColor, fontSize: 10 }}
            width={40}
            label={{ value: 'Count / Impact %', angle: -90, position: 'insideLeft', fill: textColor, fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="projects" 
            stroke="#6a5af9" 
            fillOpacity={1} 
            fill="url(#colorProjects)"
            name="Projects Completed"
          />
          <Area 
            type="monotone" 
            dataKey="impact" 
            stroke="#16f2b3" 
            fillOpacity={1} 
            fill="url(#colorImpact)"
            name="Impact Score"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
