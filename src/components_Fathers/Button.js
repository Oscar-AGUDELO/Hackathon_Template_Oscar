import React from "react";
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

  const handleClick = () => {};

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {<i class="fa-solid fa-play"></i>}
      </button>
    </div>
  );
}

export default Button;
