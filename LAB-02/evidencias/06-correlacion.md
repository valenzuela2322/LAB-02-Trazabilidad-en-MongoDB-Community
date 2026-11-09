`evidencias/06-correlacion.md`
```markdown
# Evidencia 06: Correlación por Contexto (ctx)

* **Estudiante:** [valenzuela zazueta anahi]
* **Fecha:** 8 de noviembre de 2026
* **Entorno:** MongoDB 7.0 Community Edition / mongosh

## 1. Comando Ejecutado
```javascript
bitacora().filter(e => e.msg === "Profiler settings changed");
bitacora().filter(e => e.ctx === "conn31" && e.msg === "Successfully authenticated");

{ "t": "2026-10-25T22:53:00.000Z", "ctx": "conn31", "msg": "Profiler settings changed" }
{ "t": "2026-10-25T22:50:00.000Z", "ctx": "conn31", "user": "admin", "client": "127.0.0.1" }