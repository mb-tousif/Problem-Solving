// Write a programme to generate five digit OPT in JavaScript? 
// Answer:
const generateOTP = () => {
    // Declare a string variable which stores all string
    let string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';
    for (let i = 0; i < 5; i++) {
        OTP += string[Math.floor(Math.random() * string.length)];
    }
    return OTP;
}
generateOTP()