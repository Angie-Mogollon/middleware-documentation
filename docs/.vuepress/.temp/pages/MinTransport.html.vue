<template><div><h1 id="functional-requirements-delivery" tabindex="-1"><a class="header-anchor" href="#functional-requirements-delivery"><span>Functional Requirements Delivery</span></a></h1>
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
<td>Sprint # 1</td>
</tr>
<tr>
<td>Assigned Team</td>
<td>Team G</td>
</tr>
<tr>
<td>Sprint Start Date</td>
<td>16 September of 2024</td>
</tr>
<tr>
<td>Delivery Date</td>
<td>20 September of  2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objective" tabindex="-1"><a class="header-anchor" href="#_2-objective"><span>2. Objective</span></a></h2>
<p>Develop a set of Middleware services to validate vehicle, driver, and manifest data with the Ministry of Transport, consolidating responses and notifying the TOS (OTM) if entry is permitted or if there are any issues, as well as performing the necessary validations for the &quot;appointment validation&quot; service.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The scope includes the validation of vehicle, driver, and manifest data, integrating with the Ministry of Transport to verify the validity of licenses, license plates, SOAT (Mandatory Insurance), and technical-mechanical inspections (RTM), as well as the authenticity and status of the manifests. These validations are consolidated and returned to the TOS (OTM) system or the &quot;appointment validation&quot; service, ensuring that the provided data meets the necessary requirements for entry into the logistics system.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1. General Description</span></a></h3>
<p><strong>Ministry of Transport - Appointment Validation</strong></p>
<ul>
<li><strong>RF-01</strong>: The Middleware must receive the request with the vehicle, driver, and manifest data from the TOS (OTM).</li>
<li><strong>RF-02</strong>: The Middleware must execute the validation services for the driver, vehicle, and manifest.</li>
<li><strong>RF-03</strong>: The Middleware must consolidate the validation responses.</li>
<li><strong>RF-04</strong>: If all validations are correct, the Middleware must notify the TOS (OTM) that entry is permitted.</li>
<li><strong>RF-05</strong>: If any validation fails, the Middleware must notify the TOS (OTM) with the corresponding issue.</li>
<li><strong>RF-06</strong>: The Middleware must take the driver's ID and perform the validation with the Ministry of Transport.</li>
<li><strong>RF-07</strong>: Verify that the driver's license is of type C2 or C3 and that it is not expired.</li>
<li><strong>RF-08</strong>: Return the response with the license validation to the &quot;appointment validation&quot; service.</li>
<li><strong>RF-09</strong>: The Middleware must validate the vehicle's license plate with the Ministry of Transport.</li>
<li><strong>RF-10</strong>: Verify that the registration, SOAT (Mandatory Insurance), and technical-mechanical inspection (RTM) of the vehicle are not expired.</li>
<li><strong>RF-11</strong>: Retornar la respuesta con la validación del vehículo al servicio “validación de citas”.</li>
<li><strong>RF-12</strong>: The Middleware must validate the manifest with the Ministry of Transport.</li>
<li><strong>RF-13</strong>: Verify that the license plate and the driver's document match the information in the manifest.</li>
<li><strong>RF-14</strong>: Validate the active status of the manifest and the Import and Export movements according to the PBCU code.</li>
<li><strong>RF-15</strong>: If the value of the manifest exceeds 500,000,001, the validation must be inhibited.</li>
<li><strong>RF-16</strong>: Return the response with the manifest validation to the &quot;appointment validation&quot; service.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2. Use Cases</span></a></h3>
<h4 id="use-case-1-validate-appointments" tabindex="-1"><a class="header-anchor" href="#use-case-1-validate-appointments"><span>Use Case 1: Validate Appointments</span></a></h4>
<ul>
<li><strong>Actor:</strong> TOS (OTM)</li>
<li><strong>Preconditions:</strong> The Middleware receives the appointment data from the TOS (OTM) system.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware takes the appointment data.</li>
<li>It validates that all required data (driver, vehicle, manifest) is present.</li>
<li>The validations for each related entity (driver, vehicle, manifest) are executed.</li>
<li>The response is returned to the TOS (OTM) system with the appointment validation.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The appointment is either successfully validated or an issue is reported.</li>
</ul>
<h4 id="use-case-2-validate-driver" tabindex="-1"><a class="header-anchor" href="#use-case-2-validate-driver"><span>Use Case 2: Validate Driver</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware receives a driver's ID from the TOS (OTM).</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware takes the driver's ID.</li>
<li>The Middleware validates the driver's license with the Ministry of Transport.</li>
<li>The Middleware verifies that the license is of type C2 or C3 and that it is not expired.</li>
<li>The Middleware returns the validation to the TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The validation of the driver's license is completed successfully.</li>
</ul>
<h4 id="use-case-3-validate-vehicle" tabindex="-1"><a class="header-anchor" href="#use-case-3-validate-vehicle"><span>Use Case 3: Validate Vehicle</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware receives a vehicle's license plate from the TOS (OTM).</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware validates the vehicle's registration with the Ministry of Transport.</li>
<li>The Middleware verifies that the registration, SOAT, and RTM are valid.</li>
<li>The Middleware returns the validation to the TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The vehicle validation is completed successfully.</li>
</ul>
<h4 id="use-case-4-validate-manifest" tabindex="-1"><a class="header-anchor" href="#use-case-4-validate-manifest"><span>Use Case 4: Validate Manifest</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware receives a manifest from the TOS (OTM).</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware captures and validates the manifest with the Ministry of Transport.</li>
<li>The Middleware verifies the match between the license plate and the driver's document.</li>
<li>The Middleware checks the active status of the manifest and its movement.</li>
<li>The Middleware inhibits the validation if the value of the manifest exceeds 500,000,001.</li>
<li>The Middleware returns the validation to the TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The manifest validation is completed successfully.</li>
</ul>
<h2 id="_5-client-requested-validations" tabindex="-1"><a class="header-anchor" href="#_5-client-requested-validations"><span>5. Client-Requested Validations</span></a></h2>
<h4 id="v-01-appointment-validation" tabindex="-1"><a class="header-anchor" href="#v-01-appointment-validation"><span>V-01: Appointment Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> The system must validate the appointment data, ensuring that all necessary information has been provided and that the validations for the driver, vehicle, and manifest are successful.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The required appointment data must be present.</li>
<li>All associated validations (driver, vehicle, manifest) must be successful.</li>
<li>The response must be sent correctly to the TOS (OTM) system.</li>
</ul>
</li>
</ul>
<h4 id="v-02-validacion-de-datos-del-conductor" tabindex="-1"><a class="header-anchor" href="#v-02-validacion-de-datos-del-conductor"><span>V-02: Validación de Datos del Conductor</span></a></h4>
<ul>
<li><strong>Description:</strong> Validar la cédula y licencia del conductor.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The license must be of type C2 or C3 and not expired.</li>
</ul>
</li>
</ul>
<h4 id="v-03-validacion-del-vehiculo" tabindex="-1"><a class="header-anchor" href="#v-03-validacion-del-vehiculo"><span>V-03: Validación del Vehículo</span></a></h4>
<ul>
<li><strong>Description:</strong> Validar la placa del vehículo y verificar la matrícula, SOAT y RTM.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The registration must be valid, and both the SOAT and the RTM must not be expired.</li>
</ul>
</li>
</ul>
<h4 id="v-04-validacion-del-manifiesto" tabindex="-1"><a class="header-anchor" href="#v-04-validacion-del-manifiesto"><span>V-04: Validación del Manifiesto</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify the existence of the manifest, the match between the license plate and the driver's document, and that the manifest is active.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The manifest must be active.</li>
</ul>
</li>
<li>The received license plate must match the plate on the manifest.</li>
<li>The driver's document must match one of the documents registered on the manifest.</li>
<li>For Import movements, the origin must match the PBCU code.</li>
<li>For Export movements, the destination must match the PBCU code.</li>
<li>If the value of the manifest exceeds 500,000,001, the validation is inhibited.</li>
</ul>
<h3 id="_5-1-error-handling" tabindex="-1"><a class="header-anchor" href="#_5-1-error-handling"><span>5.1.	Error Handling</span></a></h3>
<ul>
<li>All errors must be logged in a logging system for auditing.</li>
<li>The system must have an error handling and notification mechanism in case of validation failures.</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>It is assumed that the Middleware has access to the services of the Ministry of Transport.</li>
<li>The system depends on the availability and stability of the external services provided by the Ministry of Transport.</li>
<li>The TOS (OTM) must provide the correct data in the appropriate format for validation.</li>
</ul>
<h2 id="_7-service-data" tabindex="-1"><a class="header-anchor" href="#_7-service-data"><span>7. Service Data</span></a></h2>
<h3 id="documentation-swagger-ambiente-dev" tabindex="-1"><a class="header-anchor" href="#documentation-swagger-ambiente-dev"><span>Documentation Swagger - Ambiente DEV</span></a></h3>
<p><strong>URL</strong>: <a href="https://middleware-dev-bcdmasc4gjehe3db.westus-01.azurewebsites.net/api-docs#/" target="_blank" rel="noopener noreferrer">Swagger DEV</a></p>
<h3 id="input-parameters" tabindex="-1"><a class="header-anchor" href="#input-parameters"><span>Input Parameters</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"validationType"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"truck"</span><span class="token operator">:</span> <span class="token string">"USB101"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"driver"</span><span class="token operator">:</span> <span class="token string">"1054921789"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"manifestNbr"</span><span class="token operator">:</span> <span class="token number">95200330</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"truckCompanyId"</span><span class="token operator">:</span> <span class="token string">"8001009456"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"appointmentDate"</span><span class="token operator">:</span> <span class="token string">"2024-12-01"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"classCargo"</span><span class="token operator">:</span> <span class="token string">"Import"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-response" tabindex="-1"><a class="header-anchor" href="#service-response"><span>Service Response</span></a></h3>
<h4 id="successful-result" tabindex="-1"><a class="header-anchor" href="#successful-result"><span>Successful Result</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"endpoint processed successfully"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2024-09-19T21:28:04:961Z"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"statusCode"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"StatusValidation"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"licenseCatCod"</span><span class="token operator">:</span> <span class="token string">"C3"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"licenseNbr"</span><span class="token operator">:</span> <span class="token string">"1054921789"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"registrationStatus"</span><span class="token operator">:</span> <span class="token string">"ACTIVE"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"licenceExpDate"</span><span class="token operator">:</span> <span class="token string">"2027-03-04"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"soatExpDate"</span><span class="token operator">:</span> <span class="token string">"2024-11-01"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"rtmExpDate"</span><span class="token operator">:</span> <span class="token string">"2025-03-11"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2024-09-22T00:03:13.694Z"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"statusCode"</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="result-with-errors" tabindex="-1"><a class="header-anchor" href="#result-with-errors"><span>Result with Errors</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"endpoint processed with errors"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Fail"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"VLD001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Driver validation error: 10549217829, The license Not found."</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Fail"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"VHL001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Vehicle validation error, Vehicle Not found."</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Fail"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"VMF003"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"The driver 1054921789 is not associated with the cargo manifest: 95200330"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2024-09-22T00:03:56.833Z"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"statusCode"</span><span class="token operator">:</span> <span class="token number">500</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Error processing endpoint"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Fail"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"VLD004"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Driver validation error: (10549217829). Error consuming service: read ECONNRESET"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2024-09-22T00:08:38.567Z"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"statusCode"</span><span class="token operator">:</span> <span class="token number">500</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="screenshot-swagger" tabindex="-1"><a class="header-anchor" href="#screenshot-swagger"><span>Screenshot Swagger</span></a></h3>
<h4 id="request-body" tabindex="-1"><a class="header-anchor" href="#request-body"><span>Request Body:</span></a></h4>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="@source/assets/minTransport/MinTransRequestBody.png" alt=""></span></a></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="@source/assets/minTransport/MinTransValidationRequestDto.png" alt=""></span></a></h3>
<h2 id="_8-unit-tests" tabindex="-1"><a class="header-anchor" href="#_8-unit-tests"><span>8. Unit Tests</span></a></h2>
<h3 id="escenario-ok" tabindex="-1"><a class="header-anchor" href="#escenario-ok"><span>Escenario Ok: <img src="@source/assets/minTransport/pruebasUnitarias/escenarioOk.png" alt=""></span></a></h3>
<h3 id="manejo-de-errores" tabindex="-1"><a class="header-anchor" href="#manejo-de-errores"><span>Manejo de Errores: <img src="@source/assets/minTransport/pruebasUnitarias/manejoErrores1.png" alt=""></span></a></h3>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="@source/assets/minTransport/pruebasUnitarias/manejoErrores2.png" alt=""></span></a></h3>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="@source/assets/minTransport/pruebasUnitarias/manejoErrores3.png" alt=""></span></a></h3>
<h2 id="_9-annexes" tabindex="-1"><a class="header-anchor" href="#_9-annexes"><span>9. Annexes</span></a></h2>
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
<h4 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>Error</span></a></h4>
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
<h4 id="exception-codes" tabindex="-1"><a class="header-anchor" href="#exception-codes"><span>Exception Codes</span></a></h4>
<h4 id="driver-validation" tabindex="-1"><a class="header-anchor" href="#driver-validation"><span>Driver Validation</span></a></h4>
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
<h4 id="vehicle-validation" tabindex="-1"><a class="header-anchor" href="#vehicle-validation"><span>Vehicle Validation</span></a></h4>
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
<h4 id="manifest-validation" tabindex="-1"><a class="header-anchor" href="#manifest-validation"><span>Manifest Validation</span></a></h4>
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
<td>For export movements, the destination must be '05837000'. The destination recorded in the cargo manifest is: <code v-pre>$manifest.DESTINO}</code></td>
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