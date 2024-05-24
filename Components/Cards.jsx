import { useEffect, useState } from 'react';
import '../src/index.css'
import Card from './Card';

export default function Cards({Courses,Showpage,LikedCourse,SetLikedCourse}){

    function  GetCourses(){
        if(Showpage==="All"){
            let all=[];
                Object.values(Courses).forEach(totalcourses=>{
                Object.values(totalcourses).forEach(course=>{
                all.push(course);
                })
            })
            return all;
        }else{
            return Courses[Showpage];
        }
    }
    const courses = GetCourses(); 

    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {
                courses.map((cards)=>{
                        return <Card cards={cards} LikedCourse={LikedCourse} SetLikedCourse={SetLikedCourse}></Card>
                    })   
            }
        </div>  
    )   
}