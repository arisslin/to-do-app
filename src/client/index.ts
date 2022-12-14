import { fetchGetToDos } from '../common/helpers/fetchHelpers';
import createToDoOverview from '../common/components/toDoOverview/toDoOverview';
import createToDoCreator, {
  appendToDoToOverview,
} from '../common/components/toDoCreator/toDoCreator';

fetchGetToDos()
  .then((toDos) => {
    const mainElement = document.querySelector('main');
    const toDosOverview = toDos ? createToDoOverview(toDos) : undefined;

    toDosOverview && mainElement?.appendChild(toDosOverview);

    const toDoCreator = createToDoCreator(appendToDoToOverview);

    mainElement?.appendChild(toDoCreator);
  })
  .catch((error) => console.error('R', error));
