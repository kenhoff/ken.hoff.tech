const puppeteer = require("puppeteer");
const dayjs = require("dayjs");


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${process.cwd()}/resume/resume.html`, {
        waitUntil: "networkidle2"
    });

    await page.pdf({
        path: `build/Ken-Hoff-Resume-${dayjs().format("YYYY-MM-DD")}.pdf`,
        printBackground: true
    });

    await browser.close();
})();
