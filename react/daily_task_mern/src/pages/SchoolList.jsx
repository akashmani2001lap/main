
import SchoolCard from "../Components/SchoolCourseCard";

const SchoolList = () => {
  const schools = [
    {
      id: 1,
      schoolName: "ABC Matric Higher Secondary School",
      courses: [
        "LKG",
        "UKG",
        "Primary",
        "High School",
        "Higher Secondary",
      ],
    },

    {
      id: 2,
      schoolName: "Green Valley Public School",
      courses: [
        "LKG",
        "UKG",
        "Primary",
        "Middle School",
      ],
    },

    {
      id: 3,
      schoolName: "Sunrise International School",
      courses: [
        "Primary",
        "Middle School",
        "High School",
        "Higher Secondary",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        School Courses Dashboard
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

export default SchoolList;