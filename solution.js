const capitalLetters = (str) => {
    let arrayStr = str.split(' ');
    for (let i = 0; i < arrayStr.length; i += 1) {
        if (arrayStr[i] !== '') {
            arrayStr[i] = arrayStr[i][0].toUpperCase() + [...arrayStr[i]].splice(1).join('');
        }
    }
    return arrayStr.join(' ');
};

export default capitalLetters;