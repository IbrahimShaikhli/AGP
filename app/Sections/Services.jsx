import { 
    FaBuilding, FaTasks, FaCogs, FaChartPie, FaProjectDiagram, 
    FaUserTie, FaFileContract, FaHandsHelping, FaSeedling, FaRegBuilding
  } from 'react-icons/fa';
  
  export default function Services() {
    const services = [
      { title: 'Feasibility Study', icon: <FaBuilding /> },
      { title: 'Bidding Process Management', icon: <FaTasks /> },
      { title: 'Design Management', icon: <FaCogs /> },
      { title: 'Construction Management', icon: <FaRegBuilding /> },
      { title: 'Planning and Scheduling', icon: <FaChartPie /> },
      { title: 'Project Monitoring and Control', icon: <FaProjectDiagram /> },
      { title: 'Design and Build', icon: <FaUserTie /> },
      { title: 'Contractor & FFE Procurement', icon: <FaFileContract /> },
      { title: 'Owner Representation', icon: <FaHandsHelping /> },
      { title: 'Sustainability LEED', icon: <FaSeedling /> },
    ];
  
    return (
      <section id="Services" className=" max-w-7xl py-20">
        <div>
        <h1 className="text-4xl font-bold text-center my-8  ">Our Services</h1>
        </div>
        <div className="grid lg:grid-cols-5 gap-0 sm:grid-cols-2 ">
          {services.map((service, index) => (
            <div key={index} className={`${index % 2 === 0 ? 'bg-blue-950 text-white' : ' bg-gray-50 text-blue-950'} rounded overflow-hidden p-6 flex items-center justify-center text-center hover:scale-125 duration-200 scroll-smooth`}>
              <div className="p-3 text-3xl">
                {service.icon}
              </div>
              <h2 className="font-bold lg:text-xl text-md mt-2">{service.title}</h2>
            </div>
          ))}
        </div>
      </section>
    );
  }
  