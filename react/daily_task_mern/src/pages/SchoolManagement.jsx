
import SchoolCard from "../Components/SchoolCard";

const SchoolManagement = () => {
  const schools = [
    {
      id: 1,
      schoolName: "ABC Matric Higher Secondary School",
      city: "Chennai",
      principal: {
        name: "Ramesh Kumar",
        experience: 15,
      },
      students: 2500,
      teachers: 120,
    },
    {
      id: 2,
      schoolName: "Green Valley Public School",
      city: "Coimbatore",
      principal: {
        name: "Priya Sharma",
        experience: 12,
      },
      students: 1800,
      teachers: 85,
    },
    {
      id: 3,
      schoolName: "Sunrise International School",
      city: "Madurai",
      principal: {
        name: "Arun Prakash",
        experience: 18,
      },
      students: 3200,
      teachers: 150,
    },
  ];



  

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        School Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <SchoolCard
            key={school.id}
            school={school}
          />
        ))}
      </div>
    </div>
  );
};

export default SchoolManagement;