import { forwardRef } from "react";

const ScrollViewItem = forwardRef(({ item }, ref) => {
    return (
        <div
            ref={ref}
            className="p-3 bg-white text-black shadow-md rounded-lg border border-gray-200 text-lg font-medium transition-transform duration-200 hover:scale-105 flex items-center space-x-4"
        >
            <img 
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg" 
                alt="Augmented Reality" 
                className="w-16 h-16 object-cover rounded-full border border-gray-300"
            />
            <span>{item.name}</span>
        </div>
    );
});

ScrollViewItem.displayName = "ScrollViewItem";
export default ScrollViewItem;