import {useState, useEffect} from 'react';
import Header from './components/Header';
import CardList from './components/CardList';

export default function App() {
const [users, setUsers] = useState([]);
const [err, setErr] = useState(false);
const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
     try{
       let response = await fetch('https://jsonplaceholder.typicode.com/users');
       let data = await response.json();
       if(!ignore){
         setUsers(data);
       }
     }
     catch(err){
      setErr(true);
     }
      
      
    }

    fetchData();

    return ()=>{
      ignore = true;
    }
  }, []);




   

const filteredArr = users.filter((user)=>{
      return  user.name.trim().toLowerCase().includes(searchText.toLowerCase().trim());
    })
  



  let disPlayData;
  
  if(err){
    disPlayData = <p className='errorMessage'>Fail to load users. Please try again later!</p>
  }
  else if(users.length === 0){
    disPlayData = <p>Loading users....</p>;
  }
  else if(filteredArr.length === 0){
   disPlayData = <p>No users found.</p>
  }
  else{
    disPlayData = <CardList filteredArr = {filteredArr}/>
  }

  

  return (
    <div>

      <Header userLength = {users.length}  onSetSearchText = {setSearchText}/>

      {disPlayData}
  
    </div>
  )
}
