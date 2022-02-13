import React, { useState, useEffect } from 'react';

export default function ScreenSize() {
    const [screenSize, setScreenSize] = useState(window.screen.width);
    const getScreenSize =()=>{
        // console.log('I am screen width');
        setScreenSize(window.innerWidth);
    }
    useEffect(() => {
        // console.log('I am inner useefferct screen size');
        window.addEventListener('resize',getScreenSize)
        return () => {
            // console.log('i am clearing screen');
            window.removeEventListener('resize',getScreenSize)
        };
    },[]);

    return (
        <div>
            <h2>Screen Size : {screenSize} px</h2>
        </div>
    );
}
