import { useEffect,useState } from "react";
import { listObkect, updatedCount} from "./mainContent";

function ToRead():any{
  const[title,setTitle]=useState<string>('');
  const[author,setAuthor]=useState<string>('');
  const[sid,setId]=useState<Number>(0);
  // const[updationData,setUpdatedData]=useState<listObkect>(Object);
  const[isNeededUpdation,setNeedUpdation]=useState<Boolean>(false);
  const [data, setData] = useState<listObkect[]>(localStorage.getItem('objj')===null?[]:JSON.parse(localStorage.getItem('objj') || ''));
  const [Readeddata, setReadData] = useState<listObkect[]>(localStorage.getItem('MarkAsRead')===null?[]:JSON.parse(localStorage.getItem('MarkAsRead') || ''));

 //let counting_number:any=JSON.parse(localStorage.getItem('counting') || '');
  useEffect(() => {
    const storedData = localStorage.getItem('objj');
    if (storedData) {
      let t=JSON.parse(storedData);
      setData(t);
    }
  }, []);
console.log(data)
useEffect(() => {
  localStorage.setItem('MarkAsRead', JSON.stringify(Readeddata));
}, [Readeddata]);

function handleUpdation(id:String|Number){
  let tobeUpdatedData:any=data.find((el,idx)=>el.id===id);
  // setUpdatedData(tobeUpdatedData);
  if(isNeededUpdation===false){
    setNeedUpdation(true);
  }
  setAuthor(tobeUpdatedData.author);
  setTitle(tobeUpdatedData.title);
  setId(tobeUpdatedData.id);
}

function handleMark(id:String|Number){
  let dataforMarkasRead:any= data.find((elee,idx)=>elee.id===id);
  console.log(dataforMarkasRead)
  setReadData((prev)=>[...prev,dataforMarkasRead]);


  let newData=data.filter((ele,idx)=>ele.id!==id);
  localStorage.setItem('objj',JSON.stringify(newData));
  
   setData(newData);



  
  
}

function handleChange0(e:React.ChangeEvent<HTMLInputElement>){


    setTitle(e.target.value);
  

}
function handleChange1(e:React.ChangeEvent<HTMLInputElement>){
  setAuthor(e.target.value);
}

function handleUpdate(id:String|Number){
   let new_data:any=data.map((ell,index)=>{
    if(ell.id===id){
      ell.title=title;
      ell.author=author;
      console.log("helloo",ell.title+" "+ell.author);
    }
    return ell;
  })
 console.log("helloo",new_data);
   localStorage.setItem('objj',JSON.stringify(new_data));
   setData(new_data)
   setNeedUpdation(false);
}
  return (
    <>
      
      <div className="to_read">
        {data && (
          data.map((ele, idx) => (
            <div className="read_data" key={idx}>
              <>{isNeededUpdation===true && (ele.id===sid)?<input type="text" value={title} onChange={handleChange0}></input>:<p>{ele.title}</p>}</>
              <>{isNeededUpdation===true && (ele.id===sid)?<input type="text" value={author} onChange={handleChange1}></input>:<p>{ele.author}</p>}</>
              <button className="mark_as_read" onClick={()=>handleMark(ele.id)} disabled={isNeededUpdation?true:false}>Mark as read</button>
              <>{(isNeededUpdation===true && (ele.id===sid))?<button className="update" onClick={()=>handleUpdate(ele.id)}>update</button>:
              <button className="update" onClick={()=>handleUpdation(ele.id)}>Edit</button>}</>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ToRead;