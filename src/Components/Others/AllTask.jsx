import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
const authData = useContext(AuthContext);
console.log(authData.employees);

return (
    <div
    className="p-4 bg-[#1c1c1c]  mt-5 rounded h-48"
    >
    <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 bg-red-600 ">Employee Name</h2>
        <h3 className="w-1/5 bg-red-600">New Task</h3>
        <h4 className="w-1/5 bg-red-600">Active Task</h4>
        <h4 className="w-1/5 bg-red-600">Completed</h4>
        <h4 className="w-1/5 bg-red-600">Failed </h4>
    </div>


    <div id="tasklist"  className="h-[80%] overflow-auto ">
    {authData.employees.map((elem) => {
    return <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">{elem.firstName}</h2>
        <h3 className="w-1/5 text-blue-600">task</h3>
        <h4 className="w-1/5 text-yellow-400">Status</h4>
        <h4 className="w-1/5 text-green-600">Status</h4>
        <h4 className="w-1/5 text-red-600">Failed</h4>
    </div>;
    })}
    </div>

    
    </div>
  );
};

export default AllTask;
