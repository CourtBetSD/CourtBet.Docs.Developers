# Versiones

Descripcion de las versiones de los sistemas de CourtBet

## 1.8.13 - 05/07/2024

### CourtBet.API.Integrations

- #75 - Limitar creacion de contraseña hash a 10 pasos.
- #87 - Resuelto bug que evitaba eliminar activo si tenia precarga de carta porte.
- #88 - Resuelto bug al asignar contraseña a archivo.
- #89 - Resuelto bug al cambiar el orden de los activos.
- #90 - Resuelto bug al cambiar orden de archivos temporales.
- #91 - Resuelto bug al editar datos de gasto de activo.
- #92 - Resuelto bug al actualizar datos de activo.
- #94 - Resuelto bug al actualizar datos de Clientes.
- #95 - Resuelto bug al actualizar datos de Orden de Venta.
- #96 - Resuelto bug al actualizar datos de Cotización.
- #97 - Resuelto bug al crear usuario de sistema.
- #98 - Resuelto bug al actualizar datos de usuario de sistema.
- #93 - Resuelto bug con datos generados en reporte de gastos de activo.

### CourtBet.Project.YouTapIt_Inventarios

- #161 - Resuelto error al subir imágenes de activo.
- #177 - Resuelto bug con calculo de totales en Orden de venta y Cotizaciones.
- #178 - Resuelto bug en configuración para subir archivos desde usuario externo.
- #179 - Resuelto bug con las url del api de proveedores.
- #180 - Resuelto bug con las url de tipos de gasto.

## 1.8.7 - 30/06/2024

### CourtBet.API.Integrations

- #97 - Añadido log de errores a base de datos en todos los sistemas.
- #159 - Eliminada serializacion de objeto en el log, por cambios segun sean los parametros y metodo.

### CourtBet.API.Email

- #1 - Creado proyecto base.
- #2 - Agregada seguridad.
- #7 - Agregado .env file
- #4 - Se obtienen los usuarios de la base de datos.
- #10 - Cambiado el resultado del metodo auth.

### CourtBet.Project.YouTapIt_Inventarios

- #141 - Revisado acceso de usuarios y ajustado a los nuevos cambios.
- #134 - Agregado el actualizar datos de items con excel.
- #142 - Sacar catalogos al menu del sistema, eliminados de la vista de configuracion.
- #140 - Agregada opcion para cambiar contraseña dentro del sistema.
- #123 - Agregado modulo de cotizaciones.
- #124 - Enviar cotizacion por correo.
- #167 - Ajustada template de cotizacion y ordenes de venta.
- #52 - Revisado y ajustado modulo de ordenes de venta.
- #51 - Enviar orden de venta por correo.
- #146 - Solucionado error en la suma de totales de la cotizacion.
- #160 - Ajustados botones de sucursal.
- #162 - Resuelto error al eliminar imagen.
- #162 - Resuelto error al eliminar activo.
- #135 - Agregado modulo de cobranza.
- #136 - Agregado modulo de rentas y politicas.

### CourtBet.Project.Administrators

- #1 - Agregado proyecto base en PHP.
- #1 - Agregado visualizador de logs de los sistemas.

### Developers

- #21 - Actualizada documentacion de modulos terminados.
- #22 - Agregada documentacion de versionado semantico.
- #28 - Agregado documentacion con los cambios por Sprint(15 dias).
