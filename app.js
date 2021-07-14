import VoiceRSS from "./VoiceRSS.js";
const button = document.getElementById('button');
const audioElement = document.getElementById('audio')
function test() {
    VoiceRSS.speech({
        key: 'ebe27db905e44cbe92e4e55695e1bff1',
        src: 'Hello, world!',
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
test();
export default audioElement;