import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, title, subtitle, img}) => {
  return (
    <div className='mt-14'>
      {title && <Cover img={img} title={title} subtitle={subtitle} />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-16">
        {
          items.map(item => <MenuItems
            key={item._id}
            item={item}
          ></MenuItems>)
        }
      </div>
    </div>
  );
};

export default MenuCategory;