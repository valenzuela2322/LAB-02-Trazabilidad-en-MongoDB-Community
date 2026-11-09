# 3. `evidencias/03-perfilador.md`
```markdown
# Evidencia 03: Perfilador y Operaciones CRUD

* **Estudiante:** [valenzuela zazueta anahi]
* **Fecha:** 8 de noviembre de 2026
* **Entorno:** MongoDB 7.0 Community Edition / mongosh

## 1. Comando Ejecutado
```javascript
db.setProfilingLevel(2);
db.system.profile.find(
  { ns: "comercial.clientes" },
  { op: 1, ns: 1, command: 1, user: 1, client: 1, appName: 1, ts: 1, millis: 1, nreturned: 1, nModified: 1, ndeleted: 1 }
).sort({ ts: 1 });

{ op: "update", ns: "comercial.clientes", user: "app_ventas@comercial", client: "127.0.0.1", appName: "app-ventas-web", nModified: 1 }
{ op: "remove", ns: "comercial.clientes", user: "app_ventas@comercial", client: "127.0.0.1", appName: "app-ventas-web", ndeleted: 1 }