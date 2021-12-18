import React from 'react';

export default function Image({ image  }) {
  return <img className='single-photo-color' src={image.download_url} alt='' />;
  
  
}