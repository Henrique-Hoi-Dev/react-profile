/**
 * Gera public/Henrique_Hoinacki_CV.pdf a partir da rota /curriculo.
 * Uso: npm run pdf
 * Requer Google Chrome ou Microsoft Edge instalado (usa puppeteer-core),
 * ou defina PUPPETEER_EXECUTABLE_PATH apontando para um Chromium.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = path.join(root, 'public', 'Henrique_Hoinacki_CV.pdf');
const PORT = 5199;

function findBrowser() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(
      process.env.LOCALAPPDATA ?? '',
      'Google\\Chrome\\Application\\chrome.exe'
    ),
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);

  const found = candidates.find((p) => existsSync(p));
  if (!found) {
    throw new Error(
      'Chrome/Edge não encontrado. Defina PUPPETEER_EXECUTABLE_PATH.'
    );
  }
  return found;
}

async function main() {
  const server = await createServer({
    root,
    server: { port: PORT, strictPort: true },
    logLevel: 'error',
  });
  await server.listen();

  const browser = await puppeteer.launch({
    executablePath: findBrowser(),
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/curriculo`, {
      waitUntil: 'networkidle0',
    });
    await page.emulateMediaType('print');
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log(`PDF gerado em ${outputPath}`);
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
