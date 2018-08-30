export default {
    color: {
        type: 'string',
        pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^rgb\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}\s*\)$|^rgba\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*(0|1|(0?\.\d+))\s*\)$',
    }
}
