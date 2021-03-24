import { useEffect, useRef } from "react"
import { drawLink, drawMap, clearCanvas } from "./draw";
import { Direction, PlayerData } from "./lib";

interface CanvasProps {
    playerData: PlayerData
}

export default function Canvas(props: CanvasProps) {
    const canvas = useRef<HTMLCanvasElement>(null);
    canvas.current?.getContext('2d')

    useEffect(() => {
        if (!canvas.current) return;

        const context = canvas.current.getContext('2d');
        if (!context) return;

        drawLink({
            context: context,
            coordinates: props.playerData.position,
            size: {
                heigth: 40,
                width: 40
            },
            direction: props.playerData.direction
        })

        return () => {
            if (!canvas.current) return;
            const context = canvas?.current.getContext('2d');
            if (!context) return;
            clearCanvas(context, props.playerData.position);
        }

    }, [props]);

    useEffect(() => {
        if (canvas.current) {
            const context = canvas.current.getContext('2d');
            if (!context) return;

            context.fillStyle = 'white';
            context.fillRect(0, 0, 1920, 1080);

            drawMap({
                context: context,
                coordinates: {
                    x: 50,
                    y: 10
                },
                size: {
                    heigth: 40,
                    width: 40
                }
            })
        }
    }, []);

    return (
        <div className='canvas-wrap'>
            <canvas width='1920' height='1080' ref={canvas} />
        </div>
    )
}
