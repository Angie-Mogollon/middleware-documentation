<template><div><h1 id="entrega-de-requerimientos-funcionales" tabindex="-1"><a class="header-anchor" href="#entrega-de-requerimientos-funcionales"><span>Entrega de Requerimientos Funcionales</span></a></h1>
<h2 id="_1-informacion-general-del-proyecto" tabindex="-1"><a class="header-anchor" href="#_1-informacion-general-del-proyecto"><span>1. Información General del Proyecto</span></a></h2>
<table>
<thead>
<tr>
<th>Nombre del proyecto</th>
<th>Diseño de Interfaces en el Middleware para la integración de aplicativos PBCU</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sprint</td>
<td>Sprint # 1</td>
</tr>
<tr>
<td>Equipo Asignado</td>
<td>Equipo G</td>
</tr>
<tr>
<td>Fecha Inicio Sprint</td>
<td>16 septiembre de 2024</td>
</tr>
<tr>
<td>Fecha Entrega</td>
<td>20 septiembre de 2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objetivo" tabindex="-1"><a class="header-anchor" href="#_2-objetivo"><span>2. Objetivo</span></a></h2>
<p>Desarrollar un conjunto de servicios en Middleware para validar datos de vehículos, conductores y manifiestos ante el Ministerio de Transporte, consolidando las respuestas y notificando al TOS (OTM) si el ingreso está permitido o si existen incidencias, así como realizar las validaciones necesarias para el servicio de “validación de citas”.</p>
<h2 id="_3-alcance-del-sprint" tabindex="-1"><a class="header-anchor" href="#_3-alcance-del-sprint"><span>3. Alcance del Sprint</span></a></h2>
<p>Se abarca la validación de los datos de vehículos, conductores y manifiestos, integrándose con el Ministerio de Transporte para verificar la validez de licencias, matrículas, SOAT y revisión técnico-mecánica (RTM), así como la autenticidad y el estado de los manifiestos. Estas validaciones se consolidan y se retornan al sistema TOS (OTM) o al servicio de &quot;validación de citas&quot;, asegurando que los datos proporcionados cumplen con los requisitos necesarios para el ingreso al sistema logístico.</p>
<h2 id="_4-requerimientos-funcionales" tabindex="-1"><a class="header-anchor" href="#_4-requerimientos-funcionales"><span>4. Requerimientos Funcionales</span></a></h2>
<h3 id="_4-1-descripcion-general" tabindex="-1"><a class="header-anchor" href="#_4-1-descripcion-general"><span>4.1. Descripción General</span></a></h3>
<ul>
<li><strong>Ministerio de Transporte - Validación de citas</strong>
<ul>
<li>RF-01: El Middleware debe recibir la petición con los datos del vehículo, conductor y manifiesto desde el TOS (OTM).</li>
<li>RF-02: El Middleware debe ejecutar los servicios de validación de conductor, vehículo y manifiesto.</li>
<li>RF-03: El Middleware debe consolidar las respuestas de las validaciones.</li>
<li>RF-04: Si todas las validaciones son correctas, el Middleware debe notificar al TOS (OTM) que el ingreso está permitido.</li>
<li>RF-05: Si alguna validación falla, el Middleware debe notificar al TOS (OTM) con la incidencia correspondiente.</li>
<li>RF-06: El Middleware debe tomar la cédula del conductor y realizar la validación ante el Ministerio de Transporte.</li>
<li>RF-07: Verificar que la licencia del conductor sea de tipo C2 o C3 y que no esté vencida.</li>
<li>RF-08: Retornar la respuesta con la validación de la licencia al servicio “validación de citas”.</li>
<li>RF-09: El Middleware debe validar la placa del vehículo ante el Ministerio de Transporte.</li>
<li>RF-10: Verificar que la matrícula, SOAT y revisión técnico-mecánica (RTM) del vehículo no estén vencidos.</li>
<li>RF-11: Retornar la respuesta con la validación del vehículo al servicio “validación de citas”.</li>
<li>RF-12: El Middleware debe validar el manifiesto ante el Ministerio de Transporte.</li>
<li>RF-13: Verificar que la placa y el documento del conductor coincidan con la información del manifiesto.</li>
<li>RF-14: Validar el estado activo del manifiesto y los movimientos Import y Export según el código PBCU.</li>
<li>RF-15: Si el valor del manifiesto supera los 500.000.001, se debe inhibir la validación.</li>
<li>RF-16: Retornar la respuesta con la validación del manifiesto al servicio “validación de citas”.</li>
</ul>
</li>
</ul>
<h3 id="_4-2-casos-de-uso" tabindex="-1"><a class="header-anchor" href="#_4-2-casos-de-uso"><span>4.2. Casos de Uso</span></a></h3>
<p><strong>Caso de Uso 1: Validar Citas</strong></p>
<ul>
<li><strong>Actor:</strong> TOS (OTM)</li>
<li><strong>Precondiciones:</strong> El Middleware recibe los datos de la cita desde el sistema TOS (OTM).</li>
<li><strong>Flujo principal:</strong>
<ol>
<li>El Middleware toma los datos de la cita.</li>
<li>Se validan que todos los datos requeridos (conductor, vehículo, manifiesto) estén presentes.</li>
<li>Se ejecutan las validaciones de cada entidad relacionada (conductor, vehículo, manifiesto).</li>
<li>Se retorna la respuesta al sistema TOS (OTM) con la validación de la cita.</li>
</ol>
</li>
<li><strong>Postcondiciones:</strong> La cita es validada correctamente o se reporta una incidencia.</li>
</ul>
<p><strong>Caso de Uso 2: Validar Conductor</strong></p>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Precondiciones:</strong> El Middleware recibe una cédula de conductor desde el TOS (OTM).</li>
<li><strong>Flujo Principal:</strong>
<ol>
<li>Middleware toma la cédula del conductor.</li>
<li>Middleware valida la licencia del conductor ante el Ministerio de Transporte.</li>
<li>Middleware verifica que la licencia sea de tipo C2 o C3 y que no esté vencida.</li>
<li>Middleware retorna la validación al TOS (OTM).</li>
</ol>
</li>
<li><strong>Postcondiciones:</strong> La validación de la licencia del conductor se completa correctamente.</li>
</ul>
<p>...</p>
<h2 id="_5-validaciones-solicitadas-por-el-cliente" tabindex="-1"><a class="header-anchor" href="#_5-validaciones-solicitadas-por-el-cliente"><span>5. Validaciones Solicitadas por el Cliente</span></a></h2>
<p>...</p>
<h2 id="_6-suposiciones-y-dependencias" tabindex="-1"><a class="header-anchor" href="#_6-suposiciones-y-dependencias"><span>6. Suposiciones y Dependencias</span></a></h2>
<ul>
<li>Se asume que el Middleware tiene acceso a los servicios del Ministerio de Transporte.</li>
<li>El sistema depende de la disponibilidad y estabilidad de los servicios externos proporcionados por el Ministerio de Transporte.</li>
<li>El TOS (OTM) debe proporcionar los datos correctos y en el formato adecuado para su validación.</li>
</ul>
<h2 id="_7-datos-del-servicio" tabindex="-1"><a class="header-anchor" href="#_7-datos-del-servicio"><span>7. Datos del Servicio</span></a></h2>
<p>...</p>
<h2 id="_8-pruebas-unitarias" tabindex="-1"><a class="header-anchor" href="#_8-pruebas-unitarias"><span>8. Pruebas Unitarias</span></a></h2>
<p>...</p>
<h2 id="_9-anexos" tabindex="-1"><a class="header-anchor" href="#_9-anexos"><span>9. Anexos</span></a></h2>
<h1 id="anexos" tabindex="-1"><a class="header-anchor" href="#anexos"><span>Anexos</span></a></h1>
<h3 id="tabla-de-requests" tabindex="-1"><a class="header-anchor" href="#tabla-de-requests"><span>Tabla de Requests</span></a></h3>
<table>
<thead>
<tr>
<th>No.</th>
<th>Field</th>
<th>Type</th>
<th>Size/Format</th>
<th>Domain</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>validationType</td>
<td>String</td>
<td>1</td>
<td>1: Appointment, 2: Gate In</td>
</tr>
<tr>
<td>2</td>
<td>truck</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>driver</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>manifestNbr</td>
<td>Number</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>truckCompanyId</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>appointmentDate</td>
<td>Date</td>
<td>yyyy/mm/dd</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>classCargo</td>
<td>String</td>
<td>5</td>
<td>Import, Export</td>
</tr>
</tbody>
</table>
<h3 id="tabla-de-responses" tabindex="-1"><a class="header-anchor" href="#tabla-de-responses"><span>Tabla de Responses</span></a></h3>
<table>
<thead>
<tr>
<th>No.</th>
<th>Field</th>
<th>Type</th>
<th>Size/Format</th>
<th>Domain</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>success</td>
<td>boolean</td>
<td></td>
<td>True</td>
</tr>
<tr>
<td>2</td>
<td>message</td>
<td>String</td>
<td>40</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>timestamp</td>
<td>Date</td>
<td>yyyy/mm/dd HH:mm:ss</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>StatusCode</td>
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>data</td>
<td>String</td>
<td>5000</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>StatusValidation</td>
<td>Boolean</td>
<td></td>
<td>True, False</td>
</tr>
<tr>
<td>7</td>
<td>licenseCatCod</td>
<td>String</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>licenseNbr</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>registrationStatus</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>licenceExpDate</td>
<td>Date</td>
<td>yyyy/mm/dd</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>soatExpDate</td>
<td>Date</td>
<td>yyyy/mm/dd</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>rtmExpDate</td>
<td>Date</td>
<td>yyyy/mm/dd</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="tabla-de-errores" tabindex="-1"><a class="header-anchor" href="#tabla-de-errores"><span>Tabla de Errores</span></a></h3>
<table>
<thead>
<tr>
<th>No.</th>
<th>Field</th>
<th>Type</th>
<th>Size/Format</th>
<th>Domain</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>success</td>
<td>boolean</td>
<td></td>
<td>True</td>
</tr>
<tr>
<td>2</td>
<td>message</td>
<td>String</td>
<td>40</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>timestamp</td>
<td>Date</td>
<td>yyyy/mm/dd HH:mm:ss</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>StatusCode</td>
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>data</td>
<td>String</td>
<td>5000</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>statusResponse</td>
<td>String</td>
<td>5</td>
<td>Fail</td>
</tr>
<tr>
<td>7</td>
<td>exception_code</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>exception_description</td>
<td>string</td>
<td>5000</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="codigos-de-excepciones" tabindex="-1"><a class="header-anchor" href="#codigos-de-excepciones"><span>Códigos de Excepciones</span></a></h3>
<h4 id="validacion-de-conductor" tabindex="-1"><a class="header-anchor" href="#validacion-de-conductor"><span>Validación de Conductor</span></a></h4>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>VLD001</td>
<td>Driver validation error: ${driverId}, The license Not found.</td>
</tr>
<tr>
<td>VLD002</td>
<td>Driver validation error: ${driverId}, The license has expired: (${driver.FECHAVENCIMIENTOLICENCIA})</td>
</tr>
<tr>
<td>VLD003</td>
<td>Driver validation error: ${driverId}. The license category does not start with C</td>
</tr>
</tbody>
</table>
<h4 id="validacion-de-vehiculo" tabindex="-1"><a class="header-anchor" href="#validacion-de-vehiculo"><span>Validación de Vehículo</span></a></h4>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>VHL001</td>
<td>Vehicle validation error, Vehicle Not found.</td>
</tr>
<tr>
<td>VHL002</td>
<td>The vehicle registration is invalid. The status reported to MinTransporte is: ${truck.ESTADOMATRICULA}</td>
</tr>
<tr>
<td>VHL003</td>
<td>The SOAT document expire on ${truck.FECHAVENCE_SOAT}, which is before the appointment date (${appointmentDate.toISOString().slice(0, 10)}).</td>
</tr>
</tbody>
</table>
<h4 id="validacion-de-manifiesto" tabindex="-1"><a class="header-anchor" href="#validacion-de-manifiesto"><span>Validación de Manifiesto</span></a></h4>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>VMF001</td>
<td>The cargo manifest query with ID <code v-pre>${dataAppointment.manifestNbr}</code> and truck company <code v-pre>${dataAppointment.truckCompanyId}</code> did not return any information.</td>
</tr>
<tr>
<td>VMF002</td>
<td>The cargo manifest is in a state different from 'AC'. The status reported by MinTransporte is: <code v-pre>${manifest.ESTADO}</code></td>
</tr>
<tr>
<td>VMF003</td>
<td>The driver <code v-pre>${manifest.NUMIDCONDUCTOR}</code> is not associated with the cargo manifest: <code v-pre>${dataAppointment.manifestNbr}</code></td>
</tr>
<tr>
<td>VMF004</td>
<td>For import movements, the origin must be '05837000'. The origin recorded in the cargo manifest is: <code v-pre>${manifest.ORIGEN}</code></td>
</tr>
<tr>
<td>VMF005</td>
<td>For export movements, the destination must be '05837000'. The destination recorded in the cargo manifest is: <code v-pre>${manifest.DESTINO}</code></td>
</tr>
</tbody>
</table>
</div></template>


