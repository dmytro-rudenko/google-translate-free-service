import { TranslatorService } from "./index"

describe("TranslatorService", () => {
    // translate short text
    it("should translate a short text", async () => {
        const result = await TranslatorService.translate({
            text: "Hello",
            from: "en",
            to: "uk",
        })

        expect(result).toEqual("Привіт")
    })

    // translate long text
    it("should translate a long text", async () => {
        const longText =
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

        const result = await TranslatorService.translate({
            text: longText,
            from: "en",
            to: "uk",
        })

        expect(result).toEqual(
            'Давно встановлено, що читач відволікатиметься на читабельний вміст сторінки, дивлячись на її макет.  Сенс використання Lorem Ipsum полягає в тому, що він має більш-менш нормальний розподіл літер, на відміну від використання «Вміст тут, вміст тут», що робить його схожим на читабельну англійську мову.  Багато пакетів для настільних видавництв і редакторів веб-сторінок тепер використовують Lorem Ipsum як текст моделі за замовчуванням, а пошук за запитом "lorem ipsum" відкриє багато веб-сайтів, які ще знаходяться в зародковому стані.  Протягом багатьох років розвивалися різні версії, іноді випадково, іноді навмисно (введений гумор тощо).',
        )
    })

    // translate short html
    it("should translate short html", async () => {
        const html = "<p>Hello</p>"

        const result = await TranslatorService.translate({
            text: html,
            from: "en",
            to: "uk",
        })

        expect(result).toEqual("<p>Вітаю</p>")
    })

    // translate long html with link, lists, and images
    it("should translate long html with link, lists, and images", async () => {
        const html = `
            <p>
                <a href="https://www.google.com">Link to google page</a>
            </p>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
        `

        const result = await TranslatorService.translate({
            text: html,
            from: "en",
            to: "uk",
        })

        expect(result).toEqual(`<p>
                 <a href="https://www.google.com">Посилання на сторінку Google</a>
             </p>
             <ul>
                 <li>Один</li>
                 <li>Два</li>
                 <li>Три</li>
             </ul>
             <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />`)
    })
})
