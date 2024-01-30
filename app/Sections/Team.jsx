import Image from "next/image";

const ourTeam = [
    {name: "Eng.Yousef Mostafa Ahmed", description: "Chief Executive Officer", degree:"Bachelor Of Civil Engineering And Project Management", image:"/chief.jpg"},
    {name: "Eng.Mostafa Ahmed Ahmed", description: "Chief Operating Executive", degree:"Bachelor Of Civil Engineering And Project Management", image:"/chief2.jpg"},
    {name: "Ar.Adham Mostafa Ahmed", description: "General Manager ",degree:"Bachelor Of Science (Hons) Architecture ",  image:"/engr.jpg"},
];

/*adhams full degree Bachelor Of Science (Hons) Architecture And Build Environment and his desc General Manager Architectural Designer*/


export default function Team() {
    return (
        <div className="p-5 mx-auto">
            <h1 className="lg:text-5xl font-bold text-blue-950 text-4xl mb-10 text-center py-20">Our Team</h1>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {ourTeam.map((member, index) => (
                    <div className={`bg-white shadow-lg rounded-lg px-5 py-5 sm:px-10 sm:py-10 flex flex-col items-center transform ${index === 1 ? ' order-first lg:order-none' : ''}`} key={index}>
                        <Image src={member.image} alt={member.name} width={200} height={200} className=" h-full object-cover mb-5 rounded-md" />
                        <h2 className="text-2xl text-blue-950 mb-3 ">{member.name}</h2>
                        <p className="text-gray-800 ">{member.description}</p>
                        <p className="text-gray-700 text-center">{member.degree}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
