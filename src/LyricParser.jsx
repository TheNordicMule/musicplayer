import { Lrc } from "lrc-kit";
const lrc = Lrc.parse(`
  [ti:Title]
  [ar:Lyrics artist]
  [00:09.010][00:30.000]i guess you're my creep tonight
`);

export default function parseLyrics() {
    return lrc.toString({ combine: false });
}
