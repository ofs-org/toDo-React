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
    <main className="flex  flex-col items-center gap-6">
      <Text className="text-center mt-2 text-blue text-xl" as="h1">
        Componentes da Aplicação
      </Text>
      <Text>Ícones e Badge</Text>
      <div className="text-center  space-y-4">
        <div className="flex justify-center items-center gap-2 p-6 rounded-xl border-2 border-dashed border-base-300 ">
          <Icon svg={TrashIcon} className="fill-base-300" />
          <Icon svg={Clipboard} />
          <Icon
            svg={TrashIcon}
            className="fill-danger hover:bg-base-400 border-transparent hover:border-base-400  hover:border hover:rounded-md"
          />
          <Badge variant="primary">0</Badge>
          <Badge variant="primary">2 de 5</Badge>
        </div>
        <Text>Button</Text>
        <div className="flex justify-center items-center gap-2 p-6 rounded-xl border-2 border-dashed border-base-300 ">
          <Button className="hover:bg-blue-dark transition-all">
            <span>Criar</span>
            <PlusIcon className="fill-base-100" />
          </Button>
        </div>
        <Text>Input Text e Checkbox</Text>
        <div className="flex justify-center items-center gap-2 p-6 rounded-xl border-2 border-dashed border-base-300 ">
          <InputCheckBox />
          <InputText placeholder="Adicione uma nova tarefa" />
        </div>
      </div>
    </main>
  );
};
export default PageComponents;
