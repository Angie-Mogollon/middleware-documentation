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
<td>Sprint # 4</td>
</tr>
<tr>
<td>Assigned Team</td>
<td>Team J</td>
</tr>
<tr>
<td>Sprint Start Date</td>
<td>1 November of 2024</td>
</tr>
<tr>
<td>Delivery Date</td>
<td>15 November of 2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objective" tabindex="-1"><a class="header-anchor" href="#_2-objective"><span>2. Objective</span></a></h2>
<p>The objective of the project is to develop Middleware that enables integration between the TOS (OTM) system and Access Control for validating personnel access to port facilities. The system will verify whether individuals have authorized access based on criteria such as enrollment, active social security status, and the absence of sanctions or restrictions. It will also include the capability to process data extracted from emails for access validation.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The sprint focuses on developing Middleware to serve as an intermediary between the TOS (OTM) and the Access Control system for managing personnel access validation to port facilities. This includes receiving validation requests from the TOS (OTM), verifying enrollment, social security status, and the absence of sanctions in Access Control, as well as processing data extracted from emails. The system must ensure quick responses, robust error handling, and compliance with required security and availability standards.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<ul>
<li><strong>RF-01:</strong> The Middleware system must receive a person's information sent by the TOS (OTM) and forward it to Access Control for access validation.</li>
<li><strong>RF-02:</strong> The Middleware must verify with Access Control whether the person is enrolled, has active social security, and is free of restrictions or sanctions.</li>
<li><strong>RF-03:</strong> The Middleware must process emails to extract validation information and send it to Access Control.</li>
<li><strong>RF-04:</strong> The Middleware must properly handle authorization or denial codes and return a response to the TOS (OTM).</li>
<li><strong>RF-05:</strong> The system must include robust error handling for communication failures with Access Control.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-validate-access-from-tos-otm" tabindex="-1"><a class="header-anchor" href="#use-case-1-validate-access-from-tos-otm"><span>Use Case 1: Validate Access from TOS (OTM)</span></a></h4>
<ul>
<li><strong>Actor:</strong> TOS (OTM) System</li>
<li><strong>Preconditions:</strong>
<ul>
<li>The TOS (OTM) system must be operational.</li>
<li>The Middleware must have access to the Access Control API.</li>
</ul>
</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The TOS (OTM) sends the person's information (Identification) to the Middleware.</li>
<li>The Middleware receives and processes the information.</li>
<li>The Middleware sends the validation request to Access Control.</li>
<li>Access Control returns an authorization or denial code.</li>
<li>The Middleware returns the response to the TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The system returns a code indicating whether the person is authorized or denied.</li>
</ul>
<h4 id="use-case-2-validate-social-and-physical-security" tabindex="-1"><a class="header-anchor" href="#use-case-2-validate-social-and-physical-security"><span>Use Case 2: Validate Social and Physical Security</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong> The Middleware must be connected to the Access Control system.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware receives a request to validate a person.</li>
<li>It queries Access Control for the person's social and physical security status.</li>
<li>If the person is enrolled and meets the requirements, access is authorized.</li>
<li>If issues are found, a code is returned with the specific reason.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> Access is either authorized or denied based on the validations performed.</li>
</ul>
<h4 id="use-case-3-extract-data-from-emails-for-validation" tabindex="-1"><a class="header-anchor" href="#use-case-3-extract-data-from-emails-for-validation"><span>Use Case 3: Extract Data from Emails for Validation</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong>
<ul>
<li>Access to the Access Control API.</li>
<li>Configuration to receive emails.</li>
</ul>
</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware receives an email.</li>
<li>It extracts relevant data (e.g., Identification, security details).</li>
<li>Sends the data to Access Control for validation.</li>
<li>Receives the response and takes the appropriate action.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The person is either authorized or denied based on the processed information.</li>
</ul>
<h2 id="_5-validations-requested-by-the-client" tabindex="-1"><a class="header-anchor" href="#_5-validations-requested-by-the-client"><span>5. Validations Requested by the Client</span></a></h2>
<h4 id="v-01-validate-that-the-person-is-enrolled-in-access-control" tabindex="-1"><a class="header-anchor" href="#v-01-validate-that-the-person-is-enrolled-in-access-control"><span>V-01: Validate that the person is enrolled in Access Control</span></a></h4>
<ul>
<li><strong>Description:</strong> The system must verify if the person is registered in Access Control before granting access.</li>
<li><strong>Acceptance Criteria:</strong> If the person is not enrolled, a denial code is returned.</li>
</ul>
<h4 id="v-02-validate-active-social-security-eps-arl" tabindex="-1"><a class="header-anchor" href="#v-02-validate-active-social-security-eps-arl"><span>V-02: Validate Active Social Security (EPS, ARL)</span></a></h4>
<ul>
<li><strong>Description:</strong> The Middleware must ensure that the person's social security is active before granting access.</li>
<li><strong>Acceptance Criteria:</strong> If social security is inactive, a specific error code must be returned.</li>
</ul>
<h4 id="v-03-verification-of-blockages-and-sanctions" tabindex="-1"><a class="header-anchor" href="#v-03-verification-of-blockages-and-sanctions"><span>V-03: Verification of Blockages and Sanctions</span></a></h4>
<ul>
<li><strong>Description:</strong> Before granting access, the system must verify that the person does not have any active blockages or sanctions.</li>
<li><strong>Acceptance Criteria:</strong> If sanctions are detected, a code indicating the reason for denial must be returned.</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>The TOS (OTM) system will provide access to the necessary endpoints and documentation for integration.</li>
<li>The proper functioning of the Access Control system is crucial for access validation.</li>
<li>The client will provide access to a testing environment for the Access Control system.</li>
</ul>
<h2 id="_7-sequence-diagrams" tabindex="-1"><a class="header-anchor" href="#_7-sequence-diagrams"><span>7. Sequence Diagrams</span></a></h2>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="@source/assets/AccesControl/diagrama_de_secuencia_access_720.png" alt=""></span></a></h3>
<h2 id="_8-service-data" tabindex="-1"><a class="header-anchor" href="#_8-service-data"><span>8. Service Data</span></a></h2>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"cedula"</span><span class="token operator">:</span> <span class="token string">"2"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"validationStatus"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sucessfull, the person is able to access."</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-unit-tests" tabindex="-1"><a class="header-anchor" href="#_9-unit-tests"><span>9. Unit Tests</span></a></h2>
<h3 id="_9-1general-configuration" tabindex="-1"><a class="header-anchor" href="#_9-1general-configuration"><span>9.1	General Configuration</span></a></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="@source/assets/AccesControl/configuracion general AC.png" alt=""></span></a></h3>
<h3 id="_9-2gethealth" tabindex="-1"><a class="header-anchor" href="#_9-2gethealth"><span>9.2	getHealth</span></a></h3>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="@source/assets/AccesControl/getHealthAC.PNG" alt=""></span></a></h3>
<h3 id="_9-3verifyidsocial" tabindex="-1"><a class="header-anchor" href="#_9-3verifyidsocial"><span>9.3	verifyIDSocial</span></a></h3>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="@source/assets/AccesControl/verifyIDSocialPNG.PNG" alt=""></span></a></h3>
<h3 id="_9-4processaccesscontrol" tabindex="-1"><a class="header-anchor" href="#_9-4processaccesscontrol"><span>9.4	processAccessControl</span></a></h3>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4"><span><img src="@source/assets/AccesControl/processAccessControlAC.PNG" alt=""></span></a></h3>
<h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5"><span><img src="@source/assets/AccesControl/processAccessControlAC2.PNG" alt=""></span></a></h3>
<h2 id="_10-annexes" tabindex="-1"><a class="header-anchor" href="#_10-annexes"><span>10. Annexes</span></a></h2>
<h4 id="request" tabindex="-1"><a class="header-anchor" href="#request"><span>Request</span></a></h4>
<table>
<thead>
<tr>
<th>No</th>
<th>Field</th>
<th>Type</th>
<th>Size/Format</th>
<th>Domain</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>*NIT</td>
<td>Number</td>
<td>50</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses" tabindex="-1"><a class="header-anchor" href="#responses"><span>Responses</span></a></h4>
<table>
<thead>
<tr>
<th>No</th>
<th>Field</th>
<th>Type</th>
<th>Size/Format</th>
<th>Domain</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>*statusResponse</td>
<td>String</td>
<td>5</td>
<td>True, false</td>
</tr>
<tr>
<td>2</td>
<td>*code</td>
<td>Number</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>*validationStatus</td>
<td>String</td>
<td>5</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>*description</td>
<td>String</td>
<td>250</td>
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
    width: 25%;  /* Ajusta este porcentaje según el número de columnas */
}

/* Estilo para las tablas en pantallas pequeñas */
@media (max-width: 768px) {
    table {
        display: block;  /* Convierte la tabla en un bloque deslizante */
        overflow-x: auto;  /* Permite que la tabla se deslice horizontalmente */
        white-space: nowrap;  /* Evita que el texto se ajuste */
    }
}

</style>