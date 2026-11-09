# Evidencia 01: Edición y Limitación de Auditoría

* **Estudiante:** [valenzuela zazueta anahi]
* **Fecha:** 8 de noviembre de 2026
* **Entorno:** MongoDB 7.0 Community Edition / mongosh

## 1. Comando Ejecutado
```javascript
db.version();
db.adminCommand({ buildInfo: 1 }).modules;
db.serverCmdLineOpts().parsed;
7.0.43
[]

7.0.43
[]
{ net: { bindIp: '*' }, security: { authorization: 'enabled' } }