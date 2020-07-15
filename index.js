const electron = require('electron')
const { app, BrowserWindow } = electron

const createWindow = () => {
    const config = {
        height: 700,
        width: 700,
        webPreferences: {
            nodeIntegration: true
        }
    }

    const window = new BrowserWindow(config)

    window.loadFile('./public/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})