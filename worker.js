
onmessage = (event) => {
    for (let i = 0; i < 5000000000; i++) {}
    const randomNumber = Math.floor (Math.random () * 45) + 1;
    postMessage(randomNumber);

};