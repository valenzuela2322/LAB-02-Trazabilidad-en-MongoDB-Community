# 2. `evidencias/02-incidente-sin-perfilado.md`
```markdown
# Evidencia 02: Incidente sin Perfilado

* **Estudiante:** [valenzuela zazuet anahi]
* **Fecha:** 8 de noviembre de 2026
* **Entorno:** MongoDB 7.0 Community Edition / mongosh

## 1. Comando Ejecutado
```javascript
db.getProfilingStatus();
// Operación realizada por la aplicación:
// db.clientes.updateOne({ _id: 3 }, { $set: { rfc: "GAMA780912XXX" } });
db.system.profile.countDocuments();
bitacora().filter(e => JSON.stringify(e).includes("GAMA780912XXX")).length;

{ was: 0, slowms: 100, sampleRate: 1, ok: 1 }
0
0