import React, { useState } from 'react';
import * as AppStyles from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/Area';
const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: false }
  ]);
  const handleAddtask = (taskeName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskeName,
      done: false
    });
    setList(newList);
  }
  return (

    <AppStyles.Container>
      <AppStyles.Area>
        <AppStyles.Header>Lista de Tarefas </AppStyles.Header>
        <AddArea onEnter={handleAddtask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </AppStyles.Area>
    </AppStyles.Container>

  );
}

export default App;