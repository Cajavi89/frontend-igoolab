import { useEffect,useState } from 'react';
import './App.css';
import { getAllUsersHandler } from './context/actions';
import { useAppState, useAppDispatch} from './context/store'
import User from './components/user'
import Loader from './components/Loader'

function App() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const { users, isLoading } = state;
  const [search, setSearch] = useState(null)

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    getAllUsersHandler(dispatch)
  }, [])
  return (
    <div className='App'>
      <h1>This is our list of users.</h1>
      <form className="w-full max-w-sm mb-6 ml-auto mr-auto">
        <div className="flex items-center border-b border-blue-600 py-2" >
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Matt Glowy"
          aria-label="Full name"
          onChange={handleChange}
          data-cy="user-search-input"
          />
          <button className="flex-shrink-0 bg-blue-700 hover:bg-blue-800  border-blue-700 hover:border-blue-800 text-sm border-4 text-white py-1 px-2 rounded"
           type="submit">
            Search
          </button>
        </div>
      </form>
      {isLoading && <Loader />}
      <ul className='grid grid-cols-2 max-w-3xl ml-auto mr-auto gap-3'>
      { !search
       ? users?.map((item, index )=> <User key={index} props={item}/>)
       : users
       .filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))
       .map((item, index )=><User key={index} props={item}/>)
      }
      </ul>
    </div>
  );
}

export default App;
