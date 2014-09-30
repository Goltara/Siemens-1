function _formatSeconds(number) {
    var hours = Math.floor(number / 3600);
    var rest = number - (hours * 3600);
    var minutes = Math.floor(rest / 60);
    var seconds = rest - minutes * 60;
    return hours + ':' + minutes + ':' + seconds;
}

console.log(_formatSeconds(5648));

function formatSeconds(number) {
    var hours, rest, minutes, seconds;
    hours = Math.floor(number / 3600);
    rest = number - (hours * 3600);
    minutes = Math.floor(rest / 60);
    seconds = rest - minutes * 60;
    return 'hoisted'  + hours + ':' + minutes + ':' + seconds;
}
console.log(formatSeconds(5648));
