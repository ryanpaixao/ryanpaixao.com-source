import React from 'react';

const BgImage = (props) => {
  let urlIsRoot = props.match.isExact 
    ? {gridRow: '1 / 3'} 
    : {};
  console.log('urlIsRoot', urlIsRoot);

  return (
    <div className='bg-image' style={urlIsRoot}>
      
    </div>
  )
}

export default BgImage;
