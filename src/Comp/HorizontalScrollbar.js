import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
// import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import ExerciseCart from './ExerciseCart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart,isBodyParts}) => {
  return (
      <div className='horscroll' style={{ display: 'flex', overflowX: 'auto' }}>
        {data.map((item) => (
          <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
            {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          : <ExerciseCart exercise={item} />
          }
          </Box>
        ))}
      </div>
  );
};

export default HorizontalScrollbar;
