import React from 'react';
import './style.module.scss';
import {fetchData} from '../../service/api';

type TransformCardProps = {};

const TransformCard: React.FC<TransformCardProps> = (props) => {
  
  return (
    
    <div className="h-md w-md relative transform-style-3d duration-300">
  
      {/* 正面 */}
      <div className="card touch"></div>

      {/* 反面 */}
      <div onClick={fetchData} className="card bg-yellow-400 transform-rotateY-180"></div>
      
    </div>
  )
};

export default React.memo(TransformCard);