import type { Task } from "@/types"
import TaskCard from "./TaskCard"
import { statusTranslation } from "@/locales/en"

type TaskListProps = {
  tasks: Task[]
}


const statusStyles : {[key: string] : string} = {
  pending: 'border-t-slate-500',
  on_hold: 'border-t-red-500',
  in_progress: 'border-t-blue-500',
  under_review: 'border-t-amber-500',
  complete: 'border-t-emerald-500'
}

type GroupedTasks = {
  [key: string]: Task[]
}

const initialStatusGroups: GroupedTasks = {
  pending: [],
  on_hold: [],
  in_progress: [],
  under_review: [],
  complete: []
}

export default function TaskList({ tasks }: TaskListProps) {

  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task]
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroups);
  

  return (
    <>
      <h2 className="text-5xl font-black my-10">Tareas</h2>

      <div className='flex gap-5 overflow-x-scroll 2xl:overflow-auto pb-32'>
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div key={status} className='min-w-75 2xl:min-w-0 2xl:w-1/5'>

            <h3 
              className={`capitalize text-xl font-light border-slate-300 bg-white p-3 border-t-8 ${statusStyles[status]}`}>
                {statusTranslation[status]}
              </h3>

            <ul className='mt-5 space-y-5'>
              {tasks.length === 0 ? (
                <li className="text-gray-500 text-center pt-3">No Hay tareas</li>
              ) : (
                tasks.map(task => <TaskCard key={task._id} task={task} />)
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
