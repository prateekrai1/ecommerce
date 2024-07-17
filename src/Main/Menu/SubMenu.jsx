import React from 'react';

const SubMenu = ({ title }) => {
    return (
        <div className="text-left text-base py-1 text-gray-600 font-normal hover:text-gray-900 hover:text-orange-600 hover:cursor-pointer px-2 rounded">
            {title}
        </div>
    );
};

export default SubMenu;
