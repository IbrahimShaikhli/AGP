
'use client';

import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader


const governmentalProjects = [
  { id: 1, image: '/Ministry of public works – South Surra.jpg', name: 'Ministry of public works', description: 'South Surra – Kuwait' },
  { id: 2, image: '/MEW.jpg', name: 'Ministry of electricity and water', description: 'Kuwait' },
  { id: 3, image: '/Interior.jpg', name: 'Ministry of Interior', description: 'Subhan – Kuwait' },
  { id: 4, image: '/', name: 'College of legalization', description: 'Kuwait University – Kuwait' },
  { id: 5, image: '/HealthCenter.jpg', name: 'Medical science center', description: 'Kuwait University – Kuwait' },
  { id: 6, image: '/embassy.jpg', name: 'Djibouti embassy', description: '5th settlement – Egypt' },
];

const commercialProjects = [
  { id: 1, image: '/centric.jpg', name: 'Centric Business District', description: '5th settlement, Cairo – Egypt' },
  { id: 2, image: '/cityplaza.jpg', name: 'City Plaza mall', description: 'Suez – Egypt' },
  { id: 3, image: '/sheraton.jpg', name: 'Sheraton Hotel', description: 'Kuwait' },
  { id: 4, image: '/marina.jpg', name: 'Marina mall', description: 'Salmiya – Kuwait' },
  { id: 5, image: '/', name: 'Sea front', description: 'Fahaheel – Kuwait' },
  { id: 6, image: '/manshar.png', name: 'Al-Manshar complex', description: 'Fahaheel – Kuwait' },
  { id: 7, image: '/Rotana Hotel.jpg', name: 'Rotana Hotel', description: 'Fahaheel – Kuwait' },
  { id: 8, image: '/fanar.jpg', name: 'Al Fanar complex', description: 'Salmiya – Kuwait' },
  { id: 9, image: '/', name: 'Souk Al Manakh', description: 'Kuwait city – Kuwait' },
  { id: 10, image: '/ACK.jpg', name: 'Australian college of Kuwait', description: 'Kuwait' },
  { id: 11, image: '/CBK.jpg', name: 'Commercial bank of Kuwait', description: 'Kuwait' },
  { id: 12, image: '/theviewmall.jpg', name: 'The View Mall', description: '5th District, Cairo – Egypt' },
  { id: 13, image: ['/ecity1.jpg', '/ecity2.jpg'], name: 'E-City Mall', description: '5th District, Cairo – Egypt' },
  { id: 14, image: ['/egate.jpg', '/egate2.jpg', '/egate3.jpg', '/egate4.jpg', '/egate5.jpg', '/egate6.jpg'], name: 'E-Gate Mall', description: 'the new adminstrative capital of egypt ' },
];

const residentialProjects = [
  { id: 1, image: '/degla.jpg', name: '4 towers in Degla, Cairo', description: 'Egypt' },
  { id: 3, image: '/', name: 'Palaces of Gaafar family', description: 'Kuwait' },
  { id: 4, image: '/khorafi.jpg', name: 'EL Khorafy Villa', description: 'Kuwait' },
  { id: 5, image: '/', name: 'Dar Salwa palace', description: 'Kuwait' },
  { id: 6, image: '/', name: 'Anwar Al-Bisher house', description: 'Kuwait' },
  { id: 7, image: '/', name: 'Mohamed Al-Ghanim private villas', description: 'Kuwait' },
  { id: 8, image: '/', name: 'Mohamed Al Radwan villa', description: 'Bidaa – Kuwait' },
  { id: 9, image: '/', name: 'Hamad Al Wazzan Chalets', description: 'Kuwait' },
  { id: 10, image: '/', name: 'Ezzat Jaafar residential complex', description: 'Egypt' },
  { id: 10, image: '/', name: ' Al-Hasawi palace', description: 'Kuwati' },


]
// residential, hospital, and mosque projects


const ProjectCard = ({ project }) => {
  if (Array.isArray(project.image)) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden relative mb-4">
        <Carousel showThumbs={false}>
          {project.image.map((img, index) => (
            <div key={index} className='w-full h-full'>
              <Image src={img} alt={`${project.name} image ${index + 1}`} width={1980} height={1080} className="object-cover h-96 w-full" />
            </div>
          ))}
        </Carousel>
        <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 hover:bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold">{project.name}</h2>
            <p className="text-white">{project.description}</p>
          </div>
        </div>
      </div>
    );
  } else if (project.image !== "/") {
    return (
      <div className="card bg-white shadow-md rounded-lg overflow-hidden relative mb-4">
        <Image src={project.image} alt={project.name} width={1980} height={1080} className="object-cover h-full w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 hover:bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold">{project.name}</h2>
            <p className="text-white">{project.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card bg-white shadow-md rounded-lg overflow-hidden relative mb-4">
        <div className="p-4">
          <h2 className="text-black text-2xl font-bold">{project.name}</h2>
          <p className="text-black">{project.description}</p>
        </div>
      </div>
    );
  }
};


const PortfolioSection = ({ title, projectsWithImages, projectsWithoutImages }) => {
  return (
    <section className="mb-10">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projectsWithImages.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-4">
        <h2 className="lg:text-2xl text-xl font-bold mb-2 text-blue-950">Other {title} Projects</h2>
        <div className="grid lg:grid-cols-4 gap-4">
          {projectsWithoutImages.map((project) => (
            <div key={project.id} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="lg:text-xl font-semibold text-blue-950">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>



    </section>
  );
};

const PortfolioLibrary = () => {
  const governmentalProjectsWithImages = governmentalProjects.filter(project => project.image !== "/");
  const governmentalProjectsWithoutImages = governmentalProjects.filter(project => project.image === "/");

  const commercialProjectsWithImages = commercialProjects.filter(project => project.image !== "/");
  const commercialProjectsWithoutImages = commercialProjects.filter(project => project.image === "/");

  const residentialProjectsWithImages = residentialProjects.filter(project => project.image !== "/");
  const residentialProjectsWithoutImages = residentialProjects.filter(project => project.image === "/");

  return (
    <div className=' min-h-screen'>
      <header className="text-center py-10 bg-gray-50 text-blue-950">
        <div className='container mx-auto flex flex-col items-center'> {/* Updated line */}
          <Link href="/" className='text-2xl flex items-center font-semibold'>
            <FaArrowLeft className="mr-2" />
            Home
          </Link>
          <h1 className="text-5xl font-bold">Project Library</h1>
        </div>
      </header>


      <div className="container mx-auto py-8">
        <PortfolioSection title="Governmental" projectsWithImages={governmentalProjectsWithImages} projectsWithoutImages={governmentalProjectsWithoutImages} />
        <PortfolioSection title="Commercial" projectsWithImages={commercialProjectsWithImages} projectsWithoutImages={commercialProjectsWithoutImages} />
        <PortfolioSection title="Residential" projectsWithImages={residentialProjectsWithImages} projectsWithoutImages={residentialProjectsWithoutImages} />
        {/* Add the rest of the sections here */}
      </div>
    </div>
  );
};

export default PortfolioLibrary;