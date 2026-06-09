import Container from '@/components/core/container'
//import TaskInput from '@/components/core/task-input'
import TaskList from '@/components/core/task-list'
import TaskSummary from '@/components/core/task-summary'

const PageHome = () => {
  return (
    <Container>
      <div className="m-4">
        <TaskSummary />
        <TaskList />
      </div>
    </Container>
  )
}

export default PageHome
