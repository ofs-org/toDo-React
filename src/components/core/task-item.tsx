import { cx } from 'class-variance-authority'
import React from 'react'
import CheckIcon from '@/assets/checkIcon.svg?react'
import PencilIcon from '@/assets/pencil.svg?react'
import TrashIcon from '@/assets/trash.svg?react'
import Xicon from '@/assets/x.svg?react'
import useTask from '@/hooks/use-task'
import type { Task } from '@/models/task'
import ButtonIcon from '../button-icon'
import InputCheckBox from '../input-checkbox'
import InputText from '../input-text'
import Text from '../text'
import Card from './card'

interface TaskItemProps {
  task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { updateTask, updateTaskStatus, deleteTask } = useTask()

  const [isEditing, setIsEditing] = React.useState(false)

  const [taskTitle, setTaskTitle] = React.useState(task.title || '')

  function handleEditingTask() {
    setIsEditing(true)
  }
  function handleExitEditingTask() {
    deleteTask(task.id)
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '')
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    updateTask(task.id, { title: taskTitle })
    setIsEditing(false)
  }
  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked
    updateTaskStatus(task.id, checked)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <Card
      className=" bg-base-500 gap-3 mt-2  
     border p-4 border-base-400 h-18 rounded-lg"
    >
      {!isEditing ? (
        <div className="flex items-center flex-1 gap-4">
          <InputCheckBox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx('text-base-100! flex-1', {
              'line-through': task?.concluded,
            })}
            as="p"
          >
            {task?.title}
          </Text>

          <div className="flex gap-2">
            <ButtonIcon onClick={handleEditingTask} icon={PencilIcon} />
            <ButtonIcon
              onClick={handleDeleteTask}
              title="deletar tarefa"
              icon={TrashIcon}
            />
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSaveTask}
          className="flex items-center  flex-1 gap-4"
        >
          <InputText
            value={taskTitle}
            required
            autoFocus
            onChange={handleChangeTaskTitle}
            className="w-full border-none"
          />
          <div className="flex gap-2">
            <ButtonIcon
              type="button"
              title="Deletar tarefa"
              icon={Xicon}
              onClick={handleExitEditingTask}
            />
            <ButtonIcon
              type="submit"
              className="hover:fill-blue"
              title="salvar tarefa"
              icon={CheckIcon}
            />
          </div>
        </form>
      )}
    </Card>
  )
}

export default TaskItem
