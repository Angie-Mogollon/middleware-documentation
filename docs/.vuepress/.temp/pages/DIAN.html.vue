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
<td>23 September of 2024</td>
</tr>
<tr>
<td>Delivery Date</td>
<td>11 October of 2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objective" tabindex="-1"><a class="header-anchor" href="#_2-objective"><span>2. Objective</span></a></h2>
<p>Develop a Middleware that enables authentication and communication between the TOS (Terminal Operating System) and DIAN services, facilitating the management of imports. The Middleware must manage authentication, consultation, and the sending of documents (manifests, BLs, ARIM, among others) and process the responses to send them to the TOS in an automated and efficient manner.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The sprint scope includes the integration and automation of processes with DIAN, ensuring authentication for obtaining and renewing tokens, which allows secure and continuous access to the entity's services. It includes the automated processing of requests related to the completion of vessels, consultation of manifests and BLs, and the reporting of forms, ensuring efficient document and operational management. Additionally, it encompasses sending responses from DIAN to the TOS system, complying with the required formats, as well as the automated management of the consultation and sending of reception and dispatch forms, optimizing information exchange and facilitating logistical processes. Finally, it addresses the handling of detailed reports and tags related to imports, consolidating operational information.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<p><strong>DIAN – Authentication Scheme for Interoperability with External Systems</strong></p>
<ul>
<li><strong>FR-01:</strong> The Middleware must manage authentication with DIAN by obtaining a limited-use token.</li>
<li><strong>FR-02:</strong> Validate whether the obtained token is valid or if it is necessary to request a new one before executing any service.</li>
<li><strong>FR-03:</strong> Store the authentication token for use in future services that interact with DIAN.</li>
<li><strong>FR-04:</strong> The Middleware must allow the completion of vessels in DIAN upon receiving a request from the TOS (OTM).</li>
<li><strong>FR-05:</strong> The Middleware must consume the DIAN service to consult the completed vessel manifest.</li>
<li><strong>FR-06:</strong> The Middleware must obtain and store the lithography details and DIAN ID of each BL associated with the manifest.</li>
<li><strong>FR-07:</strong> The Middleware must consult the BLs associated with a vessel after consulting the manifest in DIAN.</li>
<li><strong>FR-08:</strong> The Middleware must send the manifest and the details of each BL to the TOS in the defined structure.</li>
<li><strong>FR-09:</strong> The Middleware must receive the tag and detail report from the TOS and send them to DIAN.</li>
<li><strong>FR-10:</strong> The Middleware must consume the Detail Report service in DIAN to report the information received from the TOS.</li>
<li><strong>FR-11:</strong> The Middleware must receive the request to &quot;Receive tag and detail report&quot; from the TOS and process it with DIAN.</li>
<li><strong>FR-12:</strong> The Middleware must consume the Report Tag service in DIAN to inform about containers that have been imported and are in the yard.</li>
<li><strong>FR-13:</strong> A job must be created that runs every 3 hours for 48 hours or until a successful response is received from DIAN to consult and send the shipping and reception forms.</li>
<li><strong>FR-14:</strong> The Middleware must consult the shipping form in DIAN after receiving the BL from the form orchestrator.</li>
<li><strong>FR-15:</strong> After a request for the withdrawal of import cargo in the TOS, the Middleware must consult the import declaration in DIAN.</li>
<li><strong>FR-16:</strong> Upon confirming the creation of a delivery appointment for import cargo in the TOS, the Middleware must send the ARIM to DIAN.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-authentication-management-with-dian" tabindex="-1"><a class="header-anchor" href="#use-case-1-authentication-management-with-dian"><span>Use Case 1: Authentication Management with DIAN</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong> The Middleware must have the authentication credentials for DIAN.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware receives an authentication request.</li>
<li>The status of the current token is verified:
- If it is valid, the token is reused.
- If it has expired, a new one is requested.</li>
<li>The token is stored for future use.</li>
<li>The token is returned to the requesting service.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The Middleware has a valid token that can be used to consume DIAN services.</li>
</ul>
<h4 id="use-case-2-vessel-completion" tabindex="-1"><a class="header-anchor" href="#use-case-2-vessel-completion"><span>Use Case 2: Vessel Completion</span></a></h4>
<ul>
<li><strong>Actor:</strong> TOS (OTM)</li>
<li><strong>Preconditions:</strong> The Middleware must be authenticated with DIAN.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The TOS sends a request to the Middleware to complete a vessel.</li>
<li>The Middleware authenticates the request with DIAN using the valid token.</li>
<li>The Middleware consumes the &quot;Vessel Completion&quot; service in DIAN.</li>
<li>The response from DIAN is sent back to the TOS.</li>
<li>The manifest is stored for future reference.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The vessel is successfully completed in DIAN, and the response is sent to the TOS.</li>
</ul>
<h4 id="use-case-3-consult-manifest" tabindex="-1"><a class="header-anchor" href="#use-case-3-consult-manifest"><span>Use Case 3: Consult Manifest</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong> The Middleware must have successfully authenticated with DIAN, the vessel must be completed, and the manifest must be available in DIAN.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware developer invokes the authentication service with DIAN.</li>
<li>Once authenticated, the authentication token is received.</li>
<li>After the vessel completion, the Middleware consumes the DIAN service to consult the manifest.</li>
<li>The system retrieves the lithography details and the DIAN ID of each BL (Bill of Lading) associated with the manifest.</li>
<li>The Middleware successfully stores the lithography information and the DIAN ID of each BL.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The information of the BLs is successfully obtained and stored.</li>
</ul>
<h4 id="use-case-4-consult-bls" tabindex="-1"><a class="header-anchor" href="#use-case-4-consult-bls"><span>Use Case 4: Consult BLs</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW)</li>
<li><strong>Preconditions:</strong> The Middleware must have successfully authenticated with DIAN and obtained a list of BLs after consulting the manifest.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware authenticates with DIAN using the valid token.</li>
<li>The Middleware iterates through the list of BLs and consumes the &quot;Bill of Lading Consultation&quot; service for each BL.</li>
<li>The Middleware stores the information obtained from each BL in an Excel file.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The details of each BL are successfully obtained and stored in the Excel file.</li>
</ul>
<h4 id="use-case-5-sending-manifest-and-bl-information-to-tos" tabindex="-1"><a class="header-anchor" href="#use-case-5-sending-manifest-and-bl-information-to-tos"><span>Use Case 5: Sending Manifest and BL Information to TOS</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), TOS (OTM)</li>
<li><strong>Preconditions:</strong> The manifest number and the details of the associated BLs must have been obtained.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware retrieves the manifest number (Form 1165) along with the details of all its stored BLs.</li>
<li>The information is constructed in the structure defined in the Excel file.</li>
<li>The information is sent to the TOS in the established format.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The TOS successfully receives the information of the manifest and the BLs.</li>
</ul>
<h4 id="use-case-6-card-reception-and-details-report" tabindex="-1"><a class="header-anchor" href="#use-case-6-card-reception-and-details-report"><span>Use Case 6: Card Reception and Details Report</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), TOS (OTM), DIAN</li>
<li><strong>Preconditions:</strong> The Middleware must have previously sent the manifest and the BLs to the TOS.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware receives a request from the TOS that includes the tag and detail report.</li>
<li>The requests for the &quot;Detail Report&quot; and &quot;Report Tag&quot; services are constructed.</li>
<li>The Middleware invokes the &quot;Detail Report&quot; and &quot;Report Tag&quot; services in DIAN.</li>
<li>The response from DIAN is returned to the TOS.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The tag and report are successfully sent to DIAN, and the TOS receives the responses from the services.</li>
</ul>
<h4 id="use-case-7-report-tag-and-detail-report" tabindex="-1"><a class="header-anchor" href="#use-case-7-report-tag-and-detail-report"><span>Use Case 7: Report Tag and Detail Report</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), TOS (OTM), DIAN</li>
<li><strong>Preconditions:</strong> A request must be received from the TOS to report the tag and detail report.</li>
<li><strong>Main Flow:</strong></li>
</ul>
<ol>
<li>The Middleware receives the &quot;Receive tag and detail report&quot; request from the TOS.</li>
<li>It authenticates with DIAN using the authentication service.</li>
<li>The information from the TOS request is combined with the authentication.</li>
<li>The Middleware consumes the &quot;Detail Report&quot; service in DIAN.</li>
<li>The response from the service is returned to the TOS.</li>
</ol>
<ul>
<li><strong>Postconditions:</strong> The service is successfully consumed in DIAN, and the response is sent to the TOS.</li>
</ul>
<h4 id="use-case-8-report-tag-for-containers-in-yard" tabindex="-1"><a class="header-anchor" href="#use-case-8-report-tag-for-containers-in-yard"><span>Use Case 8: Report Tag for Containers in Yard</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), TOS (OTM), DIAN</li>
<li><strong>Preconditions:</strong> A request must be received from the TOS to report the tag and detail report.</li>
<li><strong>Main Flow:</strong></li>
</ul>
<ol>
<li>The Middleware receives the &quot;Receive tag and detail report&quot; request from the TOS and processes it with DIAN.</li>
<li>It authenticates with DIAN using the authentication service.</li>
<li>The information from the TOS request is combined with the authentication.</li>
<li>The Middleware consumes the &quot;Report Tag&quot; service in DIAN to report the containers that have been imported and are in the yard.</li>
<li>The response from the service is returned to the TOS.</li>
</ol>
<ul>
<li><strong>Postconditions:</strong> The tag and detail report are successfully sent to DIAN, and the TOS receives the responses from the services.</li>
</ul>
<h4 id="use-case-9-spreadsheet-orchestrator" tabindex="-1"><a class="header-anchor" href="#use-case-9-spreadsheet-orchestrator"><span>Use Case 9: Spreadsheet Orchestrator</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), DIAN, TOS (OTM)</li>
<li><strong>Preconditions:</strong> The process for querying and sending forms must be defined.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>A job is created that runs every 3 hours for a period of 48 hours, or until a successful response is received from DIAN.</li>
<li>The Middleware authenticates with DIAN.</li>
<li>The list of BLs from the recently created manifest is iterated through.</li>
<li>The request body is constructed with the found BLs.</li>
<li>The &quot;Consult Shipping Form&quot; service in DIAN is consumed for each BL.</li>
<li>When the response is successful, the &quot;Send Reception Form&quot; service is consumed.</li>
<li>The forms are stored and sent to the TOS.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The forms are successfully sent to DIAN and the TOS within the established timeframe.</li>
</ul>
<h4 id="use-case-10-consult-shipping-form" tabindex="-1"><a class="header-anchor" href="#use-case-10-consult-shipping-form"><span>Use Case 10: Consult Shipping Form</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), DIAN</li>
<li><strong>Preconditions:</strong> The Middleware must have received the BL from the form orchestrator.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware queries the shipping form in DIAN after receiving the BL.</li>
<li>It authenticates with DIAN.</li>
<li>The DIAN service to consult the shipping form is consumed.</li>
<li>The response is returned to the form orchestrator.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> La planilla de envío es consultada correctamente y la respuesta se gestiona adecuadamente.</li>
</ul>
<h4 id="use-case-11-consult-import-declaration" tabindex="-1"><a class="header-anchor" href="#use-case-11-consult-import-declaration"><span>Use Case 11: Consult Import Declaration</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), DIAN</li>
<li><strong>Preconditions:</strong> A request for the withdrawal of imported cargo is received from the TOS.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware receives the request for the withdrawal of imported cargo from the TOS.</li>
<li>The Middleware authenticates with DIAN.</li>
<li>The &quot;Consult Import Declaration&quot; service is consumed by sending the <code v-pre>numDeclaracion</code>.</li>
<li>The response from DIAN is returned to the TOS.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The import declaration is successfully queried, and the response is sent to the TOS.</li>
</ul>
<h4 id="use-case-12-sending-arim-to-dian" tabindex="-1"><a class="header-anchor" href="#use-case-12-sending-arim-to-dian"><span>Use Case 12: Sending ARIM to DIAN</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware (MDW), TOS (OTM), DIAN</li>
<li><strong>Preconditions:</strong> The creation of a delivery appointment for imported cargo in the TOS is confirmed.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware receives the delivery appointment confirmation from the TOS.</li>
<li>It authenticates with DIAN.</li>
<li>The ARIM request is constructed according to DIAN's policies.</li>
<li>The &quot;Send ARIM&quot; service in DIAN is consumed.</li>
<li>The response is returned to the TOS in the established format.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The ARIM is successfully sent to DIAN, and the response is returned to the TOS in the appropriate format.</li>
</ul>
<h2 id="_5-client-requested-validations" tabindex="-1"><a class="header-anchor" href="#_5-client-requested-validations"><span>5. Client-Requested Validations</span></a></h2>
<h4 id="v-01-authentication-token-validation" tabindex="-1"><a class="header-anchor" href="#v-01-authentication-token-validation"><span>V-01: Authentication Token Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify the validity of the authentication token before making any requests to the DIAN.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>If the token is valid, it must be used.</li>
<li>If the token has expired, a new one must be requested automatically.</li>
</ul>
</li>
</ul>
<h4 id="v-02-validation-of-vessel-data" tabindex="-1"><a class="header-anchor" href="#v-02-validation-of-vessel-data"><span>V-02: Validation of Vessel Data</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the vessel data provided by the TOS is valid and that the vessel exists in the DIAN database.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The vessel must be registered and active in the DIAN system.</li>
<li>A clear error message must be returned if the vessel is not valid.</li>
</ul>
</li>
</ul>
<h4 id="v-03-validation-of-manifest-inquiry-in-dian" tabindex="-1"><a class="header-anchor" href="#v-03-validation-of-manifest-inquiry-in-dian"><span>V-03: Validation of Manifest Inquiry in DIAN</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the Middleware correctly queries the vessel's manifest in the DIAN system upon completing the operation.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The DIAN response must contain the complete manifest with all associated BLs.</li>
<li>If the vessel does not exist or does not have an associated manifest, an error must be returned to the TOS.</li>
</ul>
</li>
</ul>
<h4 id="v-04-validation-of-bl-existence" tabindex="-1"><a class="header-anchor" href="#v-04-validation-of-bl-existence"><span>V-04: Validation of BL Existence</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that the queried manifest has at least one associated BL and that all BLs are valid.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The response must contain at least one BL to be considered valid.</li>
<li>If no BLs are found, an error must be returned to the TOS.</li>
</ul>
</li>
</ul>
<h4 id="v-05-manifest-format-validation" tabindex="-1"><a class="header-anchor" href="#v-05-manifest-format-validation"><span>V-05: Manifest Format Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the manifest information meets the expected format and contains all required fields.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The existence and format of all expected fields in the manifest must be validated.</li>
<li>If information is missing or there is an incorrect format, an error must be returned to the TOS.</li>
</ul>
</li>
</ul>
<h4 id="v-06-validation-of-tarja-data" tabindex="-1"><a class="header-anchor" href="#v-06-validation-of-tarja-data"><span>V-06: Validation of Tarja Data</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the tarja and detail report received from the TOS contain complete information and are in the correct format.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The existence and format of all expected fields in the tarja must be validated.</li>
<li>If information is missing or there is an incorrect format, an error must be returned to the TOS.</li>
</ul>
</li>
</ul>
<h4 id="v-07-validation-of-report-information" tabindex="-1"><a class="header-anchor" href="#v-07-validation-of-report-information"><span>V-07: Validation of Report Information</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the information for the tarja report and detail report is complete and complies with DIAN policies.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The information must meet the format and required fields specified by DIAN.</li>
<li>An error must be returned if the information is incomplete or incorrect.</li>
</ul>
</li>
</ul>
<h4 id="v-08-container-validation" tabindex="-1"><a class="header-anchor" href="#v-08-container-validation"><span>V-08: Container Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the containers announced for the report are registered and in a valid state to be reported.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The containers must exist in the DIAN database.</li>
<li>An error must be returned if any of the containers are not valid.</li>
</ul>
</li>
</ul>
<h4 id="v-09-job-configuration-validation" tabindex="-1"><a class="header-anchor" href="#v-09-job-configuration-validation"><span>V-09: Job Configuration Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the job for querying and sending forms is configured correctly.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The job must run at the defined time intervals and handle responses correctly.</li>
<li>Any errors during the job execution must be logged.</li>
</ul>
</li>
</ul>
<h4 id="v-10-validation-of-form-inquiry" tabindex="-1"><a class="header-anchor" href="#v-10-validation-of-form-inquiry"><span>V-10: Validation of Form Inquiry</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the inquiry of the shipment form returns the expected information.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The response must contain the shipment form in the expected format.</li>
<li>In case of an error during the inquiry, the error must be handled, and a clear message must be returned to the TOS.</li>
</ul>
</li>
</ul>
<h4 id="v-11-validation-of-import-declaration" tabindex="-1"><a class="header-anchor" href="#v-11-validation-of-import-declaration"><span>V-11: Validation of Import Declaration</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the queried import declaration contains the necessary information for cargo withdrawal.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The response must contain all required information for withdrawal.</li>
<li>If the declaration is not valid, a clear error must be returned to the TOS.</li>
</ul>
</li>
</ul>
<h4 id="v-12-validation-of-arim-structure" tabindex="-1"><a class="header-anchor" href="#v-12-validation-of-arim-structure"><span>V-12: Validation of ARIM Structure</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the ARIM sent to the DIAN complies with the required policies and structure.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The ARIM must contain all required fields and be in the correct format.</li>
<li>If information is missing or there is an incorrect format, an error must be returned to the TOS.</li>
</ul>
</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6.	Assumptions and Dependencies</span></a></h2>
<h3 id="assumptions" tabindex="-1"><a class="header-anchor" href="#assumptions"><span>Assumptions:</span></a></h3>
<ul>
<li><strong>Availability of DIAN Services:</strong> It is assumed that DIAN services will be continuously available.</li>
<li><strong>Access to Credentials:</strong> Valid credentials will be available to access DIAN services.</li>
<li><strong>Collaboration with TOS (OTM):</strong> There will be smooth communication with the TOS team for integration.</li>
<li><strong>Defined Data Structure:</strong> The data formats (manifests, BLs, etc.) are already agreed upon.</li>
<li><strong>Available Testing Environment:</strong> A stable testing environment is guaranteed.</li>
<li><strong>Version Compatibility:</strong> The Middleware will be compatible with the current versions of DIAN and TOS.</li>
<li><strong>Functional Automation:</strong> The query job will execute correctly at the established intervals.</li>
</ul>
<h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies:</span></a></h3>
<ul>
<li><strong>DIAN Services:</strong> The Middleware depends on the availability of DIAN services.</li>
<li><strong>Integration with TOS:</strong> Proper integration with the TOS system is crucial.</li>
<li><strong>Security:</strong> The use of valid certificates and credentials for authentication is necessary.</li>
<li><strong>DIAN Responses:</strong> The query job depends on timely responses from DIAN.</li>
<li><strong>DIAN Regulations:</strong> Any regulatory changes from DIAN may require adjustments in the Middleware.</li>
<li><strong>Integration Testing:</strong> Necessary to ensure the functionality of the complete system.</li>
</ul>
<h2 id="_7-sequence-diagrams" tabindex="-1"><a class="header-anchor" href="#_7-sequence-diagrams"><span>7. Sequence Diagrams</span></a></h2>
<h3 id="import-declaration" tabindex="-1"><a class="header-anchor" href="#import-declaration"><span>Import Declaration</span></a></h3>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="@source/assets/DIAN/DS-DeclaracionImportacion.png" alt=""></span></a></h3>
<h3 id="shipping-template" tabindex="-1"><a class="header-anchor" href="#shipping-template"><span>Shipping Template</span></a></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="@source/assets/DIAN/DS-PlantillaEnvio.png" alt=""></span></a></h3>
<h2 id="_8-service-data" tabindex="-1"><a class="header-anchor" href="#_8-service-data"><span>8. Service Data</span></a></h2>
<h3 id="_8-1-finalize-vessel" tabindex="-1"><a class="header-anchor" href="#_8-1-finalize-vessel"><span>8.1 Finalize Vessel</span></a></h3>
<h3 id="requests-and-response" tabindex="-1"><a class="header-anchor" href="#requests-and-response"><span>Requests and Response</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"numFormulario"</span><span class="token operator">:</span> <span class="token string">"1234567898765432"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"fechaHoraFinalizacion"</span><span class="token operator">:</span> <span class="token string">"20240219103625"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"visitNbr"</span><span class="token operator">:</span> <span class="token string">"1234565432"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Response sucessfull</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"numFormulario"</span><span class="token operator">:</span> <span class="token string">"1234567898765432"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"fechaHoraFinalizacion"</span><span class="token operator">:</span> <span class="token string">"20240219103625"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"IdFinalization"</span><span class="token operator">:</span><span class="token string">"9876543212345678"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Response Fail</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Fail"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">"Whatever error"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-send-manifest-and-bl-details" tabindex="-1"><a class="header-anchor" href="#_8-2-send-manifest-and-bl-details"><span>8.2 Send Manifest and BL details</span></a></h3>
<h3 id="requests-and-response-1" tabindex="-1"><a class="header-anchor" href="#requests-and-response-1"><span>Requests and Response</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"numFormulario"</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"billOfLoadings"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">116576539876</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"number"</span><span class="token operator">:</span> <span class="token number">6789</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"2024-07-23T15:30:00Z"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"idType"</span><span class="token operator">:</span> <span class="token string">"Tipo de identificación"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"idName"</span><span class="token operator">:</span> <span class="token string">"Nombre del identificador"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"chargeId"</span><span class="token operator">:</span> <span class="token string">"ID del cargo"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"chargeName"</span><span class="token operator">:</span> <span class="token string">"Nombre del cargo"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"chargeDispositionCode"</span><span class="token operator">:</span> <span class="token string">"Código de disposición del cargo"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"dianChargeDispositionName"</span><span class="token operator">:</span> <span class="token string">"Nombre de la disposición del cargo en la DIAN"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token string">"Peso del objeto"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Response suceesfull</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Response Fail</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Fail"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">02</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token string">"Whatever error"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-submit-details-report" tabindex="-1"><a class="header-anchor" href="#_8-3-submit-details-report"><span>8.3 Submit details report</span></a></h3>
<h3 id="requests-and" tabindex="-1"><a class="header-anchor" href="#requests-and"><span>Requests and</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"DinformeDetallesCargarecibida"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"cargoType"</span><span class="token operator">:</span> <span class="token string">"CC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"numManifiesto"</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"numFormatoAnterior"</span><span class="token operator">:</span> <span class="token number">654321</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"numeroRecaladaTerminal"</span><span class="token operator">:</span> <span class="token string">"786543267"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"nombreMotonave"</span><span class="token operator">:</span> <span class="token string">"CMA Vessel Name"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"linea"</span><span class="token operator">:</span> <span class="token string">"Line Cod"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"podReportadoNaviero"</span><span class="token operator">:</span> <span class="token string">"cod PBCU"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"unidadesCargaRecibida"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">         <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"CodTipoDocumentoViaje"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"numDocumentoTransporte"</span><span class="token operator">:</span> <span class="token number">11667654325678</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"fechaDocumentoTransporte"</span><span class="token operator">:</span> <span class="token string">"20240219103625"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"codTipoCarga"</span><span class="token operator">:</span> <span class="token string">"02"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"pesoBrutoKg"</span><span class="token operator">:</span> <span class="token number">10056</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"cantidadBultos"</span><span class="token operator">:</span> <span class="token string">"543"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"agenteCargaConsignatario"</span><span class="token operator">:</span> <span class="token string">"Importer name"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"unidades"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">               <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"codEstadoContenedor"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"numContenedor"</span><span class="token operator">:</span> <span class="token string">"CMAU7654353"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"tamanoContenedor"</span><span class="token operator">:</span> <span class="token string">"40"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"tipoContenedor"</span><span class="token operator">:</span> <span class="token string">"Reefer"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"sello1"</span><span class="token operator">:</span> <span class="token string">"hjsahy656"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"codigoCargaPeligrosa"</span><span class="token operator">:</span> <span class="token string">"7854"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"polReportadoNaviero"</span><span class="token operator">:</span> <span class="token string">"port code exporter"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"fpodReportadoNaviero"</span><span class="token operator">:</span> <span class="token string">"cabotaje"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"contenedoresVacios"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">         <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"codEstadoContenedor"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"numContenedor"</span><span class="token operator">:</span> <span class="token string">"CMAU7659074"</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"numFormulario"</span><span class="token operator">:</span> <span class="token string">"1234567898765432"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"fechaTransaccion"</span><span class="token operator">:</span> <span class="token string">"20240219103625"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"numInformeDetallesCargaRecibida"</span><span class="token operator">:</span> <span class="token string">"9876543212345678"</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4import-declaration-query" tabindex="-1"><a class="header-anchor" href="#_8-4import-declaration-query"><span>8.4	Import declaration query</span></a></h3>
<h3 id="request-and-response" tabindex="-1"><a class="header-anchor" href="#request-and-response"><span>Request and Response</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   Endponit\numDeclaracion</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">	  <span class="token property">"numFormulario"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"numIdentificacionImportador"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"dvImportador"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"nombresImportador"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"numIdentificacionDeclarante"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"dvDeclarante"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"nombresDeclarante"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"tipoDeclaracion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"numFormularioanterior"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"fechaFormularioAnterior"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"codLugarIngreso"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"codDeposito"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"Manifiesto"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"fechaLlegada"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"docTransporte"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"numFactura"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"fechaFactura"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"codModalidad"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"tipoImportacion"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"pesoBruto"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"pesoNeto"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"numBultos"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"valPagoTotal"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"numAceptacionDecla"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"fechaAceptacionDecla"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"numLevante"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"fecLevante"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"codEstado"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	  <span class="token property">"resultadoSelectividad"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5sendarimimport-declaration" tabindex="-1"><a class="header-anchor" href="#_8-5sendarimimport-declaration"><span>8.5	SendArimImport declaration</span></a></h3>
<h3 id="request-and-response-1" tabindex="-1"><a class="header-anchor" href="#request-and-response-1"><span>Request and Response</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"></span>
<span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"cargoType"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"numeroRetiroCarga"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"numeroManifiestoCarga"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"numeroDocumentoTransporte"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"estadoAduaneroCarga"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"depositoDestino"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"cantidadBultos"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"Peso Carga"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"empresaSolicitaRetiro"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"numeroContenedor"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"tamanoContenedor"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"tipoContenedor"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"sello1"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">"statusResponse"</span><span class="token operator">:</span><span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"code"</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token property">"description"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">"fechaHora"</span><span class="token operator">:</span> <span class="token string">"20241201115005"</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token property">"respuesta"</span><span class="token operator">:</span> <span class="token string">"Recibido en Fecha."</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-save-delivery-and-reception-forms" tabindex="-1"><a class="header-anchor" href="#_8-6-save-delivery-and-reception-forms"><span>8.6 Save delivery and reception forms</span></a></h3>
<h3 id="request-and-response-2" tabindex="-1"><a class="header-anchor" href="#request-and-response-2"><span>Request and Response</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"bl"</span><span class="token operator">:</span> <span class="token string">"String"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"deliveryFormNbr"</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"deliveryFormDate"</span><span class="token operator">:</span> <span class="token string">"2024-07-24T12:00:00Z"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"receptionFormNbr"</span><span class="token operator">:</span> <span class="token number">789012</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"receptionFormDate"</span><span class="token operator">:</span> <span class="token string">"2024-07-25T08:30:00Z"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-unit-testing" tabindex="-1"><a class="header-anchor" href="#_9-unit-testing"><span>9. Unit Testing</span></a></h2>
<h3 id="a-test-block-configuration" tabindex="-1"><a class="header-anchor" href="#a-test-block-configuration"><span>A. Test Block Configuration</span></a></h3>
<p>A test block is defined, and variables for the controller and the service being used are declared.</p>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="@source/assets/DIAN/A-ConfBloquePruebas.png" alt=""></span></a></h3>
<h3 id="b-mocks" tabindex="-1"><a class="header-anchor" href="#b-mocks"><span>B. Mocks</span></a></h3>
<p>A <code v-pre>mockExecutionSteps</code> object is created to simulate the behavior of the execution steps that will be used during testing. Additionally, a <code v-pre>mockMiddlewareRequest</code> object is defined to simulate a request that will be passed to the controller, allowing for testing how the controller handles requests without making an actual call.</p>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="@source/assets/DIAN/B-Mockeos.png" alt=""></span></a></h3>
<h3 id="c-initialization-before-each-test" tabindex="-1"><a class="header-anchor" href="#c-initialization-before-each-test"><span>C. Initialization Before Each Test</span></a></h3>
<p>A test module is created that includes the controller and the mocked services. The <code v-pre>beforeEach</code> method runs before each test to set up the environment.</p>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4"><span><img src="@source/assets/DIAN/C-Inicializacion.png" alt=""></span></a></h3>
<h3 id="d-method-tests" tabindex="-1"><a class="header-anchor" href="#d-method-tests"><span>D. Method Tests</span></a></h3>
<p>The test scenario is defined for the corresponding methods; in this case, the <code v-pre>finalizeVessel</code> method is tested for success. A payload is created and passed to the method, simulating the service response, and the response is compared to ensure accuracy.</p>
<h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5"><span><img src="@source/assets/DIAN/D-Pruebas.png" alt=""></span></a></h3>
<h3 id="e-error-handling" tabindex="-1"><a class="header-anchor" href="#e-error-handling"><span>E. Error Handling</span></a></h3>
<p>An error is simulated in detail, and it is ensured that the controller properly handles the error response.</p>
<h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6"><span><img src="@source/assets/DIAN/E-ManejoErrores.png" alt=""></span></a></h3>
<h2 id="_10-annexes" tabindex="-1"><a class="header-anchor" href="#_10-annexes"><span>10. Annexes</span></a></h2>
<h3 id="_10-1-finalize-vessel" tabindex="-1"><a class="header-anchor" href="#_10-1-finalize-vessel"><span>10.1 Finalize Vessel</span></a></h3>
<h4 id="requests" tabindex="-1"><a class="header-anchor" href="#requests"><span>Requests</span></a></h4>
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
<td>numFormulario</td>
<td>Number</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>fechaHoraFinalizacion</td>
<td>String</td>
<td>14/yyyymmddHHmmss</td>
<td>Ej: 20240219103625</td>
</tr>
<tr>
<td>3</td>
<td>visitNbr</td>
<td>Is the IdVessel in the TOS</td>
<td></td>
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
<td>StatusResponse</td>
<td>String</td>
<td>5</td>
<td>True, false</td>
</tr>
<tr>
<td>2</td>
<td>code</td>
<td>Number</td>
<td>3</td>
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
<td>numFormulario</td>
<td>Number</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>fechaHoraFinalizacion</td>
<td>String</td>
<td>yyyy/mm/dd HH:mm:ss</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>IdFinalization</td>
<td>Number</td>
<td>18</td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_10-2-send-manifest-and-bl-details" tabindex="-1"><a class="header-anchor" href="#_10-2-send-manifest-and-bl-details"><span>10.2 Send Manifest and BL Details</span></a></h3>
<h4 id="requests-1" tabindex="-1"><a class="header-anchor" href="#requests-1"><span>Requests</span></a></h4>
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
<td>numFormulario</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>id</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>number</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>date</td>
<td>DateTime</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>idType</td>
<td>String</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>idName</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>chargeId</td>
<td>String</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>chargeName</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>chargeDipositionCode</td>
<td>String</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>Dian Charge Disposition Name</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>weight</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses-1" tabindex="-1"><a class="header-anchor" href="#responses-1"><span>Responses</span></a></h4>
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
<hr>
<h3 id="_10-3-submit-details-report" tabindex="-1"><a class="header-anchor" href="#_10-3-submit-details-report"><span>10.3 Submit Details Report</span></a></h3>
<h4 id="requests-2" tabindex="-1"><a class="header-anchor" href="#requests-2"><span>Requests</span></a></h4>
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
<td>numManifiesto</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>numFormatoAnterior</td>
<td>Numeric</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>unidadesCargaRecibida</td>
<td>Array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>CodTipoDocumentoViaje</td>
<td>String</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>numDocumentoTransporte</td>
<td>Numeric</td>
<td>14</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>fechaDocumentoTransporte</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>codTipoCarga</td>
<td>String</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>pesoBrutoKg</td>
<td>Number</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>unidades</td>
<td>Array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>contenedoresVacios</td>
<td>Array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>numContenedor</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>codEstadoContenedor</td>
<td>Numeric</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>numeroRecaladaTerminal</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>nombreMotonave</td>
<td>String</td>
<td>50</td>
<td></td>
</tr>
<tr>
<td>15</td>
<td>agenteCargaConsignatario</td>
<td>String</td>
<td>50</td>
<td></td>
</tr>
<tr>
<td>16</td>
<td>cantidadBultos</td>
<td>Number</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>17</td>
<td>linea</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>18</td>
<td>tamanoContenedor</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>19</td>
<td>tipoContenedor</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>20</td>
<td>sello1</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>21</td>
<td>codigoCargaPeligrosa</td>
<td>String</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>22</td>
<td>polReportadoNaviero</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>23</td>
<td>podReportadoNaviero</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>24</td>
<td>fpodReportadoNaviero</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>25</td>
<td>cargoType</td>
<td>String</td>
<td>2</td>
<td>CC, CG, CS, CR</td>
</tr>
</tbody>
</table>
<h4 id="responses-2" tabindex="-1"><a class="header-anchor" href="#responses-2"><span>Responses</span></a></h4>
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
<td>numInformeDetallesCargaRecibida</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>fechaTransaccion</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_10-4-import-declaration-query" tabindex="-1"><a class="header-anchor" href="#_10-4-import-declaration-query"><span>10.4 Import Declaration Query</span></a></h3>
<h4 id="requests-3" tabindex="-1"><a class="header-anchor" href="#requests-3"><span>Requests</span></a></h4>
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
<td>numDeclaracion</td>
<td>Number</td>
<td>15</td>
<td>GET / REST</td>
</tr>
</tbody>
</table>
<h4 id="responses-3" tabindex="-1"><a class="header-anchor" href="#responses-3"><span>Responses</span></a></h4>
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
<td>statusResponse</td>
<td>String</td>
<td>5</td>
<td>True, false</td>
</tr>
<tr>
<td>2</td>
<td>Code</td>
<td>Number</td>
<td>3</td>
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
<td>numFormulario</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>numIdentificacionImportador</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>dvImportador</td>
<td>Numeric</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>nombresImportador</td>
<td>String</td>
<td>60</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>numIdentificacionDeclarante</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>dvDeclarante</td>
<td>Numeric</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>nombresDeclarante</td>
<td>String</td>
<td>60</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>tipoDeclaracion</td>
<td>String</td>
<td>12</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>numFormularioanterior</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>fechaFormularioAnterior</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>codLugarIngreso</td>
<td>String</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>15</td>
<td>codDeposito</td>
<td>Numeric</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>16</td>
<td>Manifiesto</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>17</td>
<td>fechaLlegada</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>18</td>
<td>docTransporte</td>
<td>String</td>
<td>30</td>
<td></td>
</tr>
<tr>
<td>19</td>
<td>numFactura</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>20</td>
<td>fechaFactura</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>21</td>
<td>codModalidad</td>
<td>String</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>22</td>
<td>tipoImportacion</td>
<td>String</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>23</td>
<td>pesoBruto</td>
<td>Numeric decimal</td>
<td>16-2</td>
<td></td>
</tr>
<tr>
<td>24</td>
<td>pesoNeto</td>
<td>Numeric decimal</td>
<td>16-2</td>
<td></td>
</tr>
<tr>
<td>25</td>
<td>numBultos</td>
<td>Numeric decimal</td>
<td>12-2</td>
<td></td>
</tr>
<tr>
<td>26</td>
<td>valPagoTotal</td>
<td>Numeric decimal</td>
<td>16-2</td>
<td></td>
</tr>
<tr>
<td>27</td>
<td>numAceptacionDecla</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>28</td>
<td>fechaAceptacionDecla</td>
<td>String</td>
<td>14</td>
<td></td>
</tr>
<tr>
<td>29</td>
<td>numLevante</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>30</td>
<td>fecLevante</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>31</td>
<td>codEstado</td>
<td>String</td>
<td>60</td>
<td></td>
</tr>
<tr>
<td>32</td>
<td>resultadoSelectividad</td>
<td>String</td>
<td>60</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_10-5-send-arim" tabindex="-1"><a class="header-anchor" href="#_10-5-send-arim"><span>10.5 Send Arim</span></a></h3>
<h4 id="requests-4" tabindex="-1"><a class="header-anchor" href="#requests-4"><span>Requests</span></a></h4>
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
<td>visitNbr</td>
<td>String</td>
<td></td>
<td>Is the IdVessel in the TOS</td>
</tr>
<tr>
<td>2</td>
<td>cargoType</td>
<td>String</td>
<td></td>
<td>CC, CG, CS, CR</td>
</tr>
<tr>
<td>3</td>
<td>numeroRetiroCarga</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>numeroManifiestoCarga</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>numeroDocumentoTransporte</td>
<td>String</td>
<td>40</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>estadoAduaneroCarga</td>
<td>String</td>
<td>50</td>
<td>Nacionalizada, Con Planilla de Envío, En Tránsito</td>
</tr>
<tr>
<td>7</td>
<td>depositoDestino</td>
<td>String</td>
<td>40</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>cantidadBultos</td>
<td>Numeric</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>Peso Carga</td>
<td>Number decimal</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>empresaSolicitaRetiro</td>
<td>String</td>
<td>100</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>numeroContenedor</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>tamanoContenedor</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>tipoContenedor</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>sello1</td>
<td>String</td>
<td>15</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses-4" tabindex="-1"><a class="header-anchor" href="#responses-4"><span>Responses</span></a></h4>
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
<td>respuesta</td>
<td>String</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>fechaHora</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_10-6-save-delivery-and-reception-forms" tabindex="-1"><a class="header-anchor" href="#_10-6-save-delivery-and-reception-forms"><span>10.6 Save Delivery and Reception Forms</span></a></h3>
<h4 id="requests-5" tabindex="-1"><a class="header-anchor" href="#requests-5"><span>Requests</span></a></h4>
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
<td>bl</td>
<td>String</td>
<td>50</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>deliveryFormNbr</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>deliveryFormDate</td>
<td>DateTime</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>receptionFormNbr</td>
<td>Numeric</td>
<td>20</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>receptionFormDate</td>
<td>DateTime</td>
<td>20</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="responses-5" tabindex="-1"><a class="header-anchor" href="#responses-5"><span>Responses</span></a></h4>
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
</style>