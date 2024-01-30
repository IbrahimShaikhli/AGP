import Image from 'next/image';
import React from 'react';
const valuesList = [
  'We empower entrepreneurs.',
  'We listen, we care, we serve.',
  'We do what we say we’ll do.',
  'We practice open, real communication.',
  'We face challenges with optimism.',
  'We check our egos at the door.',
  'We innovate and constantly improve.',
  'We do the right thing.',
];

// Define the titles for each value.
const titlesList = [
  'Empowerment',
  'Care',
  'Integrity',
  'Communication',
  'Optimism',
  'Humility',
  'Innovation',
  'Ethics',
];

const Values = () => {
return (
  <div className="py-12 relative w-full">
    <div className="container mx-auto text-center relative z-10 lg:w-full">
      <h2 className="text-4xl lg:text-4xl font-bold mb-6 py-6 text-center text-black ">
        Our Values
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {valuesList.map((value, index) => (
          <div key={index} className="flex flex-col mb-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-center text-blue-950">
              {titlesList[index]}
            </h3>
            <p className="text-blue-950 text-center">{value}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default Values;
