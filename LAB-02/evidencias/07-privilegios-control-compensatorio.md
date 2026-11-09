#### `evidencias/07-privilegios-control-compensatorio.md`
```markdown
# Evidencia 07: Control Compensatorio de Privilegios

* **Estudiante:** [Tu Nombre Completo]
* **Fecha:** 8 de noviembre de 2026
* **Entorno:** MongoDB 7.0 Community Edition / mongosh

## 1. Comando Ejecutado
```javascript
db.grantRolesToUser("app_ventas", [{ role: "dbAdmin", db: "comercial" }]);
db.getSiblingDB("auditoria").instantaneas_privilegios.find().sort({ momento: 1 });