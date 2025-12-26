import CheckIcon from '@/assets/checkIcon.svg?react';
import PencilIcon from '@/assets/pencil.svg?react';
import TrashIcon from '@/assets/trash.svg?react';
import React from 'react';
import ButtonIcon from '../button-icon';
import InputCheckBox from '../input-checkbox';
import InputText from '../input-text';
import Text from '../text';
import Card from './card';

const TaskItem = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditingTask() {
    setIsEditing(true);
  }
  function handleExitEditingTask() {
    setIsEditing(false);
  }

  return (
    <Card
      className=" bg-base-500 gap-3  flex 
    items-center border p-4 border-base-400 h-18 rounded-lg"
    >
      {!isEditing ? (
        <>
          <InputCheckBox />
          <Text className="text-base-100! flex-1" as="p">
            Comprar Macarrão
          </Text>

          <div className="flex gap-2">
            <ButtonIcon onClick={handleEditingTask} icon={PencilIcon} />
            <ButtonIcon icon={TrashIcon} />
          </div>
        </>
      ) : (
        <>
          <InputText className="w-full border-none" />
          <div className="flex gap-2">
            <ButtonIcon onClick={handleExitEditingTask} icon={CheckIcon} />
            <ButtonIcon icon={TrashIcon} />
          </div>
        </>
      )}
    </Card>
  );
};

export default TaskItem;
