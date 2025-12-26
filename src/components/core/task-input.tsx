import PlusIcon from '@/assets/plus.svg?react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import Button from '../button';
import InputText from '../input-text';

const TaskInput = () => {
  const [myTask, setMyTask] = useState<string[]>([]);
  const [taskOnChange, setTaskOnChange] = useState('');
  const isNewComment = taskOnChange.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setMyTask([...myTask, taskOnChange]);
    setTaskOnChange('');
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setTaskOnChange(event?.target.value);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask}>
        <div className="flex relative -top-6 left-1/2 -translate-x-1/2 items-center justify-center gap-2">
          <InputText
            className="w-full"
            required
            value={taskOnChange}
            onChange={handleNewTask}
            placeholder="Adicione uma nova tarefa"
            name="comment"
          />
          <Button
            disabled={isNewComment}
            type="submit"
            className="hover:bg-blue-dark     flex items-center transition-all"
          >
            <span>Criar</span>
            <PlusIcon className="fill-base-100 ml-2" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default TaskInput;
