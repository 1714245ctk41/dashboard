import './index.css';
import { Dashboards } from './settings';
import Items from './Items';

const NavbarVertical = () => {

  return (
    <nav className='aside'>
      <div className='aside_wrap'>
        <div className='menu_container border-radius bg-color-grey p-10'>
        {/* <i class="nasa-menu-item-icon nasa-icon icon-nasa-orange"></i> */}
          {Dashboards.map((item, index) => (
            <Items key={index} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarVertical;
