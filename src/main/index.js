import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindows() {

  const janelaSurdo = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    title: 'SinalizaAI - Surdo',
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  const janelaOuvinte = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    title: 'SinalizaAI - Ouvinte',
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  janelaSurdo.on('ready-to-show', () => janelaSurdo.show())
  janelaOuvinte.on('ready-to-show', () => janelaOuvinte.show())

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    janelaSurdo.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/surdo')
    janelaOuvinte.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/ouvinte')
  } else {
    janelaSurdo.loadFile(join(__dirname, '../renderer/index.html'), { hash: '/surdo' })
    janelaOuvinte.loadFile(join(__dirname, '../renderer/index.html'), { hash: '/ouvinte' })
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.sinalizaai.app')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindows()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindows()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})