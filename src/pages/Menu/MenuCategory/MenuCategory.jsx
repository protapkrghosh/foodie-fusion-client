import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import ChefService from '../../../components/ChefService/ChefService';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, content, sectionBg }) => {
  
  return (
    <div className='mt-14'>
      {title && <ChefService sectionBg={sectionBg} title={title} content={content} />}

      <div className='my-16'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            items.map(item => <MenuItems
              key={item._id}
              item={item}
            ></MenuItems>)
          }
        </div>

        <div className="flex justify-center mt-2">
          <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 text-black mt-8 uppercase">Order your favorite food</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;