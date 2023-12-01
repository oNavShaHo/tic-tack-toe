import React,{useEffect, useState} from 'react'

import './App.css'
function App() {
 
  const [count, SetCount] = useState(0);
  const [vis,SetVis]=useState(new Array(10).fill(false));
  const [pa,SetPa]=useState(new Array(10).fill(-1));
 
  const [winner,SetW]=useState("No one");

   
 function rest()
 { 
      window.location.reload(true);
 }
 
  function findwinner()
  {
      // alert(pa);
      let w=null;
       if(pa[1]===pa[2]&& pa[2]===pa[3] && pa[1]!==-1 && pa[2]!==-1 && pa[3]!==-1)
       {
        if(pa[1]==='1')
        w="Player 1";
       else 
       w="player 2";
       SetW(w);
         SetVis(()=>{
              let a=new Array(10).fill(true);
              return a;
         });
         SetCount(9);
       }
       else if(pa[4]===pa[5]&& pa[5]===pa[6] && pa[4]!==-1 && pa[5]!==-1 && pa[6]!==-1)
       {
        if(pa[4]==='1')
        w="Player 1";
       else 
       w="player 2";
       SetW(w);
        SetCount(9);
        SetVis(()=>{
          let a=new Array(10).fill(true);
          return a;
     });
      }
       else if(pa[7]===pa[8]&& pa[8]===pa[9] && pa[7]!==-1 && pa[9]!==-1 && pa[8]!==-1)
       {
        if(pa[7]==='1')
         w="Player 1";
        else 
        w="player 2";
        SetW(w);
        SetCount(9);
        SetVis(()=>{
          let a=new Array(10).fill(true);
          return a;
     });
      }
       else if(pa[1]===pa[5]&& pa[5]===pa[9] && pa[1]!==-1 && pa[5]!==-1 && pa[9]!==-1)
       {
        if(pa[1]==='1')
         w="Player 1";
        else 
        w="player 2";
        SetW(w);
        SetCount(9);
        SetVis(()=>{
          let a=new Array(10).fill(true);
          return a;
     });
      }
       else if(pa[3]===pa[5]&& pa[5]===pa[7] && pa[3]!==-1 && pa[5]!==-1 && pa[7]!==-1 )
       {
        if(pa[3]==='1')
         w="Player 1";
        else 
        w="player 2";
        SetW(w);
        SetCount(9);
        SetVis(()=>{
          let a=new Array(10).fill(true);
          return a;
     });
      }
       else if (pa[1]===pa[4]&& pa[4]===pa[7] && pa[1]!==-1 && pa[4]!==-1 && pa[7]!==-1 )
       {
        if(pa[1]==='1')
         w="Player 1";
        else 
        w="player 2";
        SetW(w);
        SetCount(9);
        SetVis(()=>{
          let a=new Array(10).fill(true);
          return a;
     });
      }
       else if(pa[2]===pa[5]&& pa[5]===pa[8] && pa[2]!==-1 && pa[5]!==-1 && pa[8]!==-1 )
       {
        if(pa[2]==='1')
         w="Player 1";
        else 
        w="player 2";
        SetW(w);
       
        SetCount(9);
        SetVis(()=>{
          let a=new Array(10).fill(true);
          return a;
     });
      }
       else if(pa[3]===pa[6]&& pa[6]===pa[9] && pa[3]!==-1 && pa[6]!==-1 && pa[9]!==-1 )
       { 
        if(pa[3]==='1')
         w="Player 1";
        else 
        w="player 2";
        SetW(w);
        SetCount(9);
        SetVis(()=>{
          let a=new Array(10).fill(true);
          return a;
     });
      }

       
  }

useEffect(()=>{
  if(count>4)
  {
    findwinner();
  }
   // eslint-disable-next-line react-hooks/exhaustive-deps
},[count]);
 
  function pres(id)
  {
       if(vis[id]===false)
       {
          let a =document.getElementById(id);
          let text=null;
          if(count%2===0)
          {
               text=document.createTextNode("X");
               SetPa((prev)=>{

                 prev[id]=1;
                 return prev;
               });
          }
          else 
          {
            text=document.createTextNode("O");
            SetPa((prev)=>{

              prev[id]=0;
              return prev;
            });
          }

           a.appendChild(text);
           SetCount(count+1);
           SetVis((prev)=>{
            let  nvis=[...prev];
            nvis[id]=true;
            return nvis;           
          })
       }
  }

 
  return (
    <div className='App'>
            {(count<9)?(<div>Running</div>):(<div>{winner}  is winner   <button onClick={()=>rest()}>@</button></div>)}
         <div className='container'>
        
          {[1,2,3,4,5,6,7,8,9].map((id)=>(
          <div className='box' onClick={()=>pres(id)}><p id={id}></p></div>
          ))}
         </div>
    </div>
  )
}

export default App