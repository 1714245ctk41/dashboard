import { useState } from 'react';
import ItemChild from './ItemChild';

const Items = ({ item }) => {
  const [openChild, setOpenChild] = useState(true);

  return (
    <div className='item_block_container'>
      <div
        className='item_block p-10 pointer hover-grey space_between'
        onClick={() => setOpenChild(!openChild)}
      >
        <div>
          {item.icon}
          <span className='ml-4'>{item.title}</span>
        </div>
        {item.children && item.chevronDown}
      </div>
      <div
        className={`menu_child_block overflow-hidden transition ${
          openChild ? 'h-auto' : 'h-0'
        }`}
      >
        {item.children && <ItemChild childrenItems={item.children} />}
      </div>
    </div>
  );
};

export default Items;
