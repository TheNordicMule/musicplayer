import { Lrc } from "lrc-kit";


// return a string that has all the
export default function removeTimestamp(s) {
    const lrc = Lrc.parse(s);
    let str= "";
    lrc.lyrics.forEach(({content}) => {
        str = str + content + "\n";
    });
    return str;
}