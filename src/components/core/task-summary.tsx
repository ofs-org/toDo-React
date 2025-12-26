import Badge from '../badge';
import Text from '../text';

const TaskSummary = () => {
  return (
    <>
      <div className="flex mt-16 justify-between">
        <div className="flex items-center gap-2">
          <Text variant="sm" className="font-bold text-blue" as="p">
            Tarefas Criadas
          </Text>
          <Badge>0</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Text className="text-purple font-bold" as="p">
            Concluídas
          </Text>
          <Badge>2 de 5</Badge>
        </div>
      </div>
    </>
  );
};

export default TaskSummary;
