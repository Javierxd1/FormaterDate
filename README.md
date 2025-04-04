# 🗓️ PlatziDate

**PlatziDate** es una utilidad ligera para manejar fechas en formato `timestamp` y `long time`, ideal para proyectos JavaScript/Node.js que requieren formatos de tiempo legibles y prácticos.

---

## 📦 Instalación

```bash
npm install platzidate

Uso básico

const platziDate = require('platzidate');

const now = new Date();

console.log(platziDate.timestamp(now));  // Ejemplo de salida: 1618351234
console.log(platziDate.longTime(now));   // Ejemplo de salida: "Hace 5 minutos"
