import React from 'react';

export default function Achievements() {
  return (
    <section className="pt-20 bg-gray-50 h-full py-20 w-full text-blue-950">
      <div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-10">
          <div className="md:w-1/3 space-y-2 lg:ml-80 lg:px-0 px-2">
            <div className="flex items-end">
              <h3 className="text-3xl font-bold mr-4 text-blue-950">Our Achievements</h3>
            </div>
            <p className="text-gray-600">
              AGP Consultancy & Project Management is a one-stop-shop for all construction project needs. We are experts
              in maintaining quality project execution and control through world-class project management methods coupled
              with strict and correctional measures.
            </p>
          </div>
          <div className="md:w-1/3 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Square 1 */}
              <div className="bg-white p-4 rounded-md text-center shadow-md">
                <div className="text-2xl font-bold text-blue-950">75+</div>
                <div>Projects</div>
              </div>
              {/* Square 2 */}
              <div className="bg-white p-4 rounded-md text-center shadow-md">
                <div className="text-2xl font-bold text-blue-950">50</div>
                <div>Clients</div>
              </div>
              {/* Square 3 */}
              <div className="bg-white p-4 rounded-md text-center shadow-md">
                <div className="text-2xl font-bold text-blue-950">35</div>
                <div>Members</div>
              </div>
              {/* Square 4 */}
              <div className="bg-white p-4 rounded-md text-center shadow-md">
                <div className="text-2xl font-bold text-blue-950">30</div>
                <div>Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
