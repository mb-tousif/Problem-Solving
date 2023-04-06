// Write a function that generate random background color. Apply this function to body background.
// Answer:
const randomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    } 
    return color;
};
// document.body.style.backgroundColor = randomColor();
console.log(randomColor());

// Write a function that generate random color. Apply this function to text color.
// Answer:
const randomTextColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    } 
    return color;
};
// document.body.style.color = randomTextColor();
console.log(randomTextColor());