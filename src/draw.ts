import { Coordinates, Direction, Size } from "./lib";
import { mapData } from './MapData';
import link from './imgs/link.png';
import map from './imgs/map.png';
interface drawProps {
    context: CanvasRenderingContext2D,
}
interface drawLink {
    context: CanvasRenderingContext2D,
    coordinates: Coordinates,
    size: Size,
    direction: Direction
}

const tilesize = 40;


export function drawLink(props: drawLink) {
    const img = new Image();
    img.src = link;
    img.onload = () => {
        props.context.clearRect(0,0,1920,1080);
        props.context.drawImage(img,
            4 + 24 * (props.direction + 1), 10, 18, 18,
            props.coordinates.x * props.size.width,
            props.coordinates.y * props.size.heigth,
            props.size.width,
            props.size.heigth);
    }
}

export function drawMap(props: drawProps) {
    const img = new Image();
    img.src = map;
    img.onload = () => {
        mapData.forEach((row, rowidx) => {
            row.forEach((col, colidx) => {
                drawTile(props.context, img, col[0], col[1], colidx, rowidx);
            })
        })
    }
}

export function clearCanvas(context: CanvasRenderingContext2D, position: Coordinates) {
    context.fillStyle = 'white';
    context.clearRect(
        position.x * tilesize, position.y * tilesize,
        tilesize,tilesize);
    console.log('clear rect')
}

const drawTile = (
    context: CanvasRenderingContext2D,
    img: HTMLImageElement,
    tx: number, ty: number,
    dx: number, dy: number) => {
    context.drawImage(img, 
        tx * 17 + 1.4, 
        ty * 17 + 1.4, 15, 15, 
        dx * tilesize, dy * tilesize, 
        tilesize, tilesize);
}