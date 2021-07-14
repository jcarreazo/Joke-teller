import VoiceRSS from "./VoiceRSS.js";
const button = document.getElementById('button');
const audioElement = document.getElementById('audio')
var jokeSource;
function test(apikey,word) {
    try {
        VoiceRSS.speech({
            key: apikey,
            src: word,
            hl: 'en-us',
            v: 'Linda',
            r: 0,
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
    } catch (error) {
        console.log(error)
    }
}


// Get jokes fetching from the API

async function getJokes() {
    let joke='';
    const apiURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = data.joke;
        }
        test("ebe27db905e44cbe92e4e55695e1bff1",joke);
    } catch (error) {
        //Catch error
        const e = new Error(error);
        console.log(e);

    }
}
getJokes();

export default audioElement;