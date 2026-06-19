import StudentHeader from '../Components/StudentHeader'
import SchoolStats from '../Components/SchoolStats'
import SchoolList from '../Components/SchoolList'
import StudentFooter from '../Components/StudentFooter'

const Dashboard = () => {

  const schools = [
    {
      id: 1,
      schoolName: "ABC School",
      city: "Chennai",
      principal: {
        name: "Ramesh Kumar",
      },
      sports: [
        "Cricket",
        "Football",
        "Basketball",
      ],
      students: 2500,
      teachers: 120,
    },

    {
      id: 2,
      schoolName: "Green Valley School",
      city: "Coimbatore",
      principal: {
        name: "Priya Sharma",
      },
      sports: [
        "Kabaddi",
        "Volleyball",
        "Athletics",
      ],
      students: 1800,
      teachers: 85,
    },

    {
      id: 3,
      schoolName: "Sunrise School",
      city: "Madurai",
      principal: {
        name: "Arun Prakash",
      },
      sports: [
        "Cricket",
        "Tennis",
        "Swimming",
      ],
      students: 3200,
      teachers: 150,
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
      <StudentHeader />

      <SchoolStats schools={schools} />

      <SchoolList schools={schools} />

      <div className="mt-auto">
        <StudentFooter />
      </div>
    </div>
    </>
  )
}

export default Dashboard