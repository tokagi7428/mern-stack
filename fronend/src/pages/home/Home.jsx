import React ,{useState ,useEffect} from 'react'
import Single from '../single/Single'
import axios from 'axios'
import './Home'
function Home() {
  const [listTodo,setTodoList] = useState([])

  // useEffect(() => {
  //   const getItemList = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:5500/todos");
  //       setTodoList(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   setInterval(getItemList(),300)
  // }, []);
  
  useEffect(() => {
    const getTodoList = () => {
      axios.get('http://localhost:5500/todos')
      .then(res => {
        setTodoList(res.data)
      }).catch(err => console.log(err))
    }
  
    setInterval(getTodoList,100)
  },[])

  return (
    <div className='home'>
      <div className="todo-listItems">
        {listTodo.map((item) => (
          <Single obj={item} key={item._id}/>
        ))}
      </div>
    </div>
  )
}

export default Home