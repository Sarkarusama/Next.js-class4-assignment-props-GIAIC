


function Props({name,rollNo,center,city,day}:{name:string,rollNo:number,center:string,city:string,day:string
}) {
    return(
        
        <div className="p-5 color-">
            <div className="bg-sky-200 p-14 pl-6 w-3/12 h-60 ">
            <h1>{`Name: ${name}`}</h1>
            <h1>{`Roll No: ${rollNo}`}</h1>
            <h1>{`City: ${city}`}</h1>
            <h1>{`Center: ${center}`}</h1> 
            <h1>{`Days/Time: ${day} `}</h1>
            </div>  
        </div>
    )
}
export default Props