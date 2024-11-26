<template><div><h1 id="functional-requirements-document" tabindex="-1"><a class="header-anchor" href="#functional-requirements-document"><span>Functional Requirements Document</span></a></h1>
<h2 id="_1-general-project-information" tabindex="-1"><a class="header-anchor" href="#_1-general-project-information"><span>1. General Project Information</span></a></h2>
<table>
<thead>
<tr>
<th>Project Name</th>
<th>Interface Design in the Middleware for PBCU Applications Integration</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sprint</td>
<td>Sprint # 2</td>
</tr>
<tr>
<td>Assigned Team</td>
<td>Team G</td>
</tr>
<tr>
<td>Sprint Start Date</td>
<td>22 October of 2024</td>
</tr>
<tr>
<td>Delivery Date</td>
<td>31 October of 2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objective" tabindex="-1"><a class="header-anchor" href="#_2-objective"><span>2. Objective</span></a></h2>
<p>Integrate the Middleware with a weighing system and the TOS (OTM) system, enabling the capture of a vehicle's weight and associating it with the driver's ID. This information will then be sent to the TOS for use in logistical processes.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The Sprint scope covers the integration of the Middleware with a weighing system and the TOS (OTM) system to capture the driver's ID scanned at the scale, associate it with the vehicle's weight, and send this data, along with the license plate and container information, to the TOS for use in logistical processes. Data validations will be included to ensure accuracy before transmission. The scope does not include any modifications to the scale hardware or the TOS systems, focusing solely on the integration and management of the captured information.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<ul>
<li><strong>RF-01:</strong> The Middleware must allow the capture of the driver's ID from a barcode reader at the scale.</li>
<li><strong>RF-02:</strong> The Middleware must receive the vehicle's weight from the scale and associate it with the driver's ID.</li>
<li><strong>RF-03:</strong> The Middleware must query the TOS system to retrieve the vehicle's license plate and container associated with the driver's ID.</li>
<li><strong>RF-04:</strong> The Middleware must send the driver's ID, vehicle license plate, container, weight, date, and time to the TOS (OTM) system.</li>
<li><strong>RF-05:</strong> The Middleware must handle transmission errors and retry failed queries, notifying the originating system of the errors.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-capture-the-driver-s-id-and-associate-it-with-the-vehicle-s-weight" tabindex="-1"><a class="header-anchor" href="#use-case-1-capture-the-driver-s-id-and-associate-it-with-the-vehicle-s-weight"><span>Use Case 1: Capture the Driver's ID and Associate it with the Vehicle's Weight</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware, Scale</li>
<li><strong>Preconditions:</strong> The ID reader is operational and connected to the Middleware.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The driver scans their ID at the barcode reader on the scale.</li>
<li>The Middleware receives the ID and requests the vehicle's weight.</li>
<li>The Middleware associates the ID with the vehicle's weight.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The driver's ID and the vehicle's weight are correctly associated and stored in the system.</li>
</ul>
<h4 id="use-case-2-query-the-license-plate-and-container-associated-with-the-driver-s-id" tabindex="-1"><a class="header-anchor" href="#use-case-2-query-the-license-plate-and-container-associated-with-the-driver-s-id"><span>Use Case 2: Query the License Plate and Container Associated with the Driver's ID</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware, TOS (OTM)</li>
<li><strong>Preconditions:</strong> The Middleware has captured the driver's ID.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware invokes the &quot;Vehicle and Container Query&quot; service in the TOS, sending the driver's ID.</li>
<li>The TOS returns the vehicle's license plate and the container associated with that ID.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The Middleware successfully retrieves the vehicle's license plate and container.</li>
</ul>
<h4 id="use-case-3-send-the-data-to-the-tos-system" tabindex="-1"><a class="header-anchor" href="#use-case-3-send-the-data-to-the-tos-system"><span>Use Case 3: Send the Data to the TOS System</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware, TOS (OTM)</li>
<li><strong>Preconditions:</strong> The Middleware has associated the driver's ID with the vehicle's weight and queried the license plate and container in the TOS.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends the driver's ID, vehicle license plate, container, weight, date, and time to the TOS system.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The TOS successfully receives and stores the sent data.</li>
</ul>
<h4 id="use-case-4-error-handling-in-communication-with-the-tos" tabindex="-1"><a class="header-anchor" href="#use-case-4-error-handling-in-communication-with-the-tos"><span>Use Case 4: Error Handling in Communication with the TOS</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware, TOS (OTM)</li>
<li><strong>Preconditions:</strong> The Middleware attempts to send the weighing information to the TOS.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware detects an error when sending the data to the TOS.</li>
<li>The Middleware retries the operation a configurable number of times.</li>
<li>If the operation continues to fail, the Middleware reports the error to the originating system.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> Errors are handled appropriately, and unsent data is reported for subsequent review.</li>
</ul>
<h2 id="_5-validations-requested-by-the-client" tabindex="-1"><a class="header-anchor" href="#_5-validations-requested-by-the-client"><span>5. Validations Requested by the Client</span></a></h2>
<h4 id="v-01-id-validation" tabindex="-1"><a class="header-anchor" href="#v-01-id-validation"><span>V-01: ID Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> The Middleware must validate that the captured ID follows the correct format.</li>
<li><strong>Acceptance Criteria:</strong> The ID must consist of a valid number of 8 to 10 digits.</li>
</ul>
<h4 id="v-02-vehicle-weight-validation" tabindex="-1"><a class="header-anchor" href="#v-02-vehicle-weight-validation"><span>V-02: Vehicle Weight Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> The captured weight must be within an allowed range.</li>
<li><strong>Acceptance Criteria:</strong> The weight must be between 1,000 and 80,000 kilograms.</li>
</ul>
<h4 id="v-03-data-validation-before-sending" tabindex="-1"><a class="header-anchor" href="#v-03-data-validation-before-sending"><span>V-03: Data Validation Before Sending</span></a></h4>
<ul>
<li><strong>Description:</strong> Before sending the information to the TOS, the Middleware must validate that the ID, license plate, container, and weight are complete and correct.</li>
<li><strong>Acceptance Criteria:</strong> All data must be complete and meet the format required by the TOS.</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>The ID reader and the scale must be properly installed and functioning.</li>
<li>The &quot;Vehicle and Container Query&quot; service from the TOS must be available and tested for integration.</li>
<li>The testing environment for the TOS and the scale must be configured and accessible for integration testing.</li>
</ul>
<h2 id="_7-sequence-diagrams" tabindex="-1"><a class="header-anchor" href="#_7-sequence-diagrams"><span>7. Sequence Diagrams</span></a></h2>
<h3 id="sequence-diagrams" tabindex="-1"><a class="header-anchor" href="#sequence-diagrams"><span>Sequence Diagrams</span></a></h3>
<ul>
<li>Vehicle weight capture</li>
</ul>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="@source/assets/Basculas/captureVehicleWeights.png" alt=""></span></a></h3>
<h2 id="_8-service-data" tabindex="-1"><a class="header-anchor" href="#_8-service-data"><span>8. Service Data</span></a></h2>
<h3 id="_8-1-capture-vehicle-weights" tabindex="-1"><a class="header-anchor" href="#_8-1-capture-vehicle-weights"><span>8.1 Capture Vehicle Weights</span></a></h3>
<p>Request and Response</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"idBascula"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"idDriver"</span><span class="token operator">:</span> <span class="token number">11115248569</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"dateTime"</span><span class="token operator">:</span> <span class="token string">"20240718103625"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token string">"25000"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Responses</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-unit-tests" tabindex="-1"><a class="header-anchor" href="#_9-unit-tests"><span>9. Unit Tests</span></a></h2>
<h3 id="a-datos-ficticios-bascula" tabindex="-1"><a class="header-anchor" href="#a-datos-ficticios-bascula"><span>A. Datos ficticios Bascula</span></a></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="@source/assets/Basculas/datosFicticiosBascula.png" alt=""></span></a></h3>
<h3 id="b-pruebas-entorno-frontend" tabindex="-1"><a class="header-anchor" href="#b-pruebas-entorno-frontend"><span>B. Pruebas entorno Frontend</span></a></h3>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="@source/assets/Basculas/pruebasFrontend1.png" alt=""></span></a></h3>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="@source/assets/Basculas/pruebasFrontend2.png" alt=""></span></a></h3>
<p>Scale Weights Obtained</p>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4"><span><img src="@source/assets/Basculas/getWeights1.png" alt=""></span></a></h3>
<h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5"><span><img src="@source/assets/Basculas/getWeights2.png" alt=""></span></a></h3>
<h3 id="c-pruebas-swagger-–-getscalebyid" tabindex="-1"><a class="header-anchor" href="#c-pruebas-swagger-–-getscalebyid"><span>C. Pruebas Swagger – GetScaleById</span></a></h3>
<h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6"><span><img src="@source/assets/Basculas/SwaggerGetScaleById.png" alt=""></span></a></h3>
<p>Responses GetScaleById</p>
<h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7"><span><img src="@source/assets/Basculas/responsesSwaggerGetScaleById.png" alt=""></span></a></h3>
<h2 id="_10-annexes" tabindex="-1"><a class="header-anchor" href="#_10-annexes"><span>10. Annexes</span></a></h2>
<h3 id="_10-1-capture-vehicle-weights" tabindex="-1"><a class="header-anchor" href="#_10-1-capture-vehicle-weights"><span>10.1 Capture Vehicle Weights</span></a></h3>
<h4 id="requests" tabindex="-1"><a class="header-anchor" href="#requests"><span>Requests</span></a></h4>
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
<td>idBascula</td>
<td>Number</td>
<td>10</td>
<td>-</td>
</tr>
<tr>
<td>2</td>
<td>idDriver</td>
<td>Number</td>
<td>20</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>dateTime</td>
<td>DateTime</td>
<td>20</td>
<td>-</td>
</tr>
<tr>
<td>4</td>
<td>weight</td>
<td>Number</td>
<td>6</td>
<td>Kg</td>
</tr>
</tbody>
</table>
<h4 id="responses" tabindex="-1"><a class="header-anchor" href="#responses"><span>Responses</span></a></h4>
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
<td>statusResponse</td>
<td>String</td>
<td>5</td>
<td>True, false</td>
</tr>
<tr>
<td>2</td>
<td>code</td>
<td>Number</td>
<td>2</td>
<td>-</td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td>Status Message</td>
</tr>
</tbody>
</table>
</div></template>



<style>
/* Justificar el texto en los encabezados */
h2, h3 {
    text-align: justify;
}

/* Justificar el texto en los párrafos */
p {
    text-align: justify;
}

img {
    display: block;
    margin: 0 auto;  /* Centra la imagen */
    width: 80%;  /* Ajusta el tamaño al 80% del contenedor */
    max-width: 600px;  /* Establece un ancho máximo para la imagen */
  }

  /* Estilo general para todas las tablas */
table {
    width: 100%;  /* Las tablas ocuparán todo el ancho del contenedor */
    border-collapse: collapse;  /* Colapsa los bordes para que no haya espacio entre celdas */
    table-layout: fixed;  /* Establece que todas las celdas tengan el mismo ancho */
}

/* Estilo para las celdas de la tabla */
th, td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;  /* Bordes suaves alrededor de cada celda */
    overflow: hidden;  /* Para evitar que el texto se desborde de las celdas */
    word-wrap: break-word;  /* Hace que el texto largo se ajuste a la celda */
}
th, td {
    width: 20%;  /* Ajusta este porcentaje según el número de columnas */
}
</style>