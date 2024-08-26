import React, { useEffect } from "react";
const spotlight = () => {

    useEffect(() => {
        const handleMouseMove = (e:any) => {
            const spotlight = document.getElementById('spotlight');
            if (!spotlight) return;
            const scrollPosition = window.scrollY;
            spotlight.style.left = e.pageX  + 'px';
            spotlight.style.top = e.pageY -scrollPosition + 'px';
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Clean up event listener on component unmount
        return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); 

    return(
        <div className="h-full w-full fixed z-10">
            <div id="spotlight" 
                style={{
                position: "fixed",
                width: "0px",
                height: "0px",
                borderRadius: "50%",
                pointerEvents: "none",
                mixBlendMode: "soft-light",
                boxShadow: "0 0 325px 200px rgba(255, 255, 255, 0.0.8)"
                }}
                
            ></div>
        </div>
        
    );
}

export default spotlight