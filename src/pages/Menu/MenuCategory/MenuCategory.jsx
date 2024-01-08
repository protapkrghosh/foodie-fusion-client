import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import ChefService from '../../../components/ChefService/ChefService';

const MenuCategory = ({ items, title, content, sectionBg }) => {
  
  return (
    <div className='mt-14'>
      {title && <ChefService sectionBg={sectionBg} title={title} content={content} />}
      {/* {title && <Cover img={img} title={title} contents={contents} />} */}

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