import axios from "axios"

export class TranslatorService {
    public static async translate(params: {
        text: string
        from: string
        to: string
    }): Promise<string> {
        const translate = await axios.get(
            `https://translate.googleapis.com/translate_a/single`,
            {
                params: {
                    client: "gtx",
                    sl: params.from,
                    tl: params.to,
                    dt: "t",
                    q: params.text,
                },
            },
        )
        // Check if translation is successful
        if (translate?.data && translate?.data[0]) {
            const translatedTextArray = translate.data[0]
            let fullTranslatedText = ""

            // Iterate through the nested arrays and concatenate the text
            translatedTextArray.forEach((sentence: any) => {
                if (
                    sentence &&
                    sentence[0] &&
                    typeof sentence[0] === "string"
                ) {
                    fullTranslatedText += sentence[0] + " "
                }
            })

            // Trim any extra whitespace at the end
            fullTranslatedText = fullTranslatedText.trim()

            return fullTranslatedText
        } else {
            return "" // or handle error as needed
        }
    }
}