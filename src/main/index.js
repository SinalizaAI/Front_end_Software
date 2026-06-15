import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'

let telaInicial = null
let janelaSurdo = null
let janelaOuvinte = null

function createWindows() {
  telaInicial = new BrowserWindow({
    width: 1000,
    height: 700,
    show: false,
    title: 'SinalizaAI',
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  janelaSurdo = new BrowserWindow({
    width: 900,
    height: 670,
    show: true, // <-- abre direto
    title: 'SinalizaAI - Surdo',
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  janelaOuvinte = new BrowserWindow({
    width: 900,
    height: 670,
    show: true, // <-- abre direto
    title: 'SinalizaAI - Ouvinte',
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  telaInicial.on('ready-to-show', () => telaInicial.show())

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    telaInicial.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/')
    janelaSurdo.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/surdo')
    janelaOuvinte.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/ouvinte')
  } else {
    telaInicial.loadFile(join(__dirname, '../renderer/index.html'), { hash: '/' })
    janelaSurdo.loadFile(join(__dirname, '../renderer/index.html'), { hash: '/surdo' })
    janelaOuvinte.loadFile(join(__dirname, '../renderer/index.html'), { hash: '/ouvinte' })
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindows()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindows()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('abrir-surdo', () => {
  if (janelaSurdo) janelaSurdo.show()
})

ipcMain.on('abrir-ouvinte', () => {
  if (janelaOuvinte) janelaOuvinte.show()
})