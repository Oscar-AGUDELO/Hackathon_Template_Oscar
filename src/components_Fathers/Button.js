import React, { useState, useEffect } from "react";
//import axios from "axios";




function Button() {
//   const [question, setquestion] = useState([]);

//   useEffect(() => {
//     const API = ``;

//     axios
//       .get(API)
//       .then((res) => res.data)
//       .then((data) => {
//         setquestion(data);
//       })
//       .catch((e) => console.error(e));
//   }, []);

  return (
    <div >
           <button type="button">
          {<i class="fa-solid fa-play"></i>}

        </button>
    </div>
  );
}

export default Button;
