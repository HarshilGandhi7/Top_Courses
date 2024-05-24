import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from '../Components/Cards'
import Filter  from '../Components/Filter'
import {filterData,apiUrl} from './data'
import './App.css'
import './index.css'

function App() {
  const [Courses,SetCourses]=useState([]);
  const [Showpage,SetShowpage]=useState("All");
  const [LikedCourse,SetLikedCourse]=useState([]);


  useEffect(()=>{
    const GetData=async()=>{
      try{
        let response=await fetch(apiUrl);
        let output=await response.json();
        SetCourses(output.data);
      }catch(e){
        toast("Error in Fetching data");
      }
    }   
    GetData(); 
  },[])

  return (
    <>
    <ToastContainer></ToastContainer>
    <div className="bg-bgDark2 min-h-screen">
      <h1 className="bg-bgDark py-4">
        <div className="text-3xl font-bold text-center text-white">Top Courses</div>
      </h1>
      <Filter filterData={filterData} Showpage={Showpage} SetShowpage={SetShowpage}></Filter>
      <Cards Courses={Courses} Showpage={Showpage} LikedCourse={LikedCourse} SetLikedCourse={SetLikedCourse}></Cards>    
    </div>
    </>
  )
}

export default App
