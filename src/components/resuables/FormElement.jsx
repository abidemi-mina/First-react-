import React from "react";

function FormElement({type,id,name,className,placeholder,value, onChange}){
    return(
        <div>
            <input type={type} id={id} className={className} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}
export default FormElement;