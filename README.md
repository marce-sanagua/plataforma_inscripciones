 Plataforma de Inscripciones

Sistema para gestionar alumnos y sus materias.

---
 Users Service

Servicio que gestiona los usuarios.

**URL:**
https://users-api-rmm5.onrender.com

**Endpoints:**

* GET /usuarios → devuelve la lista de usuarios (status 200)
* GET /usuarios/:id → devuelve un usuario por ID (status 200 o 404)

**Ejemplos:**

https://users-api-rmm5.onrender.com/usuarios
https://users-api-rmm5.onrender.com/usuarios/1

**Respuesta:**

```json
{ "id": 1, "nombre": "Juan" }
```

---
 Academic Service

Servicio que consulta usuarios y devuelve sus materias inscriptas.

**URL:**
https://academic-api-oj98.onrender.com

**Endpoint:**

* GET /academic/usuario/:id → devuelve usuario + materias

**Ejemplo:**

https://academic-api-oj98.onrender.com/academic/usuario/1

**Respuesta:**

```json
{
  "usuario": { "id": 1, "nombre": "Juan" },
  "materias": [
    { "userId": 1, "materia": "Algoritmos" },
    { "userId": 1, "materia": "BD" }
  ]
}
```

---

 Integración entre servicios

El servicio **academic** consume al servicio **users** mediante HTTP para obtener los datos del usuario y combinarlos con sus materias.

---

 Casos de prueba

* ID 1 → usuario con materias
* ID 2 → usuario sin materias
* ID 3 → usuario no encontrado (404)

---

 Persistencia

* users → archivo JSON (`usuarios.json`)
* academic → archivo JSON (`inscripciones.json`)

---

 Tecnologías

* Node.js
* Express
* Axios
* CORS
* Render
* GitHub
