// biome-ignore assist/source/organizeImports: <>
import PlusIcon from '@/assets/plus.svg?react'
import useTask from '@/hooks/use-task'
import useTasks from '@/hooks/use-tasks'
import { useState } from 'react'
import Button from '../button'
import InputText from '../input-text'
import TaskItem from './task-item'
import type { Task } from '@/models/task'

const TaskList = () => {
  const { tasks, isLoadingTasks } = useTasks()
  const { createTask } = useTask()
  const [taskOnChange, setTaskOnChange] = useState('')
  const isNewComment = taskOnChange.length === 0

  function handleNewTask() {
    createTask(taskOnChange)
  }

  return (
    <>
      <section className="max-w-3xl flex  flex-col mt-8   gap-3 mx-auto">
        <form onSubmit={handleNewTask}>
          <div className="flex items-center justify-center gap-2">
            <InputText
              className="w-full"
              value={taskOnChange}
              onChange={(event) => setTaskOnChange(event.target.value)}
              placeholder="Adicione uma nova tarefa"
            />
            <Button
              disabled={isNewComment}
              type="submit"
              className="hover:bg-blue-dark flex items-center transition-all"
            >
              <span>Criar</span>
              <PlusIcon className="fill-base-100 ml-2" />
            </Button>
          </div>
        </form>
      </section>
      <section className="h-64 overflow-y-auto mt-2 mb-2">
        {!isLoadingTasks &&
          tasks.map((item) => <TaskItem key={item.id} task={item} />)}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  )
}

export default TaskList
