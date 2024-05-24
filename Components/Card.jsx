import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react';
import { toast } from 'react-toastify';

// Add the faHeart icon to
library.add(faHeart)

export default function Card({cards,LikedCourse,SetLikedCourse}){
   const image_url=cards.image.url;
   const image_alt=cards.image.alt;
   const title=cards.title;
   const description=cards.description; 
   function GetDesription(){
    if(description.length>=200){
        return (description.slice(0,200)+'...');
    }else{
        return description;
    }
   }
   function LikeHandler(Title){
    if(LikedCourse.includes(Title)){
        toast.error("Remove like")
        const UpdatedLikedCourse=LikedCourse.filter(course=>{course!==Title})
        SetLikedCourse(UpdatedLikedCourse);
    }else{
        toast.success("Add Like");
        LikedCourse.push(Title);
        SetLikedCourse(LikedCourse);
    }
   }
    return (
        <div className='w-[400px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden mx-5 mb-4 relative text-white'>
            <img src={image_url} alt={image_alt} className="w-full h-1/2"/>
            <button className='absolute bottom-[52%] right-3 w-10 h-10 rounded-full flex justify-center items-center bg-slate-300'>
            <FontAwesomeIcon icon={['fas', 'heart']} onClick={()=>{LikeHandler(title)}} className={`${LikedCourse.includes(title)? 'text-red-600':'text-red-300'} text-3xl`}/>
            </button>
            <div className="text-2xl font-bold mb-2 px-2">{title}</div>
            <div className="mb-5 px-2">{GetDesription()}</div>
         </div>  
    ) 
}