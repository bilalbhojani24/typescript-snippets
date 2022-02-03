export {};
/*
?  Type assertion (The "as" keyword)
- Here, document.getElemenetById could return HTMLElement or HTMLCanvasElement.
- We need to assert the type to HTMLCanvasElement because TS doesn't know.
- Type assertions are also cleared when complied to JS
*/

const myCanvas = document.getElementById("my-canvas") as HTMLCanvasElement;
