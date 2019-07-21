import React from "react";
import { Image } from 'semantic-ui-react'

const ImageBordered = ({img}) => (
  <Image src={img} size='medium' circular />
)

export default ImageBordered


// export default function Image({ img, title }) {
//   return (
//     <div className="img-container">
//       <img alt={title} className="img" src={img} />
//     </div>
//   );
// }
