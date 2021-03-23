import { useEffect, useRef } from "react"
import { draw, drawLink } from "./draw";
import { Direction, PlayerData } from "./lib";

interface CanvasProps {
    playerData : PlayerData
}

export default function Canvas(props : CanvasProps) {
    const canvas = useRef<HTMLCanvasElement>(null);

    canvas.current?.getContext('2d')

    useEffect(() => {
        if(canvas.current){
            const context = canvas.current.getContext('2d');
            if(!context) return;

            drawLink({
                context : context,
                coordinates : props.playerData.position,
                size : {
                    heigth : 50,
                    width : 50
                },
                direction : props.playerData.direction
            })
        }

    },[props])

    return (
        <div className='canvas-wrap'>
            <canvas width='1920' height='1080' ref={canvas} />
        </div>
    )
}
