const gl : number[][] = [
    [0,5,0],[1,5,0],[2,5,0],
    [0,6,0],[1,6,0],[2,6,0],
    [0,7,0],[1,7,0],[2,7,0]
];

const hgl : number[][] = [
    [0,8,0],[1,8,0],[2,8,0],
    [0,9,0],[1,9,0],[2,9,0],
    [0,10,0],[1,10,0],[2,10,0]
]

const tree : number[][]= [
    [8,7,1],[9,7,1],
    [8,8,1],[9,8,1],
]

const road : number[][] = [
    [16,13,0]
]

export const mapData : Array<number[][]>  = [
    [gl[4],gl[4],gl[5],tree[0],tree[1],gl[0],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[5],tree[2],tree[3],gl[3],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[1],gl[1],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[2],gl[3],gl[4],gl[5],gl[6],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[1],gl[4],gl[4],gl[4],gl[7],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],road[0],gl[4],gl[4],gl[4],gl[8],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],hgl[4],hgl[4],hgl[4],gl[4],gl[4],gl[4],road[0],road[0],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],tree[0],tree[1],gl[4],gl[4],gl[4],gl[4],road[0],road[0],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],tree[2],tree[3],gl[4],gl[4],gl[4],gl[4],road[0],road[0],road[0],road[0],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[0],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[0],gl[1],gl[2],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[3],gl[4],gl[5],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[6],gl[7],gl[8],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
    [gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4],gl[4]],
];