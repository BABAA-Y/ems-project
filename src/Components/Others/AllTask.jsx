import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
const [userData, setUserData] = useContext(AuthContext);


return (
    <div
    className="p-4 bg-[#1c1c1c]  mt-5 rounded "
    >
    <div className="bg-gray-700 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h4 className="w-1/5">Active Task</h4>
        <h4 className="w-1/5">Completed</h4>
        <h4 className="w-1/5">Failed </h4>
    </div>


    <div id="tasklist"  >
    {userData.map((elem, idx) => {
    return <div key={idx} className="bg-gray-800 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">{elem.firstName}</h2>
        <h3 className="w-1/5 text-blue-600">{elem.taskNumbers.newTask}</h3>
        <h4 className="w-1/5 text-yellow-400">{elem.taskNumbers.active}</h4>
        <h4 className="w-1/5 text-green-600">{elem.taskNumbers.completed}</h4>
        <h4 className="w-1/5 text-red-600">{elem.taskNumbers.failed}</h4>
    </div>;
    })}
    </div>

    
    </div>
  );
};

export default AllTask;
