import { useState } from 'react';
import { maxItem } from './settings';

const ItemChild = ({childrenItems}) => {
  const [maxItemShow, setMaxItemShow] = useState(maxItem);
  const showMoreItem = (number) => setMaxItemShow(number);

  return (
    <div>
      {childrenItems.map(
        (child, index) =>
          index <= maxItemShow && (
            <div key={index} className='hover-grey pointer p-10 ml-4'>
              {child.icon}
              <span className='ml-4'>{child.title}</span>
            </div>
          )
      )}
      {childrenItems && maxItemShow < childrenItems.length - 1 && (
        <p
          className='pointer app-link text-align-center'
          onClick={() => showMoreItem(childrenItems.length - 1)}
        >
          Show {childrenItems.length - maxItem - 1} More
        </p>
      )}
      {childrenItems.length > maxItem &&
        maxItemShow + 1 === childrenItems.length && (
          <p
            className='pointer app-link text-align-center'
            onClick={() => showMoreItem(maxItem)}
          >
            Show Less 
          </p>
        )}
    </div>
  )
}

export default ItemChild;