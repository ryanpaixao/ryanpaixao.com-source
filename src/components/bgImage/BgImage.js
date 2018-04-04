import React from 'react';

const BgImage = (props) => {
  let urlIsRoot = props.match.isExact 
    ? {gridRow: '1 / 3'} 
    : {};

  return (
    <div className='bg-image' style={urlIsRoot} />
  )
}

export default BgImage;
