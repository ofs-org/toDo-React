import Container from '@/components/core/container';
import TaskInput from '@/components/core/task-input';
import TaskList from '@/components/core/task-list';
import TaskSummary from '@/components/core/task-summary';

const Home = () => {
  return (
    <div className="px-4">
      <Container>
        <TaskInput />
        <TaskSummary />
        <TaskList />
      </Container>
    </div>
  );
};

export default Home;
