// import React, { useReducer } from "react";

// const UserFrom = () => {

//     // const [nameErrors, setNameErrors] = userState("");

//     // const onNameChange = (event) => {
//     //     setName(event.target.value);
//     //     if(event.target.value.length < 3){
//     //         setNameErrors("Name must be at least 3 characters");
//     //     }else{
//                 // setNameErrors("");
//     //     }
//     // }    

//     // const nameHasError = (Value) =>{
//     //     if(value.length > 2){
//     //         return false;
//     //     }
//     //     return true;
//     // }
    
//     const nameHasError = (Value, length) =>{
//         if(value.length > length){
//             return false;
//         }
//         return true;
//     }

//     const allVailid = (allForm) => {
//         return !lengthError(allForm.name, 3)

//     }

//     return(
//         <div>
//             <form action="">
//                 <input type="text" name="" className="" onChange={onNameChange}/>
//                 {/* <span className="aler-danger">{nameHasError(form.name)?"name must have at least 3 characters": ""}</span> */}
//                 {/* <span className="aler-danger">{nameHasError(form.name) && form.name.length !== 0 && "name must have at least 3 characters"}</span> */}
//                 <span className="alert-danger">{nameHasError(form.name, 2) && form.name.length !== 0 && "name must have at least 3 characters"}</span>
//                 <input type="text" name="" className=""/>
//                 <input type="email" name="" className=""/>
//                 {
//                     allValid(form) ? 

//                 }
//             </form>
//         </div>

//     )
// }
// export default UserFrom;