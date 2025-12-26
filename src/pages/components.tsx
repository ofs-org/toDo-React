import ButtonIcon from '@/components/button-icon';

import Card from '@/components/core/card';
import Skeleton from '@/components/skeleton';
import Clipboard from '../assets/clipboard.svg?react';
import PlusIcon from '../assets/plus.svg?react';
import TrashIcon from '../assets/trash.svg?react';
import Badge from '../components/badge';
import Button from '../components/button';
import Icon from '../components/icon';
import InputCheckBox from '../components/input-checkbox';
import InputText from '../components/input-text';
import Text from '../components/text';
const PageComponents = () => {
  return (
    <main className="flex  flex-col items-center gap-3">
      <Text className="text-center mt-2 text-blue text-xl" as="h1">
        Componentes da Aplicação
      </Text>
      <Text>Ícones e Badge</Text>
      <div className="text-center  space-y-4">
        <div className="flex justify-center items-center gap-2 p-6 rounded-xl border-2 border-dashed border-base-300 ">
          <Icon svg={TrashIcon} className="fill-base-300" />
          <Icon svg={Clipboard} />
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon loading icon={TrashIcon} />
          <Badge variant="primary">0</Badge>
          <Badge loading variant="primary">
            0
          </Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading variant="primary">
            2 de 5
          </Badge>
        </div>
        <Text>Button e Skeleton</Text>
        <div className="flex justify-center items-center gap-2 p-6 rounded-xl border-2 border-dashed border-base-300 ">
          <Button icon={PlusIcon}>Criar</Button>
          <Skeleton className="w-2xs h-13" />
        </div>
        <Text>InputCheckBox, InputText, Card</Text>
        <div className="flex flex-col justify-center items-center gap-2 p-6 rounded-xl border-2 border-dashed border-base-300 ">
          <InputCheckBox />
          <InputCheckBox loading />

          <InputText placeholder="Adicione uma nova tarefa" />
          <Card size="md">
            <Text variant="sm" className="text-base-100!">
              Olá Mundo
            </Text>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default PageComponents;
