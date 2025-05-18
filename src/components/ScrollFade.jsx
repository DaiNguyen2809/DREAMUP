import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
const ScrollFade = ({ children, className = "" }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(inView);
    }, [inView]);

    const animationClass = visible ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown";

    return (
        <div ref={ref} className={`${animationClass} ${className}`}>
            {children}
        </div>
    );
};

export default ScrollFade;
