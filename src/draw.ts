import { Coordinates, Direction, Size } from "./lib";
import link from './imgs/link.png';
import map from './imgs/map.png';
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
        props.context.drawImage(img, 
        1.5 + 17 * props.direction, 38.3, 15, 15, 
        props.coordinates.x * props.size.width, 
        props.coordinates.y * props.size.heigth, 
        props.size.width, 
        props.size.heigth);
    }
}

export function drawMap(props : drawProps){
    const img = new Image();
    img.src = map;
    img.onload = () => {
        props.context.drawImage(img, 
            1.5, 38.3, 15, 15, 
            0, 0, 30, 30);
    }
}

export function clearCanvas(context : CanvasRenderingContext2D, position : Coordinates) {
    context.fillStyle = 'white';
    context.fillRect(position.x * 40 , position.y * 40, 40, 40);
}