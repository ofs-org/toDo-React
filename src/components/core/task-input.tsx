import PlusIcon from '@/assets/plus.svg?react';
import Button from '@/components/button';
import InputText from '@/components/input-text';
const TaskInput = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-6 left-1/2 -translate-x-1/2 items-center justify-center gap-2">
        <InputText placeholder="Adicione uma nova tarefa" />
        <Button className="hover:bg-blue-dark  flex items-center transition-all">
          <span>Criar</span>
          <PlusIcon className="fill-base-100" />
        </Button>
      </div>
    </div>
  );
};

export default TaskInput;
