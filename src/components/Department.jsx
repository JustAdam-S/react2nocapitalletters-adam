const Department = (props) =>{

    return (
         <>
          <h1> Department Details </h1>
           <p> Dept Name: { props.department} </p>
           <p> Doctor: { props.doctor} </p>
           <p> Doctor: { props.nurse} </p>
         </>
 );
}

export default Department;