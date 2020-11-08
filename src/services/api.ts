import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // 'http://192.168.1.10:3333',
});

export default api;

/*
iOS com Emulador: localhost
iOS com físico: IP da máquina, no windows, vá no cmd, ipconfig
Android com Emulador: adb reverse tcp:3333 tcp:3333 (adb reverse)
Android com Emulador: 10.0.2.2 (Android Studio)
Android com Emulador: 10.0.3.2 (Genymotion)
Android com físico: ip da máquina
*/
