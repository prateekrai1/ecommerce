import React, { useState } from 'react';
import SubMenu from './SubMenu';

const Menu = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border-b border-gray-200">
            <button 
                className="flex justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-orange-600 hover:text-white hover:cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span>{isOpen ? 'ʌ' : 'v'}</span>
            </button>
            {isOpen && (
                <div className="px-4 py-2 bg-gray-50">
                    {items.map((item, index) => (
                        <SubMenu key={index} title={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;
