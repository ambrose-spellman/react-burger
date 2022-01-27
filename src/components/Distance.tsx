import React from 'react';

type DistanceProps = {
  w: number | null,
  h: number | null
}
const Distance = ({w, h}:DistanceProps) => {
  return (
      <div className={`w-x${w} h-x${h}`}/>
  );
};

export default Distance;