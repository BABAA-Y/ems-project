import React from 'react'

const TaskListNumbers = () => {
return (
    <div className='flex screen mt-10 justify-between gap-5'>
        <div className='py-9 px-6 rounded-xl bg-red-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium '>NEW TASK</h3>
        </div>

        <div className='py-9 px-6 rounded-xl bg-blue-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium '>NEW TASK</h3>
        </div>
        
        <div className='py-9 px-6 rounded-xl bg-yellow-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium '>NEW TASK</h3>
        </div>

        <div className='py-9 px-6 rounded-xl bg-green-400 h-40 w-[45%]'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium '>NEW TASK</h3>
        </div>
    </div>
)
}

export default TaskListNumbers