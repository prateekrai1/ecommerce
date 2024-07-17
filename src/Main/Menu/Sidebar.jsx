import React from 'react';
import Menu from './Menu';

const Sidebar = () => {
    return (
        <div className="w-64 h-full shadow-md bg-white">
            <Menu title="New Arrivals" items={['New Products']} />
            <Menu title="Trending Now" items={['The Bestsellers Shop', 'Linen', 'Home Decor']} />
            <Menu title="Offers & Deals" items={['Sale', 'Student Discount']} />
            <Menu title="Gifting" items={['Sale', 'Student Discount']} />
            <Menu title="Shop by Room" items={['Kids Room', 'Bedroom', 'Balcony & Outdoor']} />
            <Menu title="Shop by Product" items={['View All', 'Furniture', 'Lighting','Serving & Dining', 'Decorations','Throws Pillows & Cushions']} />
            <Menu title="Offers & Deals" items={['Meet the Maker', 'Learn More']} />
        </div>
    );
};

export default Sidebar;
