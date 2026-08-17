import React from 'react'

const TaskListNumbers = ({data}) => {
return (
    <div className='flex screen mt-10 justify-between gap-5'>
        <div className='py-9 px-6 rounded-xl bg-red-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium '>NEW TASK</h3>
        </div>

        <div className='py-9 px-6 rounded-xl bg-blue-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium '>Completed TASK</h3>
        </div>
        
        <div className='py-9 px-6 rounded-xl bg-yellow-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium '>Active TASK</h3>
        </div>

        <div className='py-9 px-6 rounded-xl bg-green-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium '>Failed TASK</h3>
        </div>
    </div>
)
}

export default TaskListNumbers