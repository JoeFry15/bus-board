import readline from "readline";

export async function postcodeRequest() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What is your postcode ', (postcode) => {
        console.log('Your postcode is: ' + postcode);
        rl.close();
    });

}
