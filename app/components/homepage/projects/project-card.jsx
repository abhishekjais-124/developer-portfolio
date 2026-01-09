// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1228]/90 via-[#0b1024]/90 to-[#0a0d1e]/90 backdrop-blur-sm w-full overflow-hidden group-hover:border-violet-500/30 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-[#16f2b3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl group-hover:bg-violet-500/30 transition-all duration-700" />
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#16f2b3]/20 blur-3xl group-hover:bg-[#16f2b3]/30 transition-all duration-700" />
      
      <div className="flex flex-row relative z-10">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-4 lg:py-5 relative z-10">
        <div className="flex flex-row space-x-1.5 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]"></div>
          <div className="h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]"></div>
          <div className="h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(134,239,172,0.6)]"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-semibold group-hover:text-[#5cf8d1] transition-colors duration-300">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900/50 px-4 lg:px-8 py-5 lg:py-8 relative z-10">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;