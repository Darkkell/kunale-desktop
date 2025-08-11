const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js') // Opcional, pero recomendado por seguridad
        // }
        // 👉 Aquí es donde ocultas la barra de menú
        // autoHideMenuBar: true, // Esto la oculta automáticamente cuando no está en uso.
        // o puedes usar:
        menu: null, // Esto la elimina por completo
    });
    win.loadFile('index.html');
    // win.webContents.openDevTools(); // Para abrir las herramientas de desarrollador
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
