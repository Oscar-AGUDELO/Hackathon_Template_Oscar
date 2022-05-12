import React from "react";
//import axios from "axios";
import handleClick from "../pages/Home"




function Button({handleClick}) {
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
           <button type="button" onClick={handleClick}>
          {<i class="fa-solid fa-play"></i>}

        </button>
    </div>
  );
}

export default Button;
