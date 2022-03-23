import { useEffect } from 'react';
import './App.css';
import { getAllUsersHandler } from './context/actions';
import { useAppState, useAppDispatch} from './context/store'
import User from './components/user'

function App() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const { users } = state;

  useEffect(()=>{
    getAllUsersHandler(dispatch)
  }, [])
  return (
    <div className="App">
      <h1>ESTO ES LA PRUEBITA DE AMOR</h1>
      <ul>
      {users?.map((item, index )=> <li key={index}><User props={item}/></li>)}
      </ul>
    </div>
  );
}

export default App;
