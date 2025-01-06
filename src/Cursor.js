class Cursor {
    constructor() {
        this.position = {}
        this.prev = {}
        this.motion = {}
        this.movement = {}
        this.wheel = {}
        this.button = {}
        this.init()
    }

    init() {
        addEventListener('mousemove', (e) => this.onMouseMove(e));
        addEventListener('mousedown', (e) => this.onMouseDown(e));
        addEventListener('mouseup', (e) => this.onMouseUp(e));
    }

    onMouseMove() {

    }
}
