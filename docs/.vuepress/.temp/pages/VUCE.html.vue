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
<td>Sprint # 1</td>
</tr>
<tr>
<td>Assigned Team</td>
<td>Team F</td>
</tr>
<tr>
<td>Sprint Start Date</td>
<td>16 September of 2024</td>
</tr>
<tr>
<td>Delivery Date</td>
<td>20 September of 2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objective" tabindex="-1"><a class="header-anchor" href="#_2-objective"><span>2. Objective</span></a></h2>
<p>The objective of this project is to develop a service in Middleware that receives requests in JSON format from the TOS (OTM), converts them to XML according to VUCE requirements, executes the &quot;Report Container Filling&quot; service from VUCE, and then returns the response in JSON format to the TOS (OTM). This service will enable proper integration between the TOS (OTM) and VUCE systems, optimizing the container filling reporting process, ensuring efficiency, accuracy, and compliance with required standards.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The scope of this service includes receiving requests in JSON format from the TOS (OTM), which will be converted to XML according to the VUCE requirements. The Middleware must execute the &quot;Report Container Filling&quot; service from VUCE, sending the converted information and processing the response received in XML format. The Middleware will then convert this response back to JSON and send it to the TOS (OTM). Additionally, error handling mechanisms will be implemented, such as logging and retries in case of failures, to ensure the reliability of the service. The Middleware must integrate with the TOS (OTM) and VUCE systems, ensuring correct data transfer and efficient process execution. Finally, unit and integration tests will be conducted to validate the functionality of the service.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<ul>
<li><strong>RF-01</strong>: The Middleware must receive a request in JSON format from the TOS (OTM) with the necessary data to process container filling.</li>
<li><strong>RF-02</strong>: The Middleware must correctly convert the JSON request to XML according to the format specifications required by VUCE.</li>
<li><strong>RF-03</strong>: The Middleware must execute the &quot;Report Container Filling&quot; service of VUCE, using the generated XML, to register the container filling.</li>
<li><strong>RF-04</strong>: The Middleware must receive the response from VUCE in XML format, process it, and convert it back to JSON before sending it to the TOS (OTM).</li>
<li><strong>RF-05</strong>: The Middleware must implement appropriate error handling in case of failures during format conversion, execution of the VUCE service, or receiving responses. This should include detailed logs and retry mechanisms.</li>
<li><strong>RF-06</strong>: The Middleware must ensure that all conversions and processing of requests and responses are performed efficiently and without data loss.</li>
<li><strong>RF-07</strong>: The Middleware must ensure that data transmitted between the TOS (OTM) and VUCE is protected and complies with applicable security standards.</li>
<li><strong>RF-08</strong>: The Middleware must have mechanisms in place to ensure continuous service availability, implementing recovery strategies and high availability.</li>
<li><strong>RF-09</strong>: The Middleware must be capable of handling multiple concurrent requests without degrading system performance.</li>
<li><strong>RF-10</strong>: The Middleware must maintain an adequate log of all transactions to ensure traceability of each processed request.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-consult-appointments-from-tos-otm" tabindex="-1"><a class="header-anchor" href="#use-case-1-consult-appointments-from-tos-otm"><span>Use Case 1: Consult Appointments from TOS (OTM)</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the TOS (OTM) API.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware sends a request to TOS (OTM) to query appointments.</li>
<li>TOS (OTM) responds with appointment data.</li>
<li>The Middleware processes the response.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The Middleware has the appointment data for further processing.</li>
</ul>
<h4 id="use-case-2-query-pending-containers-from-vuce" tabindex="-1"><a class="header-anchor" href="#use-case-2-query-pending-containers-from-vuce"><span>Use Case 2: Query Pending Containers from VUCE</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the pending container query service from VUCE.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware requests the list of containers pending scheduling from VUCE.</li>
<li>VUCE responds with the pending container data.</li>
<li>The Middleware processes the obtained data.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The Middleware has the list of pending containers from VUCE for further processing.</li>
</ul>
<h4 id="use-case-3-query-full-export-containers" tabindex="-1"><a class="header-anchor" href="#use-case-3-query-full-export-containers"><span>Use Case 3: Query Full Export Containers</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the full export container API.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware queries the full export containers from VUCE.</li>
<li>The Middleware receives the full container data.</li>
<li>The Middleware executes the &quot;Consult SAE&quot; service to obtain the selectivity of each container.</li>
<li>The Middleware returns the updated list of containers with their selectivity to the TOS (OTM) system.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The TOS (OTM) system receives the updated list of full export containers with their selectivity.</li>
</ul>
<h4 id="use-case-4-query-inspection-schedule-and-location" tabindex="-1"><a class="header-anchor" href="#use-case-4-query-inspection-schedule-and-location"><span>Use Case 4: Query Inspection Schedule and Location</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the &quot;Send inspection schedule and location&quot; service from VUCE.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware receives a request in JSON format from TOS (OTM).</li>
<li>The Middleware converts the JSON request to XML according to VUCE's requirements.</li>
<li>The Middleware executes the &quot;Send inspection schedule and location&quot; service from VUCE.</li>
<li>The Middleware receives the response from VUCE and converts it from XML to JSON.</li>
<li>The Middleware returns the response in JSON format to TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The TOS (OTM) system receives the processed response with the inspection schedule and location.</li>
</ul>
<h4 id="use-case-5-send-general-cargo-entry" tabindex="-1"><a class="header-anchor" href="#use-case-5-send-general-cargo-entry"><span>Use Case 5: Send General Cargo Entry</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the &quot;Send general cargo entry&quot; service from VUCE.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware receives a request in JSON format from TOS (OTM).</li>
<li>The Middleware converts the JSON request to XML according to VUCE's requirements.</li>
<li>The Middleware executes the &quot;Send general cargo entry&quot; service from VUCE.</li>
<li>The Middleware receives the response from VUCE and converts it from XML to JSON.</li>
<li>The Middleware returns the response in JSON format to TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The TOS (OTM) system receives the processed response with the general cargo entry.</li>
</ul>
<h4 id="use-case-6-general-cargo-filling-scheduling" tabindex="-1"><a class="header-anchor" href="#use-case-6-general-cargo-filling-scheduling"><span>Use Case 6: General Cargo Filling Scheduling</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the &quot;General cargo filling scheduling&quot; service from VUCE.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware receives a request in JSON format from TOS (OTM).</li>
<li>The Middleware converts the JSON request to XML according to VUCE's requirements.</li>
<li>The Middleware executes the &quot;General cargo filling scheduling&quot; service from VUCE.</li>
<li>The Middleware receives the response from VUCE and converts it from XML to JSON.</li>
<li>The Middleware returns the response in JSON format to TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The TOS (OTM) system receives the processed response with the general cargo filling scheduling.</li>
</ul>
<h4 id="use-case-7-report-container-filling" tabindex="-1"><a class="header-anchor" href="#use-case-7-report-container-filling"><span>Use Case 7: Report Container Filling</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the &quot;Report container filling&quot; service from VUCE.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware receives a request in JSON format from TOS (OTM).</li>
<li>The Middleware converts the JSON request to XML according to VUCE's requirements.</li>
<li>The Middleware executes the &quot;Report container filling&quot; service from VUCE.</li>
<li>The Middleware receives the response from VUCE and converts it from XML to JSON.</li>
<li>The Middleware returns the response in JSON format to TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The TOS (OTM) system receives the processed response with the container filling report.</li>
</ul>
<h4 id="use-case-8-check-container-filling-status" tabindex="-1"><a class="header-anchor" href="#use-case-8-check-container-filling-status"><span>Use Case 8: Check Container Filling Status</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The Middleware has access to the service to check the filling status of containers.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>The Middleware makes a request to VUCE to check the filling status of the containers.</li>
<li>VUCE responds with the filling status data of the containers.</li>
<li>The Middleware processes the response and extracts the required data.</li>
<li>The Middleware returns the processed data to the TOS (OTM) system.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The TOS (OTM) system receives the data about the filling status of the containers.</li>
</ul>
<h2 id="_5-validations-requested-by-the-client" tabindex="-1"><a class="header-anchor" href="#_5-validations-requested-by-the-client"><span>5. Validations Requested by the Client</span></a></h2>
<h4 id="v-01-appointment-validation" tabindex="-1"><a class="header-anchor" href="#v-01-appointment-validation"><span>V-01: Appointment Validation</span></a></h4>
<ul>
<li><strong>Description</strong>: Verify that the appointments received from the TOS (OTM) system are valid, with complete and correct data according to the client's requirements.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The appointments must include the required fields: date, time, vehicle, driver, and load type.</li>
<li>If any data is missing, the Middleware must return an appropriate error.</li>
<li>The Middleware must correctly process valid appointments and send them to the corresponding system.</li>
</ul>
</li>
</ul>
<h4 id="v-02-vehicle-validation" tabindex="-1"><a class="header-anchor" href="#v-02-vehicle-validation"><span>V-02: Vehicle Validation</span></a></h4>
<ul>
<li><strong>Description</strong>: Ensure that the vehicle making the request or action in TOS (OTM) is registered and authorized according to the company's criteria.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The vehicle must have an active registration in the TOS (OTM) system and be authorized for the required operations.</li>
<li>If the vehicle is not registered or authorized, the Middleware must return an appropriate error message, indicating the reason for the invalidation.</li>
</ul>
</li>
</ul>
<h4 id="v-03-driver-validation" tabindex="-1"><a class="header-anchor" href="#v-03-driver-validation"><span>V-03: Driver Validation</span></a></h4>
<ul>
<li><strong>Description</strong>: Verify that the driver associated with the operation in TOS (OTM) is registered and authorized to operate the vehicle.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The driver must be registered in the system with a valid license and without any restrictions that prevent their operation.</li>
<li>If the driver does not meet the requirements, the Middleware must return an error indicating the reason for the invalidation.</li>
</ul>
</li>
</ul>
<h4 id="v-04-manifest-validation" tabindex="-1"><a class="header-anchor" href="#v-04-manifest-validation"><span>V-04: Manifest Validation</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the cargo manifest is complete, legible, and matches the cargo details in TOS (OTM).</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The manifest must contain complete information about the cargo (type, quantity, destination, and other details).</li>
<li>If the manifest has missing or incorrect information, the Middleware must return a specific error about the cause of the rejection.</li>
</ul>
</li>
</ul>
<h4 id="v-05-load-validation" tabindex="-1"><a class="header-anchor" href="#v-05-load-validation"><span>V-05: Load Validation</span></a></h4>
<ul>
<li><strong>Description</strong>: Verify that the load registered in TOS (OTM) is correctly specified and compatible with the required characteristics.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The load must be correctly detailed in type, weight, volume, and handling characteristics.</li>
<li>If the load does not meet the requirements or is incomplete, the Middleware must return an error message indicating the problem.</li>
</ul>
</li>
</ul>
<h4 id="v-06-container-weight-validation" tabindex="-1"><a class="header-anchor" href="#v-06-container-weight-validation"><span>V-06: Container Weight Validation</span></a></h4>
<ul>
<li><strong>Description</strong>: Ensure that the container weight registered in TOS (OTM) matches the data from the weighing system or the prior specifications.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The registered weight must be consistent with the values provided by the weighing system.</li>
<li>If the weight is incorrect or inconsistent, the Middleware must return an error specifying the inconsistency.</li>
</ul>
</li>
</ul>
<h4 id="v-07-validation-of-loading-schedule" tabindex="-1"><a class="header-anchor" href="#v-07-validation-of-loading-schedule"><span>V-07: Validation of Loading Schedule</span></a></h4>
<ul>
<li><strong>Description</strong>: Confirm that the loading schedule for the cargo is correctly defined according to the requirements of VUCE and the TOS (OTM) system.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The schedule must include the date, time, and details of the loading location.</li>
<li>If the schedule is incomplete or invalid, the Middleware must return an appropriate error message.</li>
</ul>
</li>
</ul>
<h4 id="v-08-validation-of-inspection-time-and-location" tabindex="-1"><a class="header-anchor" href="#v-08-validation-of-inspection-time-and-location"><span>V-08: Validation of Inspection Time and Location</span></a></h4>
<ul>
<li><strong>Description</strong>: Ensure that the inspection time and location for the container are correctly defined and accessible according to the schedule and rules of VUCE.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The inspection time and location must match the VUCE data and fall within the available times and locations.</li>
<li>If the data is invalid, the Middleware must generate an error message with details of the failure.</li>
</ul>
</li>
</ul>
<h4 id="v-09-validation-of-container-filling-report" tabindex="-1"><a class="header-anchor" href="#v-09-validation-of-container-filling-report"><span>V-09: Validation of Container Filling Report</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the container filling report is accurate and meets the requirements of VUCE.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The report must include the correct container information, such as filling data, type of cargo, and the container used.</li>
<li>If the report is incorrect or incomplete, the Middleware must return an error indicating the cause.</li>
</ul>
</li>
</ul>
<h4 id="v-10-validation-of-container-data-consistency" tabindex="-1"><a class="header-anchor" href="#v-10-validation-of-container-data-consistency"><span>V-10: Validation of Container Data Consistency</span></a></h4>
<ul>
<li><strong>Description</strong>: Confirm that the container data in the TOS (OTM) system is consistent with that of VUCE.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>Container details, such as the number, type, and status, must match between TOS (OTM) and VUCE.</li>
<li>If there are discrepancies, the Middleware must generate an error and provide details of the inconsistency.</li>
</ul>
</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>The Middleware depends on the availability and proper functioning of the TOS (OTM) services to receive and send data related to appointments, containers, general cargo, and other logistics processes.</li>
<li>The Middleware depends on the availability and access to VUCE services to perform tasks such as querying pending containers, scheduling general cargo filling, and generating container filling reports.</li>
<li>The Middleware and the involved systems require a stable internet connection to communicate with TOS (OTM) and VUCE via their APIs.</li>
<li>The Middleware depends on having valid access credentials and appropriate permissions to interact with the TOS (OTM) and VUCE APIs.</li>
<li>The Middleware depends on the availability and accuracy of the data provided by the weighing system to validate the weight of containers before processing them.</li>
<li>The Middleware must coordinate with the inspection systems to obtain the schedules and locations of container inspections, which may depend on the availability of such information.</li>
<li>The Middleware and all involved systems need to have properly configured testing environments for integration and functionality testing.</li>
<li>The Middleware depends on the JSON and XML data formats, used for communication between TOS (OTM) and VUCE, being updated according to the standards and requirements set by both platforms.</li>
</ul>
<h2 id="_7-sequence-diagrams" tabindex="-1"><a class="header-anchor" href="#_7-sequence-diagrams"><span>7. Sequence Diagrams</span></a></h2>
<p><em>(Aquí se deben incluir los diagramas de secuencia para ilustrar el flujo de comunicación y procesos entre el Middleware, TOS (OTM), VUCE y otros sistemas involucrados. Agrega los diagramas correspondientes en esta sección)</em></p>
<h2 id="_8-service-data" tabindex="-1"><a class="header-anchor" href="#_8-service-data"><span>8. Service Data</span></a></h2>
<h3 id="_8-1-report-sae" tabindex="-1"><a class="header-anchor" href="#_8-1-report-sae"><span>8.1 Report SAE</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"sae"</span><span class="token operator">:</span> <span class="token string">"Valor del campo SAE"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"container"</span><span class="token operator">:</span> <span class="token string">"Valor del campo container"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"sticker"</span><span class="token operator">:</span> <span class="token string">"Valor del campo sticker"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"seals"</span><span class="token operator">:</span> <span class="token string">"Valor del campo seals"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"idCarga"</span><span class="token operator">:</span> <span class="token string">"Valor del campo idCarga"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"boardingPlaceCode"</span><span class="token operator">:</span> <span class="token string">"Valor del campo boardingPlaceCode"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"vesselName"</span><span class="token operator">:</span> <span class="token string">"Valor del campo vesselName"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"visitNbr"</span><span class="token operator">:</span> <span class="token string">"Valor del campo visitNbr"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckCompany"</span><span class="token operator">:</span> <span class="token string">"Valor del campo truckCompany"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckLicence"</span><span class="token operator">:</span> <span class="token string">"Valor del campo truckLicence"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"driverName"</span><span class="token operator">:</span> <span class="token string">"Valor del campo driverName"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"driverId"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"isoCode"</span><span class="token operator">:</span> <span class="token string">"Valor del campo isoCode"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"numFormatoIngresoZP "</span><span class="token operator">:</span> <span class="token string">"Valor del campo isoCode"</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"dianForm"</span><span class="token operator">:</span><span class="token string">"1158765289712"</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2get-selectivity" tabindex="-1"><a class="header-anchor" href="#_8-2get-selectivity"><span>8.2	Get Selectivity</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"containers"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"inspectionNbr"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"statusRequest"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"container"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"statusContainer"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"selectivityInformation"</span><span class="token operator">:</span> <span class="token string">"String"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"inspectionNbr"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"statusRequest"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"container"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"statusContainer"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"selectivityInformation"</span><span class="token operator">:</span> <span class="token string">"String"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-send-inspection-location-and-times-schedule" tabindex="-1"><a class="header-anchor" href="#_8-3-send-inspection-location-and-times-schedule"><span>8.3 Send Inspection location and times (Schedule)</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"boardingPlaceCode"</span><span class="token operator">:</span> <span class="token string">"ABC123"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"dateTimeInspection"</span><span class="token operator">:</span> <span class="token string">"2024-07-22T10:30:00"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"cargoType"</span><span class="token operator">:</span> <span class="token string">"Fruit"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"container"</span><span class="token operator">:</span> <span class="token string">"Container123"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"remarks"</span><span class="token operator">:</span> <span class="token string">"No issues found"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"inspectionPlaceCode"</span><span class="token operator">:</span> <span class="token string">"XYZ789"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"statusSelectivity "</span><span class="token operator">:</span> <span class="token string">"agendado "</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4send-gatein-general-cargo" tabindex="-1"><a class="header-anchor" href="#_8-4send-gatein-general-cargo"><span>8.4	Send GateIn General Cargo</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"serviceNbr"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"shippingLine"</span><span class="token operator">:</span> <span class="token string">"ABC Shipping Co."</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"vessel"</span><span class="token operator">:</span> <span class="token string">"MV Example"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"visitNbr"</span><span class="token operator">:</span> <span class="token string">"V001"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"cargoId"</span><span class="token operator">:</span> <span class="token string">"CARGO-001"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">500.75</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"sae"</span><span class="token operator">:</span> <span class="token string">"SAE-789"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckCompany"</span><span class="token operator">:</span> <span class="token string">"XYZ Transport"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckLicense"</span><span class="token operator">:</span> <span class="token string">"XYZ-1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"driverName"</span><span class="token operator">:</span> <span class="token string">"John Doe"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"driverId"</span><span class="token operator">:</span> <span class="token string">"D123456"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"boardingPlaceCode"</span><span class="token operator">:</span> <span class="token string">"BPC-567"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"></span>
<span class="line">Response</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5send-stuffing-schedule" tabindex="-1"><a class="header-anchor" href="#_8-5send-stuffing-schedule"><span>8.5	Send stuffing schedule</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"boardingPlaceCode"</span><span class="token operator">:</span> <span class="token string">"BPC-567"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"dateTimeInspection"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"operationType"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"programmingTime"</span><span class="token operator">:</span> <span class="token string">"10:30:05"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"programmingDate"</span><span class="token operator">:</span> <span class="token string">"2024-07-22"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"programminNbr"</span><span class="token operator">:</span> <span class="token string">"PN-123"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"inspectionPlaceCode"</span><span class="token operator">:</span> <span class="token string">"IPC-789"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"consecutiveFilling"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"update"</span><span class="token operator">:</span> <span class="token string">"N"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"reschedule"</span><span class="token operator">:</span> “N”<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6send-stuffed-containers" tabindex="-1"><a class="header-anchor" href="#_8-6send-stuffed-containers"><span>8.6	Send stuffed containers</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"programmingNbr"</span><span class="token operator">:</span> <span class="token string">"PN-456"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"consecutiveStuffing"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"seals"</span><span class="token operator">:</span> <span class="token string">"SEAL-789"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"container"</span><span class="token operator">:</span> <span class="token string">"Container-123"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"serviceNbr"</span><span class="token operator">:</span> <span class="token number">98765</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"loaded"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"reason"</span><span class="token operator">:</span> <span class="token string">"Inspection required"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-unit-tests" tabindex="-1"><a class="header-anchor" href="#_9-unit-tests"><span>9. Unit Tests</span></a></h2>
<p><em>(En esta sección se deben incluir detalles de las pruebas unitarias realizadas en el Middleware. Incluye una descripción de los casos de prueba, los módulos probados, los resultados esperados y los resultados obtenidos. Asegúrate de mencionar cualquier herramienta de pruebas utilizada y el nivel de cobertura alcanzado)</em></p>
<h2 id="_10-annexes" tabindex="-1"><a class="header-anchor" href="#_10-annexes"><span>10. Annexes</span></a></h2>
<h3 id="_10-1-report-sae" tabindex="-1"><a class="header-anchor" href="#_10-1-report-sae"><span>10.1 Report SAE</span></a></h3>
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
<td>sae</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>container</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>sticker</td>
<td>String</td>
<td>35</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>seals</td>
<td>String</td>
<td>35</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>idCarga</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>boardingPlaceCode</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>vesselName</td>
<td>String</td>
<td>128</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>visitNbr</td>
<td>String</td>
<td>32</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>truckCompany</td>
<td>String</td>
<td>255</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>truckLicence</td>
<td>String</td>
<td>30</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>driverName</td>
<td>String</td>
<td>255</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>driverId</td>
<td>Number</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>isoCode</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>numFormatoIngresoZP</td>
<td>String</td>
<td>20</td>
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
<td>True, false</td>
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
<tr>
<td>4</td>
<td>dianForm</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_10-2-get-selectivity" tabindex="-1"><a class="header-anchor" href="#_10-2-get-selectivity"><span>10.2 Get Selectivity</span></a></h3>
<h4 id="request-1" tabindex="-1"><a class="header-anchor" href="#request-1"><span>Request</span></a></h4>
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
<td>containers</td>
<td>Array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>inspectionNbr</td>
<td>String</td>
<td>50</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>statusRequest</td>
<td>String</td>
<td>50</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>container</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>statusContainer</td>
<td>String</td>
<td>50</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>selectivityInformation</td>
<td>String</td>
<td>50</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses-1" tabindex="-1"><a class="header-anchor" href="#responses-1"><span>Responses</span></a></h4>
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
<h3 id="_10-3-send-inspection-location-and-times-schedule" tabindex="-1"><a class="header-anchor" href="#_10-3-send-inspection-location-and-times-schedule"><span>10.3 Send Inspection Location and Times (Schedule)</span></a></h3>
<h4 id="request-2" tabindex="-1"><a class="header-anchor" href="#request-2"><span>Request</span></a></h4>
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
<td>boardingPlaceCode</td>
<td>String</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>dateTimeInspection</td>
<td>String</td>
<td>19 / AAAA-MM-DD HH:MM:SS</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>cargoType</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>container</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>remarks</td>
<td>String</td>
<td>500</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>inspectionPlaceCode</td>
<td>String</td>
<td>4</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses-2" tabindex="-1"><a class="header-anchor" href="#responses-2"><span>Responses</span></a></h4>
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
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>5000</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>statusSelectivity</td>
<td>String</td>
<td>30</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_10-4-send-gatein-general-cargo" tabindex="-1"><a class="header-anchor" href="#_10-4-send-gatein-general-cargo"><span>10.4 Send GateIn General Cargo</span></a></h3>
<h4 id="request-3" tabindex="-1"><a class="header-anchor" href="#request-3"><span>Request</span></a></h4>
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
<td>serviceNbr</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>shippinLine</td>
<td>String</td>
<td>255</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>vessel</td>
<td>String</td>
<td>128</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>visitNbr</td>
<td>String</td>
<td>128</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>cargoId</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>weight</td>
<td>Number decimal</td>
<td>12.2</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>sae</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>truckCompany</td>
<td>String</td>
<td>255</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>truckLicense</td>
<td>String</td>
<td>30</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>driverName</td>
<td>String</td>
<td>255</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>driverId</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>boardingPlaceCode</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses-3" tabindex="-1"><a class="header-anchor" href="#responses-3"><span>Responses</span></a></h4>
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
<h3 id="_10-5-send-stuffing-schedule" tabindex="-1"><a class="header-anchor" href="#_10-5-send-stuffing-schedule"><span>10.5 Send Stuffing Schedule</span></a></h3>
<h4 id="request-4" tabindex="-1"><a class="header-anchor" href="#request-4"><span>Request</span></a></h4>
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
<td>boardingPlaceCode</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>dateTimeInspection</td>
<td>String</td>
<td>19 / AAAA-MM-DD HH:MM:SS</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>operationType</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>programmingTime</td>
<td>String</td>
<td>9 / T00:00:00</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>programmingDate</td>
<td>Date</td>
<td>10 / AAAA-MM-DD</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>programmingNbr</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>inspectionPlaceCode</td>
<td>String</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>consecutiveStuffing</td>
<td>Number</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>update</td>
<td>String</td>
<td>1</td>
<td>S: Yes, N: No</td>
</tr>
<tr>
<td>10</td>
<td>reschedule</td>
<td>String</td>
<td>1</td>
<td>S: Yes, N: No</td>
</tr>
</tbody>
</table>
<h4 id="responses-4" tabindex="-1"><a class="header-anchor" href="#responses-4"><span>Responses</span></a></h4>
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
<h3 id="_10-6-send-stuffed-containers" tabindex="-1"><a class="header-anchor" href="#_10-6-send-stuffed-containers"><span>10.6 Send Stuffed Containers</span></a></h3>
<h4 id="request-5" tabindex="-1"><a class="header-anchor" href="#request-5"><span>Request</span></a></h4>
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
<td>programmingNbr</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>consecutiveStuffing</td>
<td>Number</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>seals</td>
<td>String</td>
<td>35</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>container</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>serviceNbr</td>
<td>Number</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>loaded</td>
<td>String</td>
<td>2</td>
<td>SI, NO</td>
</tr>
<tr>
<td>7</td>
<td>reason</td>
<td>String</td>
<td>4</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses-5" tabindex="-1"><a class="header-anchor" href="#responses-5"><span>Responses</span></a></h4>
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

/* Estilo para las tablas en pantallas pequeñas */
@media (max-width: 768px) {
    table {
        display: block;  /* Convierte la tabla en un bloque deslizante */
        overflow-x: auto;  /* Permite que la tabla se deslice horizontalmente */
        white-space: nowrap;  /* Evita que el texto se ajuste */
    }
}
</style>