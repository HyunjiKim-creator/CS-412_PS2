function* generator(sentence) {
    const words = sentence.split(' ');
    for (let word of words) {
        yield word;
    }
}

const sentence = "All I know is something like a bird within her sang";
const gen = generator(sentence);

const printWords = (gen) => {
    for (let word of gen){
        console.log(word);
    }
};

printWords(gen);
