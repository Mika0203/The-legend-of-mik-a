import { Coordinates, Direction, Size } from "./lib";
import link from './imgs/link.png';
import { Context } from "vm";

interface drawProps {
    context : CanvasRenderingContext2D,
    coordinates : Coordinates,
    size : Size
}

interface drawLink {
    context : CanvasRenderingContext2D,
    coordinates : Coordinates,
    size : Size,
    direction : Direction
}

export function drawLink(props : drawLink){
    const img = new Image();
    img.src = link;
    img.onload = () => {
        console.log(props.size.width, props.direction)
        clear(props.context);
        props.context.drawImage(img, 
        1.5 + 17 * props.direction, 38.3, 15, 15, 
        props.coordinates.x * props.size.width, 
        props.coordinates.y * props.size.heigth, 
        props.size.width, 
        props.size.heigth);
    }
}

export function draw(props : drawProps){
    const img = new Image();
    img.src = link;
    img.onload = () => {
        props.context.drawImage(img, 
            1.5, 38.3, 15, 15, 
            0, 0, 30, 30);
    }
}

function clear(context : CanvasRenderingContext2D) {
    context.fillStyle = 'white';
    context.fillRect(0,0, 1920,1080);
}