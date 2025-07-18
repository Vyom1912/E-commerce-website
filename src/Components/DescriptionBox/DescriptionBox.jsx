import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          maiores quaerat. Quam minima consequatur neque esse earum harum,
          quaerat similique laboriosam eius illum nemo voluptas quas pariatur
          beatae dignissimos dolore expedita exercitationem? Nesciunt inventore
          fugiat, totam provident laboriosam cum at!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          blanditiis cumque, sed temporibus aperiam hic iure sunt maxime esse a.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
