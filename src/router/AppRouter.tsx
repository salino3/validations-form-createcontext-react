import {Routes, Route} from 'react-router-dom';
import {  root, info, form } from '.';
import { Form, InfoUser, List } from '../pages';



export const AppRouter: React.FC = () => {


  return (
    <>
      <Routes>
        <Route path={root} element={<List />} />
        <Route path={form} element={<Form />} />
        <Route path={info} element={<InfoUser />} />
      </Routes>
    </>
  );
}
