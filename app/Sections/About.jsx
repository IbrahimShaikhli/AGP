"use client";
import CarouselComponent from "@/app/UI/Components/Carousel";

export default function About() {
    return (
        <section id="About" className="pt-20 bg-gray-50 w-full text-blue-950">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-10">
                <div className="md:w-1/3 space-y-2 lg:ml-80 px-2 lg:px-0">
                  <div className="flex items-end">
                      <h3 className="text-2xl sm:text-xl md:text-3xl font-bold mr-4">Dream, Plan & Build</h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-gray-600">AGP Consultancy & Project Management is a one-stop-shop for all
                      construction project needs. We are experts in maintaining quality project
                      execution and control through world class project management methods
                      coupled with strict and correctional measures. </p>
                  <div className="flex items-end">
                      <h3 className="text-2xl sm:text-xl md:text-3xl font-bold mr-4">Vision - Mission</h3>
                      {/* <div className="h-0.5 w-20 bg-blue-950 mb-2"></div> */}
                  </div>
                  <h3 className="text-xl sm:text-lg md:text-2xl font-semibold text-blue-950"> Vision</h3>
                  <p className="text-sm sm:text-base md:text-gray-600">AGP aspires to become a leading Construction and Project Management firm
                      in the Middle East emphasizing quality of service to its clients through the
                      application of state-of-the-art project management control systems and
                      procedures. While CPM is broadening its market, client satisfaction will
                      always be the basis for our success.. </p>
                  <h3 className="text-xl sm:text-lg md:text-2xl font-semibold text-blue-950"> Mission</h3>
                  <p className="text-sm sm:text-base md:text-gray-600">Operate a efficient, reliable business, offering clients value-added services with a focus on satisfaction. Hire and train qualified staff in the professional delivery of AGP services and culture. AGP provides tailored project management services, from complete portfolio and program management to specific consultancy throughout the project lifecycle.
                  </p>
                </div>
                <div className="md:w-1/3 space-y-4">
                  <CarouselComponent />
                </div>
            </div>
        </section>
    );
  }
  