#### `evidencias/04-filtro.md`
```markdown
# Evidencia 04: Perfilado Filtrado

* **Estudiante:** [valenzuela zazueta anahi]
* **Fecha:** 8 de noviembre de 2026
* **Entorno:** MongoDB 7.0 Community Edition / mongosh

## 1. Comando Ejecutado
```javascript
db.setProfilingLevel(0);
db.system.profile.drop();
db.setProfilingLevel(1, { filter: { op: { $in: ["insert", "update", "remove"] } } });

{ was: 0, slowms: 100 } -> { was: 1, slowms: 100 }