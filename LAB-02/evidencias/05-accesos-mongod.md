#### `evidencias/05-accesos-mongod.md`
```markdown
# Evidencia 05: Accesos en Bitácora

* **Estudiante:** [valenzuela zazueta anahi]
* **Fecha:** 8 de noviembre de 2026
* **Entorno:** MongoDB 7.0 Community Edition / mongosh

## 1. Comando Ejecutado
```javascript
bitacora().filter(e => e.c === "ACCESS");

{ "c": "ACCESS", "msg": "Failed to authenticate", "attr": { "user": "app_ventas", "error": "AuthenticationFailed" } }
{ "c": "ACCESS", "msg": "Successfully authenticated", "attr": { "user": "app_ventas", "db": "comercial" } }