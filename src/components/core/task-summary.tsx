import useTasks from '@/hooks/use-tasks'
import Badge from '../badge'
import Text from '../text'

const TaskSummary = () => {
  const { concludedTaskCount, tasksCount, isLoadingTasks } = useTasks()
  return (
    <div className="flex mt-16 mb-16 justify-between">
      <div className="flex items-center gap-2">
        <Text variant="sm" className="font-bold text-blue" as="p">
          Tarefas Criadas
        </Text>
        <Badge loading={isLoadingTasks}>{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text className="text-purple font-bold" as="p">
          Concluídas
        </Text>
        <Badge loading={isLoadingTasks}>
          {concludedTaskCount} de {tasksCount}
        </Badge>
      </div>
    </div>
  )
}

export default TaskSummary
