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
<td>Sprint # 3</td>
</tr>
<tr>
<td>Assigned Team</td>
<td>Team J</td>
</tr>
<tr>
<td>Sprint Start Date</td>
<td>14 October of 2024</td>
</tr>
<tr>
<td>Delivery Date</td>
<td>01 November of 2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objective" tabindex="-1"><a class="header-anchor" href="#_2-objective"><span>2. Objective</span></a></h2>
<p>Automate the query of the Representative Market Rate (Tasa Representativa del Mercado, TRM) from the Financial Superintendence so that internal systems (ERP and TOS) receive the rate for the following day without manual intervention.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The scope of the sprint covers the implementation of a scheduled task in the Middleware for the automatic query and update of the Representative Market Rate (Tasa Representativa del Mercado, TRM) from the service provided by the Financial Superintendence. This process will run at configurable intervals within a specific time window, between 4:00 PM and 9:00 PM, ensuring that the TRM for the following day is available for subsequent use.</p>
<p>It includes the validation of the correct retrieval of the TRM and the transmission of this information to the TOS and ERP (IFS) systems, ensuring its proper integration and processing in both systems. The scope also includes the management of automatic notifications in case of failures during the query, with the possibility of sending email alerts to designated personnel to ensure a manual update of the TRM if the automatic query fails.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<ul>
<li><strong>RF-01:</strong> Implement a scheduled task to query the TRM from the Financial Superintendence between 4:00 PM and 9:00 PM.</li>
<li><strong>RF-02:</strong> Configure the system to send email notifications to the responsible parties if no successful response is received before 9:00 PM.</li>
<li><strong>RF-03:</strong> Send the obtained TRM to the internal ERP and TOS systems, validating the integrity and completeness of the data.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-automatic-trm-query-from-the-superintendence" tabindex="-1"><a class="header-anchor" href="#use-case-1-automatic-trm-query-from-the-superintendence"><span>Use Case 1: Automatic TRM Query from the Superintendence</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong> Middleware has access to the documentation and credentials necessary to query the TRM from the Superintendence service.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware initiates the scheduled task within the configured hours between 4:00 PM and 9:00 PM.</li>
<li>A request is sent to the Superintendence service to obtain the TRM for the following day.</li>
<li>The response from the Superintendence is checked to ensure it is successful.</li>
<li>If the query is successful, the TRM is stored in the system for future use.</li>
<li>If the query fails, the Middleware will continue attempting at configured intervals until 9:00 PM.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The TRM for the following day has been successfully queried and stored in the system for use in other processes.</li>
</ul>
<h4 id="use-case-2-sending-trm-to-tos" tabindex="-1"><a class="header-anchor" href="#use-case-2-sending-trm-to-tos"><span>Use Case 2: Sending TRM to TOS</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong> The TRM has been successfully queried and stored in the system.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware starts the process of sending the TRM to the TOS system.</li>
<li>It validates that the TRM data is complete and free from errors.</li>
<li>The TRM is sent to the TOS system through a secure connection.</li>
<li>The transaction and the status of the sending process are logged in the Middleware system.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The TRM is successfully sent and processed in the TOS system, and the transaction status is logged.</li>
</ul>
<h4 id="use-case-3-sending-trm-to-erp-ifs" tabindex="-1"><a class="header-anchor" href="#use-case-3-sending-trm-to-erp-ifs"><span>Use Case 3: Sending TRM to ERP (IFS)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong> The TRM has been successfully queried and stored in the system.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware starts the process of sending the TRM to the ERP (IFS) system.</li>
<li>It validates that the TRM data is complete and free from errors.</li>
<li>The TRM is sent to the ERP (IFS) system through a secure connection.</li>
<li>The transaction and the status of the sending process are logged in the Middleware system.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The TRM is successfully sent and processed in the ERP (IFS) system, and the transaction status is logged.</li>
</ul>
<h2 id="_5-validations-requested-by-the-client" tabindex="-1"><a class="header-anchor" href="#_5-validations-requested-by-the-client"><span>5. Validations Requested by the Client</span></a></h2>
<h4 id="v-01-validation-of-automatic-trm-query-from-the-financial-superintendence" tabindex="-1"><a class="header-anchor" href="#v-01-validation-of-automatic-trm-query-from-the-financial-superintendence"><span>V-01: Validation of Automatic TRM Query from the Financial Superintendence</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the Middleware correctly queries the TRM from the Financial Superintendence service within the configured time frame and specified interval.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The scheduled task must execute between 16:00 and 21:00 hours.</li>
<li>The Middleware must successfully send a request to the Financial Superintendence service to retrieve the TRM for the next day.</li>
<li>If the query is successful, the TRM must be correctly stored.</li>
<li>If the query fails, retry attempts must be made until 21:00 hours.</li>
</ul>
</li>
</ul>
<h4 id="v-02-validation-of-trm-sending-to-tos" tabindex="-1"><a class="header-anchor" href="#v-02-validation-of-trm-sending-to-tos"><span>V-02: Validation of TRM Sending to TOS</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the Middleware sends the TRM correctly to the TOS system.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The TRM data must be validated before sending to the TOS to ensure it is complete and error-free.</li>
<li>The TRM must be sent to the TOS via a secure connection.</li>
<li>The transaction and the status of the send must be correctly recorded in the Middleware system.</li>
</ul>
</li>
</ul>
<h4 id="v-03-validation-of-trm-sending-to-erp-ifs" tabindex="-1"><a class="header-anchor" href="#v-03-validation-of-trm-sending-to-erp-ifs"><span>V-03: Validation of TRM Sending to ERP (IFS)</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the Middleware sends the TRM correctly to the ERP (IFS) system.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The TRM data must be validated before sending to the ERP (IFS) to ensure it is complete and error-free.</li>
<li>The TRM must be sent to the ERP (IFS) via a secure connection.</li>
<li>The transaction and the status of the send must be correctly recorded in the Middleware system.</li>
</ul>
</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>The Superintendencia Financiera will provide stable access and documentation for the TRM query service.</li>
<li>The responsible individuals for receiving notifications in case of failure will be properly configured in the Middleware system.</li>
<li>Access to the integration documentation with the Superintendencia Financiera will be available for querying the TRM.</li>
<li>Access to the technical documentation of the TOS and ERP (IFS) systems will be available to validate the integration and TRM sending   process.</li>
</ul>
<h2 id="_7-diagrams" tabindex="-1"><a class="header-anchor" href="#_7-diagrams"><span>7. Diagrams</span></a></h2>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="@source/assets/superFinanciera/secuencia_para_trm_720.png" alt=""></span></a></h3>
<h2 id="_8-service-data" tabindex="-1"><a class="header-anchor" href="#_8-service-data"><span>8. Service Data</span></a></h2>
<h3 id="request-and-response" tabindex="-1"><a class="header-anchor" href="#request-and-response"><span>Request and Response</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"trmValue"</span><span class="token operator">:</span> <span class="token number">4035.28</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"validityFrom"</span><span class="token operator">:</span> <span class="token string">"2024-07-17T00:00:00-05:00"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"validityTo"</span><span class="token operator">:</span> <span class="token string">"2024-07-17T00:00:00-05:00"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"trmValue"</span><span class="token operator">:</span> <span class="token number">4035.28</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"validityFrom"</span><span class="token operator">:</span> <span class="token string">"2024-07-17T00:00:00-05:00"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"validityTo"</span><span class="token operator">:</span> <span class="token string">"2024-07-17T00:00:00-05:00"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-unit-tests" tabindex="-1"><a class="header-anchor" href="#_9-unit-tests"><span>9. Unit Tests</span></a></h3>
<h3 id="_9-1-module-import-and-initial-setup" tabindex="-1"><a class="header-anchor" href="#_9-1-module-import-and-initial-setup"><span>9.1 Module Import and Initial Setup</span></a></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="@source/assets/superFinanciera/MTR-importacion de modulos.PNG" alt=""></span></a></h3>
<h3 id="_9-2-test-environment-configuration" tabindex="-1"><a class="header-anchor" href="#_9-2-test-environment-configuration"><span>9.2 Test Environment Configuration</span></a></h3>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="@source/assets/superFinanciera/MTR-configuracion del entorno de pruebas.PNG" alt=""></span></a></h3>
<h3 id="_9-3-method-based-tests" tabindex="-1"><a class="header-anchor" href="#_9-3-method-based-tests"><span>9.3 Method-Based Tests</span></a></h3>
<h4 id="_9-3-1-gethealth" tabindex="-1"><a class="header-anchor" href="#_9-3-1-gethealth"><span>9.3.1 getHealth</span></a></h4>
<p>This test verifies that the service responds correctly when performing a health check:</p>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="@source/assets/superFinanciera/MTR-gethealth.PNG" alt=""></span></a></h3>
<h4 id="_9-3-2-authenticate" tabindex="-1"><a class="header-anchor" href="#_9-3-2-authenticate"><span>9.3.2 authenticate</span></a></h4>
<ul>
<li><strong>Test for successfully obtaining an authentication token:</strong> Simulates a valid response from <code v-pre>axios.post</code>.</li>
<li><strong>Test for handling authentication errors:</strong> Simulates an exception when calling <code v-pre>axios.post</code>.</li>
</ul>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4"><span><img src="@source/assets/superFinanciera/MTR-authenticate.PNG" alt=""></span></a></h3>
<h4 id="_9-3-3-createcurrencyrate" tabindex="-1"><a class="header-anchor" href="#_9-3-3-createcurrencyrate"><span>9.3.3 createCurrencyRate</span></a></h4>
<ul>
<li><strong>Test for successfully creating an exchange rate:</strong> Validates the correct call to the service using <code v-pre>axios</code>.</li>
<li><strong>Test for handling errors when creating an exchange rate:</strong> Simulates an error and verifies handling of the failed response.</li>
</ul>
<h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5"><span><img src="@source/assets/superFinanciera/createcurrencyrate.PNG" alt=""></span></a></h3>
<h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6"><span><img src="@source/assets/superFinanciera/createCurrencyRate2.png" alt=""></span></a></h3>
<h4 id="_9-3-4-updatecurrencyrate" tabindex="-1"><a class="header-anchor" href="#_9-3-4-updatecurrencyrate"><span>9.3.4 updateCurrencyRate</span></a></h4>
<p>Similar to the previous tests but focused on updating exchange rates.</p>
<h4 id="_9-3-5-gettrmtoday" tabindex="-1"><a class="header-anchor" href="#_9-3-5-gettrmtoday"><span>9.3.5 getTrmToday</span></a></h4>
<p>Simulates retrieving SOAP data and handling errors:</p>
<h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7"><span><img src="@source/assets/superFinanciera/GetTRMtoday.png" alt=""></span></a></h3>
<h3 id="_10-annexes" tabindex="-1"><a class="header-anchor" href="#_10-annexes"><span>10. Annexes</span></a></h3>
<h4 id="request" tabindex="-1"><a class="header-anchor" href="#request"><span>Request</span></a></h4>
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
<td>trmValue</td>
<td>Numeric</td>
<td>(10,2)/decimal</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>validityFrom</td>
<td>DateTime</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>validityTo</td>
<td>DateTime</td>
<td></td>
<td></td>
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
<td>Ok, Fail</td>
</tr>
<tr>
<td>2</td>
<td>code</td>
<td>Number</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>5000</td>
<td></td>
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