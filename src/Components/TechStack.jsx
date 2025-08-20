import React from 'react';

// Import i të gjitha ikonave
import jsIcon from '/images/js.webp';
import cIcon from '/images/c.png';
import pythonIcon from '/images/python.png';
import reactIcon from '/images/React.webp';
import tailwindIcon from '/images/tailwind.png';
import bootstrapIcon from '/images/bootstrap.webp';
import laravelIcon from '/images/laravel.png';
import aspnetIcon from '/images/logonet.png';
import phpIcon from '/images/php.png';
import mysqlIcon from '/images/mysql.png';
import sqlIcon from '/images/sql.png';

const TechStack = () => {
  const technologies = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: jsIcon, experience: '2+ years' },
        { name: 'C#', icon: cIcon, experience: '3+ years' },
        { name: 'Python', icon: pythonIcon, experience: '1+ years' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'JavaScript', icon: jsIcon, experience: '2+ years' },
        { name: 'React', icon: reactIcon, experience: '2+ years' },
        { name: 'Tailwind CSS', icon: tailwindIcon, experience: '3+ years' },
        { name: 'Bootstrap', icon: bootstrapIcon, experience: '3+ years' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Laravel', icon: laravelIcon, experience: '2+ years' },
        { name: 'ASP.NET', icon: aspnetIcon, experience: '3+ years' },
        { name: 'PHP', icon: phpIcon, experience: '2+ years' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: mysqlIcon, experience: '2+ years' },
        { name: 'SQL Server', icon: sqlIcon, experience: '1+ years' },
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Full Stack Development Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mastery across the entire development stack with proven technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-[url(/images/abc.jpg)] bg-center rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{tech.category}</h3>
                
                <div className="space-y-4">
                  {tech.items.map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <img 
                        src={item.icon} 
                        alt={item.name} 
                        className="w-8 h-8 mr-3 object-contain"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.experience} experience</p>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
