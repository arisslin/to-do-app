import { ToDo } from '../../types/index';
import createToDo from './subComponents/toDo/toDo';
import './toDoOverview.css';

function createToDoOverview(toDos: ToDo[]): HTMLFieldSetElement | undefined {
  const legend = document.createElement('legend');

  legend.innerText = 'To dos:';

  const fieldSet = document.createElement('fieldset');

  fieldSet.className = 'to-do-overview';
  fieldSet.id = toDoOverviewId;
  fieldSet.appendChild(legend);
  toDos.forEach((toDo) => {
    const toDoElement = createToDo(toDo);

    fieldSet.appendChild(toDoElement);
  });

  return fieldSet;
}

export const toDoOverviewId = 'to-do-overview';

export default createToDoOverview;
