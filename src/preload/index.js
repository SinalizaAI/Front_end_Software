import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  onFraseReconhecida: (callback) => ipcRenderer.on('frase-reconhecida', (_, dado) => callback(dado)),
  onVozAtendente: (callback) => ipcRenderer.on('voz-atendente', (_, dado) => callback(dado)),
  onStatusGravacao: (callback) => ipcRenderer.on('status-gravacao', (_, dado) => callback(dado)),
  iniciarGravacao: () => ipcRenderer.send('iniciar-gravacao'),
  pararGravacao: () => ipcRenderer.send('parar-gravacao')
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}