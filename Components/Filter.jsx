import '../src/index.css'

export default function Filter({ filterData,Showpage,SetShowpage}) {
    function PageHandler(title){
        SetShowpage(title);        
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((data)=>(
                    <button key={data.id}
                    className={`text-2xl px-2 py-1 rounded-md font-medium 
                    text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                    ${Showpage === data.title ? 
                    "bg-opacity-60 border-white" :
                    "bg-opacity-40 border-transparent"}
                    `}
                    onClick={()=>PageHandler(data.title)}>{data.title}</button>
                ))
            }
        </div>
    );
}
