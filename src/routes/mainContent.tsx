// interface functionProps{
//     handleclick:()=>void,}

import React, { useState } from "react";
export interface listObkect{
    title:string,
    author:string,
    id:number
}




export let updatedCount:number =0;


function Main():any{

    const[title,setTitle]=useState<string>('');
    const[author,setAuthor]=useState<string>('');
    const[count,setCount]=useState<number>(localStorage.getItem('counting')===null?0:JSON.parse(localStorage.getItem('counting') || ''));
    const[list,setList]=useState<listObkect[]>(localStorage.getItem('objj')===null?[]:JSON.parse(localStorage.getItem('objj') || ''));
    console.log(localStorage.getItem('counting'))
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
       
            setTitle(e.target.value);
        

    }
    function handleAuthor(e:React.ChangeEvent<HTMLInputElement>){
        
            setAuthor(e.target.value);
        
    }

    function handleclick():void {

       if(title==='' && author===''){
        alert('please fill book\'s title and author name');
        return;
       }
       else if(title==='' || author===''){
        alert('please fill book\'s title and author name');
        return;
       }
        setCount(updatedCount+1); // Increment count
      
        updatedCount= count + 1; // Get the updated count
      console.log(updatedCount)
        const obj: listObkect = {
          title: title,
          author: author,
          id: count, // Use the updated count
        };
      
        const updatedList = [...list, obj]; // Get the updated list
      
        setList(updatedList); // Update the list state
      
        // Store the updated list in local storage
        localStorage.setItem('objj', JSON.stringify(updatedList));
        localStorage.setItem('counting', JSON.stringify(updatedCount));
      
        // Clear input fields after adding the book
        setAuthor('');
        setTitle('');
      }
    return(
        <>
        <section>
          <h2>Add Your Books from here!</h2>
            <div className="data_container">
              <input type="text" placeholder="enter book title" value={title} onChange={handleChange}></input>
              <input type="text" placeholder="enter author name" value={author} onChange={handleAuthor}></input>
              <button className="btnSubmit" onClick={handleclick} >ADD</button>
            </div>
        </section>
        </>
    )
}

export default Main;