import { useEffect, useState } from "react";

export function useMouseEvents() {
    const [mouseEvents, setMouseEvents] = useState({
        mouseDown: {
            active: false,
            x: 0,
            y: 0,
        },
        mouseUp: {
            active: false,
            x: 0,
            y: 0,
        },
    });

    useEffect(() => {
        function handleMouseDown(e: any) {
            setMouseEvents({
                mouseDown: {
                    active: true,
                    x: e.clientX,
                    y: e.clientY,
                },
                mouseUp: {
                    active: false,
                    x: 0,
                    y: 0,
                },
            });
        }

        function handleMouseUp(e: any) {
            setMouseEvents({
                mouseDown: {
                    active: false,
                    x: 0,
                    y: 0,
                },
                mouseUp: {
                    active: true,
                    x: e.clientX,
                    y: e.clientY,
                },
            });
        }

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseEvents]);

    return mouseEvents;
}
