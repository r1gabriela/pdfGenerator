const fs = require('fs-extra');
const handlebars = require('handlebars')
const puppeteer = require('puppeteer');


class PdfService {

    async readHtml(filePath) {
        return fs.readFile(filePath, 'utf-8');
    }

    async compileHtml(html) {
        return handlebars.compile(html);
    }

    async toPdf(html, filePath) {
        const content = html;
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(content);
        await page.emulateMediaType('screen');
        await page.pdf({ path: filePath, format: 'A4', margin: '60px' });
        await browser.close();
        process.exit();
    }

}

module.exports = PdfService;
