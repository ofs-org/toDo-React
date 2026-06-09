import React from 'react'
import useLocalStorage from 'use-local-storage'
import { delay } from '@/helpers/utils'
import { TASKS_KEY, type Task } from '@/models/task'

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [isLoadingTasks, setIsloadingTasks] = React.useState(true)

  React.useEffect(() => {
    async function fetchTasks() {
      if (isLoadingTasks) {
        await delay(2000)
        setIsloadingTasks(false)
      }

      setTasks(tasksData)
    }

    fetchTasks()
  }, [tasksData, isLoadingTasks])

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTaskCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  }
}
