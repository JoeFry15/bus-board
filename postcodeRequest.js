import PromptSync from "prompt-sync";


export function postcodeRequest(str) {
    const prompt = PromptSync();

    return prompt(str);
}

