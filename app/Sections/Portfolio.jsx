import Image from 'next/image'
import Link from 'next/link';
import { FaRegArrowAltCircleUp } from 'react-icons/fa'

export default function Portfolio() {
  const projects = [
    { name: 'Project 1', location: 'Location 1', image: '/Rotana Hotel.jpg' },
    { name: 'Project 2', location: 'Location 2', image: '/centric.jpg' },
    { name: 'Project 3', location: 'Location 3', image: '/degla.jpg' },
    { name: 'Project 4', location: 'Location 4', image: '/Ministry of public works – South Surra.jpg' }
  ];

  return (
    <section id="Projects" className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-0 m-0">
        {/* Column 1 - Project One */}
        <div className="col-span-1 relative h-100">
          <Image src={projects[0].image} alt={projects[0].name} width="800" height="600" className="absolute h-full rounded-lg object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 hover:bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 hover-content rounded-lg">
            <div className="p-4">
              <h2 className="text-white text-2xl font-bold">{projects[0].name}</h2>
              <p className="text-white">{projects[0].location}</p>
            </div>
          </div>
        </div>


        {/* Column 2 - Project Two, Project Three */}
        <div className="col-span-1 grid grid-rows-2 gap-4">
          {projects.slice(1, 3).map((project, index) => (
            <div key={index} className="relative h-48">
              <Image src={project.image} alt={project.name} width="600" height="100" className="absolute w-full h-full rounded-lg object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 hover:bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 hover-content rounded-lg">
                <div className="p-4">
                  <h2 className="text-white text-2xl font-bold">{project.name}</h2>
                  <p className="text-white">{project.location}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
        {/* Column 3 - Check Our Portfolio, Project Four */}
        <div className="col-span-1 grid grid-rows-2 gap-4">
          {/* Check Our Portfolio */}
          <Link href="/Portfolio">
          <div className="relative h-48 w-[100%]  ">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-950 text-white p-4 rounded-2xl flex items-center justify-center hover:bg-blue-900 duration-300">
              <p className='text-4xl text-center font-medium cursor-pointer lg:text-6xl '>Portfolio</p>
               <FaRegArrowAltCircleUp className="absolute top-4 right-4 transform rotate-45 text-4xl " />
            </div>
          </div>
          </Link>


          {/* Project Four */}
          <div className="relative h-48">
            <Image src={projects[3].image} alt={projects[3].name} width="800" height="100" className="absolute w-full h-full rounded-lg object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 hover:bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 hover-content rounded-lg">
              <div className="p-4">
                <h2 className="text-white text-2xl font-bold">{projects[3].name}</h2>
                <p className="text-white">{projects[3].location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
