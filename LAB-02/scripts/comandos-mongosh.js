// ============================================================================
// LAB-02: Trazabilidad en MongoDB Community Edition (Unidad III)
// ============================================================================

// 1. Preparación del Entorno (Crear Usuarios y Datos Iniciales)
use admin;
db.createUser({ user: "admin", pwd: "Admin_Practica_2026", roles: ["root"] });
db.auth("admin", "Admin_Practica_2026");

use comercial;
db.createUser({
  user: "app_ventas",
  pwd: "Ventas_Practica_2026",
  roles: [{ role: "readWrite", db: "comercial" }]
});

db.clientes.insertMany([
  { _id: 1, nombre: "Ana López", correo: "ana.lopez@example.test", telefono: "6671234567", rfc: "LOAA850315ABC", edad: 41, ciudad: "Culiacán", codigo_postal: "80000" },
  { _id: 2, nombre: "Carlos Pérez", correo: "carlos.perez@example.test", telefono: "6672345678", rfc: "PECA900720DEF", edad: 35, ciudad: "Culiacán", codigo_postal: "80100" },
  { _id: 3, nombre: "María García", correo: "maria.garcia@example.test", telefono: "6673456789", rfc: "GAMA780912GHI", edad: 47, ciudad: "Mazatlán", codigo_postal: "82000" },
  { _id: 4, nombre: "Luis Torres", correo: "luis.torres@example.test", telefono: "6674567890", rfc: "TOLU920201JKL", edad: 34, ciudad: "Los Mochis", codigo_postal: "81200" },
  { _id: 5, nombre: "Laura Sánchez", correo: "laura.sanchez@example.test", telefono: "6675678901", rfc: "SALA880525MNO", edad: 38, ciudad: "Culiacán", codigo_postal: "80200" }
]);

// 2. Función auxiliar para consultar la bitácora JSON
function bitacora() {
  return db.adminCommand({ getLog: "global" }).log.map(l => JSON.parse(l));
}

// 3. Actividad 1: Verificar Edición y Módulos
db.version();
db.adminCommand({ buildInfo: 1 }).modules;
db.serverCmdLineOpts().parsed;

// 4. Actividad 3: Activar Perfilador Nivel 2 y Ejecutar Operaciones CRUD
use comercial;
db.setProfilingLevel(2);
db.clientes.find({ ciudad: "Culiacán" }, { nombre: 1, ciudad: 1 }).toArray();
db.clientes.updateOne({ _id: 3 }, { $set: { rfc: "GAMA780912XYZ" } });
db.clientes.deleteOne({ _id: 2 });

// Consultar el perfilador
db.system.profile.find(
  { ns: "comercial.clientes" },
  { op: 1, ns: 1, command: 1, user: 1, client: 1, appName: 1, ts: 1, millis: 1, nreturned: 1, docsExamined: 1, nModified: 1, ndeleted: 1 }
).sort({ ts: 1 });

// 5. Actividad 4: Perfilado con Filtro (Nivel 1)
db.setProfilingLevel(0);
db.system.profile.drop();
db.setProfilingLevel(1, { filter: { op: { $in: ["insert", "update", "remove"] } } });

// 6. Actividad 7: Control Compensatorio (Instantáneas de Privilegios)
db.getSiblingDB("auditoria").instantaneas_privilegios.insertOne({
  momento: new Date(),
  tomada_por: db.runCommand({ connectionStatus: 1 }).authInfo.authenticatedUsers,
  usuarios: db.getUsers().users.map(u => ({ user: u.user, db: u.db, roles: u.roles }))
});

db.grantRolesToUser("app_ventas", [{ role: "dbAdmin", db: "comercial" }]);

db.getSiblingDB("auditoria").instantaneas_privilegios.insertOne({
  momento: new Date(),
  tomada_por: db.runCommand({ connectionStatus: 1 }).authInfo.authenticatedUsers,
  usuarios: db.getUsers().users.map(u => ({ user: u.user, db: u.db, roles: u.roles }))
});

// Comparar Instantáneas
db.getSiblingDB("auditoria").instantaneas_privilegios.find({}, { _id: 0 }).sort({ momento: 1 });

// Restablecer Entorno
db.revokeRolesFromUser("app_ventas", [{ role: "dbAdmin", db: "comercial" }]);
db.setProfilingLevel(1, { filter: { op: { $in: ["insert", "update", "remove"] } } });