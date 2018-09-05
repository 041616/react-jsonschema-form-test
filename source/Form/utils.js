// per ITU-R BT.709
const isColorDark = (r, g, b, a) => (0.2126*r + 0.7152*g + 0.0722*b + 0.5*a) < 140 && a > 0.4;


const isHexColor = (color) => /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);


const isRGBAColor = (color) => /^rgb(s*d{1,3},s*d{1,3},s*d{1,3}s*)$|^rgba(s*d{1,3},s*d{1,3},s*d{1,3},s*(0|1|(0?.d+))s*)$/.test(color);


function extractRGBAFromHex(hex) {
    if (!isHexColor(hex)) throw new Error('[hexToRgba] incorrect Hex value');
    let c = hex.substring(1).split('');
    if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    c = `0x${c.join('')}`;
    return { r: (c>>16)&255, g: (c>>8)&255, b: c&255, a: 1 };
};


export { isColorDark, extractRGBAFromHex, isHexColor, isRGBAColor };
