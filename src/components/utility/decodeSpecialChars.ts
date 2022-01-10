export const decodeSpecialChars = (string: string) => {
    const hash: { [key: string]: string } = {
        '&quot;': '"',
        '&#039;': "'",
        '&lt;': '<',
        '&gt;': '>',
        '&amp;': '&',
    }
    var regex = new RegExp(Object.keys(hash).join('|'), 'gi');
    let decodedStr = string.replace(regex, function (matched) {
        return hash[matched];
    });
    return decodedStr;
};

