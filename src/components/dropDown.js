
import React, { useEffect, useRef, useState } from 'react'

const DropDown =({options,selected,onSelected})=>{

    const [flag,setFlag]=useState(false)
    
    const ref=useRef()
    useEffect(()=>{
        document.body.addEventListener('click',(event)=>{
            if (ref.current&&ref.current.contains(event.target)){
                return
            }
            setFlag(false)
        })
    },[])
  
  
   const renderedOptions=options.map(option=>{

    if (option.value===selected.value){
        return null
    }
       return(

           <div 
            key={option.value}
            className="item" 
            onClick={()=>onSelected(option)}>
               {option.label}
           </div>
       )
   })
    return(
        <div ref={ref} className="ui form">
           <div className="field">
            <label className="label">Select a Color</label>
            <div onClick={()=>setFlag(!flag)} className={`ui selection dropdown ${flag? 'visible active':''} `}>
                 <i className="dropdown icon"></i>
                 <div className="text">{selected.label}</div>
                 <div className={`menu ${flag?'visible transition':''} `}>
                    {renderedOptions}
                 </div>

            </div>
           </div>
        </div>
    )}

export default DropDown