import { useEffect,useState } from "react";
import { listObkect} from "./mainContent";


function ToReadCompleted():any{
    const [readedData, setreadData] = useState<listObkect[]>(localStorage.getItem('MarkAsRead')===null?[]:JSON.parse(localStorage.getItem('MarkAsRead') || ''));
    const [dataa, setDataa] = useState<listObkect[]>(localStorage.getItem('objj')===null?[]:JSON.parse(localStorage.getItem('objj') || ''));

 //let counting_number:any=JSON.parse(localStorage.getItem('counting') || '');
  useEffect(() => {
    const storedData = localStorage.getItem('MarkAsRead');
    if (storedData) {
      let t=JSON.parse(storedData);
      setreadData(t);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('objj',JSON.stringify(dataa));
  },[dataa])




  function handleUnread(id:String|Number){
     let unReadedData:any=readedData.find((element,idx)=>element.id===id);
     setDataa([...dataa,unReadedData]);
  
     let newUnread_list=readedData.filter((itm,idx)=>itm.id!==id);
     localStorage.setItem('MarkAsRead',JSON.stringify(newUnread_list))
     setreadData(newUnread_list);

  }

  function handleDelete(id:String|Number){
    let new_list_of_after_delete=readedData.filter((item,idx)=>item.id!==id);
    localStorage.setItem('MarkAsRead',JSON.stringify(new_list_of_after_delete))
     setreadData(new_list_of_after_delete);

  }
    return(
        <>
       <div className="to_read">
        {readedData && (
          readedData.map((ele, idx) => (
            <div className="read_data" key={idx}>
              <p>{ele.title}</p>
              <p>{ele.author}</p>
              <button className="mark_as_unread" onClick={()=>handleUnread(ele.id)}>Mark as unread</button>
              <button className="Delete" onClick={()=>handleDelete(ele.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
        </>
    )
}

export default ToReadCompleted;