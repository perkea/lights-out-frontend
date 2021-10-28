import {React, useState} from "react";

// const Ratings = () => {
//   const [rating, setRating] = useState(0);
//   const[hover, setHover] = useState(0);
//   return (
//     <div className="star-rating">
//       {[...Array(5)].map((star, index) => {
//         index ++;
//         return (
//           <button
//             type="button"
//             key={index}
//             className={index <= (hover || rating) ? "on" : "off"}
//             onClick={() => setRating(index)}
//             onMouseEnter={() => setHover(index)}
//             onMouseLeave={() => setHover(rating)}
//           >
//             <span className="star">&#9733;</span>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

const Ratings = ({skills})=>{
return (
<textarea name="" id="users_review" cols="30" rows="10">
{reviews.map((review, index)=>{
<Review key = {index} review = {review}/>
})}

</textarea>

)
}

export default Ratings;