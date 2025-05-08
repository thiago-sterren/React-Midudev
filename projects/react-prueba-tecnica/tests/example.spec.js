// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

test('app shows random fact and image', async ({ page }) => { // podemos cambiar el nombre del test
  await page.goto(LOCALHOST_URL); // le damos la url de la pagina donde debe hacer el test

  const text = await page.getByRole('paragraph') // almaceno el elemento <p></p> en una variable
  const image = await page.getByRole('img') // almaceno el elemento <img/> en una variable

  const textContent = await text.textContent() // almaceno en una variable el contenido del parrafo
  const imageSrc = await image.getAttribute('src') // almaceno en una variable el atributo src de la imagen

  expect(textContent?.length).toBeGreaterThan(0) // nos aseguramos de que el texto tenga por lo menos algun caracter
  expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy() // nos aseguramos de que el source de la imagen al menos comience con el prefijo adecuado
});

// este seria un test 'basico' pero a la vez el mas importante
// es el testing end to end (Testing E2E)
// me aseguro de que el programa, por lo menos, le devuelve una renderizacion al usuario.
// en este caso es algo muy sencillo debido a la poca cantidad de elementos html que tenemos en nuestra pagina,
// pero con paginas mas complejas, este codigo de testing se hace mas complejo tambien

// inserte esto en el cmd con direccion en la carpeta del proyecto, para realizar los tests:
// 1- npm init playwright@latest
// 2- seleccionar javascript
// 3- where to put your end to end tests? ingresar 'tests'
// 4- add a github actions workflow? ingresar 'false'
// 5- install playwright browsers? ingresar 'true' 

// nos creara dos carpetas tests y tests-examples
// borramos la carpeta examples y dentro del archivo que esta en tests hacemos nuestros tests
// podemos usar este como ejemplo
// tambien cambiamos la extension del archivo 'playwright.config.js' por '.cjs'

// por ultimo, para correr los tests, ejecutaremos el comando:
// npx playwright test