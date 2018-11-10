import * as lz from "lz-string"

const events = new Array<MouseMovementEvent>()
document.addEventListener('mousemove', (event) => {
    events.push(new MouseMovementEvent(event))
});
const anyW = window as any
anyW.e = events
anyW.cmp = () => lz.compressToBase64(JSON.stringify(events))
anyW.play = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const ctx = canvas.getContext("2d")
    ctx.beginPath();
    for(let i = 0; i < events.length; i++){
        const e = events[i]
        const nextE = events[i + 1]
        window.setTimeout(() => {
            let myE = e
            let myNextE = nextE
            ctx.moveTo(myE.pageX, myE.pageY);
            ctx.lineTo(myNextE.pageX, myNextE.pageY);
            ctx.stroke();
        }, e.timeStamp)
        
        
        
        
    }
}


class MouseMovementEvent{
    constructor(event: MouseEvent){
        // this.clientX = event.clientX
        // this.clientY = event.clientY
        // this.movementX = event.movementX
        // this.movementY = event.movementY
        // this.offsetX = event.offsetX
        // this.offsetY = event.offsetY
        this.pageX = event.pageX
        this.pageY = event.pageY
        // this.screenX = event.screenX
        // this.screenY = event.screenY
        // this.x = event.x
        // this.y = event.y
        this.timeStamp = event.timeStamp
        this.button = event.button
        this.buttons = event.buttons
    }
    clientX: number
    clientY: number
    movementX: number
    movementY: number
    offsetX: number
    offsetY: number
    pageX: number
    pageY: number
    screenX: number
    screenY: number
    x: number
    y: number
    timeStamp: number
    button: number
    buttons: number
}