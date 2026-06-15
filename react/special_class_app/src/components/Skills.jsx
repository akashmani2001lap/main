
const Skills = ({technologies}) => {

  // console.log(technologies);
  
    
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-3">User Skills</h1>
        {
      technologies.map((e,i)=>(<p key={i} >{e}</p>))
      }
      </div>
    </>
  )
}

export default Skills