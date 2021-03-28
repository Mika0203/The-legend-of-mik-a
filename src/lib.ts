export interface Coordinates {
    x : number,
    y : number
}

export interface Size {
    width : number,
    heigth : number
}

export interface PlayerData {
    position : Coordinates,
    direction : Direction
}

export enum Direction {
    RIGHT,
    DOWN,
    UP,
    LEFT
}

