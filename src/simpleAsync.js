async function hello(name) {
    const trimmed = (name ?? "").trim();
    return trimmed ? `Hello, ${trimmed}` : "Hello,";
}

async function double(n) {
    return n * 2;
}

async function average(nums){
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum / nums.length;
}

async function joinWords(words){
    return words.join(" ");
}

async function repeatWord(word, times){
    return word.repeat(times);
}


module.exports = { hello, double, average, joinWords, repeatWord };  