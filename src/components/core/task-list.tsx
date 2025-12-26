import TaskItem from './task-item';

const TaskList = () => {
  return (
    <section className="max-w-3xl flex flex-col mt-8  gap-3 mx-auto">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </section>
  );
};

export default TaskList;
