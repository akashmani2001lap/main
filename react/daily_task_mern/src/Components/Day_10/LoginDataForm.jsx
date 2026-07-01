const LoginDataForm = ({ datas }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Login Users</h1>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {datas.map((e, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-5 border">
              <p className="font-semibold">{e.userName}</p>
              <p className="font-semibold">{e.userPassword}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginDataForm;
