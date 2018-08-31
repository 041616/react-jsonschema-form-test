function rgbaToHex (r, g, b, a = 1) {
    return `#${("0" + parseInt(r,10).toString(16)).slice(-2)}${("0" + parseInt(g,10).toString(16)).slice(-2)}${("0" + parseInt(b,10).toString(16)).slice(-2)}${(a * 255).toString(16).substring(0,2)}`;
}

export { rgbaToHex };
