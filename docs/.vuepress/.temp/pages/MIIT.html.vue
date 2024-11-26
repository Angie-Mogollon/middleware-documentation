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
<td>Team G</td>
</tr>
<tr>
<td>Sprint Start Date</td>
<td>14 October of 2024</td>
</tr>
<tr>
<td>Delivery Date</td>
<td>1 November of 2024</td>
</tr>
</tbody>
</table>
<h2 id="_2-objective" tabindex="-1"><a class="header-anchor" href="#_2-objective"><span>2. Objective</span></a></h2>
<p>The primary objective of the sprint is to develop and implement a Middleware system that efficiently and securely integrates the TOS (OTM) and Turbo Graneles (MIIT) systems. This integration ensures accurate consultation, processing, and transfer of key logistical data, including appointments, gate entries, load completions, and vehicle departures. The Middleware must guarantee a seamless, accurate, and real-time flow of information between both systems, enabling informed decision-making and optimization of logistical processes.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The scope of the sprint involves developing and implementing a Middleware system that integrates and facilitates data transfer between the TOS (OTM) and Turbo Graneles (MIIT) systems. The Middleware will enable the consultation and processing of information regarding appointments, gate entries, load completions, and vehicle departures, ensuring correct data transmission between the systems. This includes the implementation of APIs, data validation, error handling, secure transmission, and integration testing. The project does not cover modifications to the TOS (OTM) or Turbo Graneles (MIIT) systems, nor the development of graphical interfaces or integration with other systems.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<ul>
<li><strong>RF-01</strong>: Consultation of Appointments from TOS (OTM): The Middleware system must retrieve both scheduled and canceled appointments from the TOS (OTM).</li>
<li><strong>RF-02</strong>: Sending Appointments to Turbo Graneles (MIIT): The Middleware must transmit appointment information to the Turbo Graneles (MIIT) system according to the expected format.</li>
<li><strong>RF-03</strong>: Consultation of Gate Entry Information from TOS (OTM): The Middleware must retrieve gate entry information, including weights and scale numbers, from the TOS (OTM).</li>
<li><strong>RF-04</strong>: Sending Gate Entry Data to Turbo Graneles (MIIT): The Middleware must send gate entry information to Turbo Graneles (MIIT) for processing.</li>
<li><strong>RF-05</strong>: Receiving Load Completion Information from MIIT: The Middleware must receive load completion data from Turbo Graneles (MIIT).</li>
<li><strong>RF-06</strong>: Sending Load Completion Data to TOS (OTM): The Middleware must send load completion information to the TOS (OTM) for recording and processing.</li>
<li><strong>RF-07</strong>: Consultation of Vehicle Departure from TOS (OTM): The Middleware must retrieve vehicle departure information from the TOS (OTM).</li>
<li><strong>RF-08</strong>: Sending Vehicle Departure Data to Turbo Graneles (MIIT): The Middleware must send vehicle departure information to Turbo Graneles (MIIT) for recording.</li>
<li><strong>RF-09</strong>: Error Handling for Appointment Consultation: The Middleware must handle any errors that occur while retrieving appointments from TOS (OTM).</li>
<li><strong>RF-10</strong>: Error Handling for Sending Appointments to MIIT: The Middleware must handle any errors that occur when transmitting appointment data to Turbo Graneles (MIIT).</li>
<li><strong>RF-11</strong>: Validation of Gate Entry Data: The Middleware must validate the accuracy and consistency of gate entry data before sending it to MIIT.</li>
<li><strong>RF-12</strong>: Validation of Vehicle Departure Data: The Middleware must validate vehicle departure data before transmitting it to Turbo Graneles (MIIT).</li>
<li><strong>RF-13</strong>: Authentication for Access to TOS (OTM) API: The Middleware must correctly authenticate requests to the TOS (OTM) API.</li>
<li><strong>RF-14</strong>: Authentication for Access to Turbo Graneles (MIIT) API: The Middleware must correctly authenticate requests sent to the MIIT API.</li>
<li><strong>RF-15</strong>: Contingency Management for TOS (OTM) Consultation Failures: The Middleware must manage contingencies in case of consultation failures with TOS (OTM), including retry attempts or notifications.</li>
<li><strong>RF-16</strong>: Contingency Management for Sending Data to MIIT Failures: The Middleware must manage contingencies if data transmission to MIIT fails, including retry attempts or error logging.</li>
<li><strong>RF-17</strong>: Temporary Data Storage: The Middleware must temporarily store appointment, gate entry, and vehicle departure information if it cannot be processed in real time.</li>
<li><strong>RF-18</strong>: Sending Processing Confirmations: The Middleware must send confirmation responses to TOS (OTM) and Turbo Graneles (MIIT) after successfully processing the data.</li>
<li><strong>RF-19</strong>: Transaction Auditing: The Middleware must log all data consultation and transmission transactions for future audits and failure analysis.</li>
<li><strong>RF-20</strong>: Error and Status Report Generation: The Middleware must generate detailed reports on errors and transaction statuses for monitoring and analysis.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-consult-appointments-from-tos-otm" tabindex="-1"><a class="header-anchor" href="#use-case-1-consult-appointments-from-tos-otm"><span>Use Case 1: Consult Appointments from TOS (OTM)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware has access to the TOS (OTM) API.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends a request to TOS (OTM) to retrieve appointment data.</li>
<li>TOS (OTM) responds with the appointment information.</li>
<li>The Middleware processes the received data.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The Middleware stores the appointment data for further processing.</li>
</ul>
<h4 id="use-case-2-send-appointments-to-turbo-graneles-miit" tabindex="-1"><a class="header-anchor" href="#use-case-2-send-appointments-to-turbo-graneles-miit"><span>Use Case 2: Send Appointments to Turbo Graneles (MIIT)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> Appointment information is available.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware retrieves the appointment data.</li>
<li>The Middleware sends the appointment information to MIIT.</li>
<li>Turbo Graneles (MIIT) receives and processes the data.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The appointment information has been successfully sent to MIIT.</li>
</ul>
<h4 id="use-case-3-consult-gate-entry-information-from-tos-otm" tabindex="-1"><a class="header-anchor" href="#use-case-3-consult-gate-entry-information-from-tos-otm"><span>Use Case 3: Consult Gate Entry Information from TOS (OTM)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware has access to the TOS (OTM) API.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends a request to consult gate entry information.</li>
<li>TOS (OTM) responds with the gate entry data.</li>
<li>The Middleware processes and validates the received information.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The Middleware has the gate entry information ready for further transmission.</li>
</ul>
<h4 id="use-case-4-send-gate-entry-information-to-turbo-graneles-miit" tabindex="-1"><a class="header-anchor" href="#use-case-4-send-gate-entry-information-to-turbo-graneles-miit"><span>Use Case 4: Send Gate Entry Information to Turbo Graneles (MIIT)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> Gate entry information is available.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware retrieves the gate entry data.</li>
<li>The Middleware sends the information to Turbo Graneles (MIIT).</li>
<li>Turbo Graneles (MIIT) receives and processes the data.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The gate entry information has been successfully sent to MIIT.</li>
</ul>
<h4 id="use-case-5-receive-load-completion-information-from-turbo-graneles-miit" tabindex="-1"><a class="header-anchor" href="#use-case-5-receive-load-completion-information-from-turbo-graneles-miit"><span>Use Case 5: Receive Load Completion Information from Turbo Graneles (MIIT)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware has access to the MIIT API.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends a request to MIIT.</li>
<li>Turbo Graneles (MIIT) responds with the load completion information.</li>
<li>The Middleware processes the received data.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The load completion information has been successfully received and processed.</li>
</ul>
<h4 id="use-case-6-send-load-completion-information-to-tos-otm" tabindex="-1"><a class="header-anchor" href="#use-case-6-send-load-completion-information-to-tos-otm"><span>Use Case 6: Send Load Completion Information to TOS (OTM)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> Load completion information is available.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware retrieves the load completion data.</li>
<li>The Middleware sends the information to TOS (OTM).</li>
<li>TOS (OTM) processes the received data.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The load completion information has been successfully sent to TOS (OTM).</li>
</ul>
<h4 id="use-case-7-consult-vehicle-departure-information-from-tos-otm" tabindex="-1"><a class="header-anchor" href="#use-case-7-consult-vehicle-departure-information-from-tos-otm"><span>Use Case 7: Consult Vehicle Departure Information from TOS (OTM)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware has access to the TOS (OTM) API.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends a request to retrieve vehicle departure information.</li>
<li>TOS (OTM) responds with the requested data.</li>
<li>The Middleware processes the received response.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The vehicle departure information has been successfully obtained.</li>
</ul>
<h4 id="use-case-8-send-vehicle-departure-information-to-turbo-graneles-miit" tabindex="-1"><a class="header-anchor" href="#use-case-8-send-vehicle-departure-information-to-turbo-graneles-miit"><span>Use Case 8: Send Vehicle Departure Information to Turbo Graneles (MIIT)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> Vehicle departure information is available.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware retrieves the vehicle departure data.</li>
<li>The Middleware sends the information to Turbo Graneles (MIIT).</li>
<li>Turbo Graneles (MIIT) receives and processes the data.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The vehicle departure information has been successfully sent to MIIT.</li>
</ul>
<h4 id="use-case-9-handle-errors-when-consulting-appointments-from-tos-otm" tabindex="-1"><a class="header-anchor" href="#use-case-9-handle-errors-when-consulting-appointments-from-tos-otm"><span>Use Case 9: Handle Errors When Consulting Appointments from TOS (OTM)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware attempts to make a request.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends a request for consultation.</li>
<li>If an error occurs, the Middleware manages the contingency (retries, error logging).</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The Middleware handles the error properly and retries if necessary.</li>
</ul>
<h4 id="use-case-10-handle-errors-when-sending-appointments-to-turbo-graneles-miit" tabindex="-1"><a class="header-anchor" href="#use-case-10-handle-errors-when-sending-appointments-to-turbo-graneles-miit"><span>Use Case 10: Handle Errors When Sending Appointments to Turbo Graneles (MIIT)</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware attempts to send the information.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware attempts to send the data.</li>
<li>If an error occurs, the Middleware manages the contingency (retries, error logging).</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The Middleware handles the error properly and retries if necessary.</li>
</ul>
<h4 id="use-case-11-validate-gate-entry-data" tabindex="-1"><a class="header-anchor" href="#use-case-11-validate-gate-entry-data"><span>Use Case 11: Validate Gate Entry Data</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware has received the gate entry data.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware verifies the validity of the data.</li>
<li>If the data is valid, it is sent to MIIT.</li>
<li>If the data is invalid, error messages are generated.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The validated data is sent to MIIT or errors are notified.</li>
</ul>
<h4 id="use-case-12-validate-vehicle-departure-data" tabindex="-1"><a class="header-anchor" href="#use-case-12-validate-vehicle-departure-data"><span>Use Case 12: Validate Vehicle Departure Data</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware has received the vehicle departure data.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware verifies the validity of the data.</li>
<li>If the data is valid, it is sent to MIIT.</li>
<li>If the data is invalid, error messages are generated.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The validated data is sent to MIIT or errors are notified.</li>
</ul>
<h4 id="use-case-13-authenticate-requests-to-the-tos-otm-api" tabindex="-1"><a class="header-anchor" href="#use-case-13-authenticate-requests-to-the-tos-otm-api"><span>Use Case 13: Authenticate Requests to the TOS (OTM) API</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware sends a request to the API.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends an authentication request.</li>
<li>The TOS (OTM) API validates the credentials.</li>
<li>The request is processed if authentication is successful.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> Authentication is successful, and the request is processed.</li>
</ul>
<h4 id="use-case-14-authenticate-requests-to-the-turbo-graneles-miit-api" tabindex="-1"><a class="header-anchor" href="#use-case-14-authenticate-requests-to-the-turbo-graneles-miit-api"><span>Use Case 14: Authenticate Requests to the Turbo Graneles (MIIT) API</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware sends a request to the API.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware sends an authentication request.</li>
<li>The MIIT API validates the credentials.</li>
<li>The request is processed if authentication is successful.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> Authentication is successful, and the request is processed.</li>
</ul>
<h4 id="use-case-15-handle-contingencies-in-case-of-tos-otm-query-failures" tabindex="-1"><a class="header-anchor" href="#use-case-15-handle-contingencies-in-case-of-tos-otm-query-failures"><span>Use Case 15: Handle Contingencies in Case of TOS (OTM) Query Failures</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware makes a query.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>If the query fails, the Middleware attempts a retry.</li>
<li>If the retry fails, the error is logged.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The error is logged and properly managed.</li>
</ul>
<h4 id="use-case-16-handle-contingencies-in-case-of-failures-when-sending-to-miit" tabindex="-1"><a class="header-anchor" href="#use-case-16-handle-contingencies-in-case-of-failures-when-sending-to-miit"><span>Use Case 16: Handle Contingencies in Case of Failures When Sending to MIIT</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> The Middleware makes a send request.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>If the send request fails, the Middleware attempts a retry.</li>
<li>If the retry fails, the error is logged.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The error is logged and properly managed.</li>
</ul>
<h4 id="use-case-17-temporarily-store-data" tabindex="-1"><a class="header-anchor" href="#use-case-17-temporarily-store-data"><span>Use Case 17: Temporarily Store Data</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Preconditions:</strong> Appointment, gate entry, or vehicle departure data is available.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware temporarily stores the data for future queries or actions.</li>
<li>The data is deleted when no longer needed.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The data is temporarily stored or deleted when completed.</li>
</ul>
<h4 id="use-case-18-send-responses-and-processing-confirmations" tabindex="-1"><a class="header-anchor" href="#use-case-18-send-responses-and-processing-confirmations"><span>Use Case 18: Send Responses and Processing Confirmations</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Description:</strong> The Middleware sends confirmation responses after successfully processing the information.</li>
<li><strong>Preconditions:</strong> The Middleware has processed the information.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware generates a confirmation response.</li>
<li>The Middleware sends the confirmation to TOS (OTM) or MIIT.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The confirmation has been successfully sent to the corresponding systems.</li>
</ul>
<h4 id="use-case-19-generate-transaction-audit-log" tabindex="-1"><a class="header-anchor" href="#use-case-19-generate-transaction-audit-log"><span>Use Case 19: Generate Transaction Audit Log</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Description:</strong> The Middleware generates a detailed log of all transactions for future audits.</li>
<li><strong>Preconditions:</strong> The transactions have been completed.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware logs each transaction in a log file.</li>
<li>The file is accessible for subsequent audits.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The transactions are recorded, and the log file is accessible for auditing.</li>
</ul>
<h4 id="use-case-20-generate-error-and-status-reports" tabindex="-1"><a class="header-anchor" href="#use-case-20-generate-error-and-status-reports"><span>Use Case 20: Generate Error and Status Reports</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware</li>
<li><strong>Description:</strong> The Middleware generates reports on errors and transaction statuses.</li>
<li><strong>Preconditions:</strong> The Middleware has processed a transaction.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The Middleware creates a detailed report.</li>
<li>The report is sent to the administrator or stored for review.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The error or status report has been successfully generated and sent or stored.</li>
</ul>
<h2 id="_5-validations-requested-by-the-client" tabindex="-1"><a class="header-anchor" href="#_5-validations-requested-by-the-client"><span>5. Validations Requested by the Client</span></a></h2>
<h4 id="v-01-validation-of-appointments" tabindex="-1"><a class="header-anchor" href="#v-01-validation-of-appointments"><span>V-01: Validation of Appointments</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that booked and canceled appointments are correctly processed and updated from TOS (OTM) before being sent to Turbo Graneles (MIIT).</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>Appointments must be correctly queried from TOS (OTM).</li>
<li>Canceled appointments must be identified and properly marked.</li>
<li>Appointment data must match the expected format for MIIT.</li>
</ul>
</li>
</ul>
<h4 id="v-02-validation-of-gate-entry-information" tabindex="-1"><a class="header-anchor" href="#v-02-validation-of-gate-entry-information"><span>V-02: Validation of Gate Entry Information</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the gate entry information from TOS (OTM) is correctly queried and processed before being sent to Turbo Graneles (MIIT).</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>Gate entry data must be complete and accurate (gate number, received weight, scale number, etc.).</li>
<li>The Middleware must verify that the data format is correct before sending it to MIIT.</li>
</ul>
</li>
</ul>
<h4 id="v-03-validation-of-completed-load-information" tabindex="-1"><a class="header-anchor" href="#v-03-validation-of-completed-load-information"><span>V-03: Validation of Completed Load Information</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the completed load information received from Turbo Graneles (MIIT) is complete and accurate before being processed in the TOS (OTM) system.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The completed load must be confirmed by MIIT.</li>
<li>The data should include details such as weight, vehicle identification, and any other relevant information.</li>
<li>The Middleware must verify the integrity and format of the data before sending it to TOS (OTM).</li>
</ul>
</li>
</ul>
<h4 id="v-04-validation-of-vehicle-exit-information" tabindex="-1"><a class="header-anchor" href="#v-04-validation-of-vehicle-exit-information"><span>V-04: Validation of Vehicle Exit Information</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the vehicle exit information retrieved from TOS (OTM) is correctly processed before being sent to Turbo Graneles (MIIT).</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The vehicle exit data must include the vehicle number, exit time, and other relevant details.</li>
<li>The Middleware must ensure that the data is sent in the appropriate format to MIIT.</li>
</ul>
</li>
</ul>
<h4 id="v-05-data-integrity-validation" tabindex="-1"><a class="header-anchor" href="#v-05-data-integrity-validation"><span>V-05: Data Integrity Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that all data queried and sent between TOS (OTM) and Turbo Graneles (MIIT) is correct, complete, and unaltered.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must perform a data integrity check both before and after each data transfer between the systems.</li>
<li>Any missing or incorrect data must be detected and reported for correction.</li>
</ul>
</li>
</ul>
<h4 id="v-06-authentication-and-authorization-validation" tabindex="-1"><a class="header-anchor" href="#v-06-authentication-and-authorization-validation"><span>V-06: Authentication and Authorization Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that all requests and responses between Middleware, TOS (OTM), and Turbo Graneles (MIIT) are properly authenticated.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>All API requests must be authenticated using the appropriate authentication method.</li>
<li>The Middleware must ensure that only authorized users and services can perform queries and data submissions.</li>
</ul>
</li>
</ul>
<h4 id="v-07-retry-validation-in-case-of-failures" tabindex="-1"><a class="header-anchor" href="#v-07-retry-validation-in-case-of-failures"><span>V-07: Retry Validation in Case of Failures</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that the Middleware implements an appropriate retry system in case of failures in data queries or submissions.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>If a submission or query fails, the Middleware must perform up to 3 retries before logging the error.</li>
<li>The retry logic must ensure the system continues functioning even if some attempts fail.</li>
</ul>
</li>
</ul>
<h4 id="v-08-data-format-validation" tabindex="-1"><a class="header-anchor" href="#v-08-data-format-validation"><span>V-08: Data Format Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the data received and sent between the Middleware, TOS (OTM), and Turbo Graneles (MIIT) is in the proper format for processing.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must validate that the format of the data sent and received complies with the specifications of each system (e.g., JSON, XML).</li>
<li>Any format discrepancies must be reported and handled appropriately.</li>
</ul>
</li>
</ul>
<h4 id="v-09-api-response-time-validation" tabindex="-1"><a class="header-anchor" href="#v-09-api-response-time-validation"><span>V-09: API Response Time Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that the requests to the APIs of TOS (OTM) and Turbo Graneles (MIIT) are completed within a reasonable time frame.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>API responses must be received within a maximum of 10 seconds per request.</li>
<li>The Middleware must manage and report any requests that exceed this time.</li>
</ul>
</li>
</ul>
<h4 id="v-10-transaction-status-notification-validation" tabindex="-1"><a class="header-anchor" href="#v-10-transaction-status-notification-validation"><span>V-10: Transaction Status Notification Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that the status notifications for transactions, such as the success or failure of data submission, are generated and sent correctly.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must generate clear notifications about the transaction status and send them to the corresponding systems.</li>
<li>Notifications must include relevant details, such as the error code and description in case of failures.</li>
</ul>
</li>
</ul>
<h4 id="v-11-audit-log-validation" tabindex="-1"><a class="header-anchor" href="#v-11-audit-log-validation"><span>V-11: Audit Log Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that all transactions and errors are correctly logged for future audits.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must log all interactions, including queries, submissions, and errors.</li>
<li>Logs must be accessible for future reviews and audits.</li>
</ul>
</li>
</ul>
<h4 id="v-12-vehicle-information-consistency-validation" tabindex="-1"><a class="header-anchor" href="#v-12-vehicle-information-consistency-validation"><span>V-12: Vehicle Information Consistency Validation</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that vehicle information, such as license plate number and weight, is consistent between TOS (OTM) and Turbo Graneles (MIIT).</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must verify that vehicle data is consistent before sending it to MIIT and vice versa.</li>
<li>Any inconsistency must be reported and corrected.</li>
</ul>
</li>
</ul>
<h4 id="v-13-error-handling-validation-in-data-submission" tabindex="-1"><a class="header-anchor" href="#v-13-error-handling-validation-in-data-submission"><span>V-13: Error Handling Validation in Data Submission</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that any error during the data submission process is identified, reported, and managed correctly.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must implement an error handling system that detects and manages failures during data submission.</li>
<li>Errors must be reported with sufficient details for resolution.</li>
</ul>
</li>
</ul>
<h4 id="v-14-validation-of-api-error-responses" tabindex="-1"><a class="header-anchor" href="#v-14-validation-of-api-error-responses"><span>V-14: Validation of API Error Responses</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that the Middleware appropriately handles error responses from the TOS (OTM) and Turbo Graneles (MIIT) APIs.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must correctly interpret error codes and messages returned by the APIs.</li>
<li>The system must perform the appropriate actions in response to these errors.</li>
</ul>
</li>
</ul>
<h4 id="v-15-validation-of-api-version-compatibility" tabindex="-1"><a class="header-anchor" href="#v-15-validation-of-api-version-compatibility"><span>V-15: Validation of API Version Compatibility</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that the versions of the TOS (OTM) and Turbo Graneles (MIIT) APIs are compatible with the version of the Middleware.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must verify that the API versions are compatible before performing queries or data submissions.</li>
<li>Any incompatibility must be detected and notified to the client.</li>
</ul>
</li>
</ul>
<h4 id="v-16-validation-of-data-processing-capacity" tabindex="-1"><a class="header-anchor" href="#v-16-validation-of-data-processing-capacity"><span>V-16: Validation of Data Processing Capacity</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the Middleware can handle large volumes of data without system failures or slowdowns.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must be able to process large amounts of data without affecting system performance.</li>
<li>Processing times must remain within acceptable limits.</li>
</ul>
</li>
</ul>
<h4 id="v-17-validation-of-historical-data-load" tabindex="-1"><a class="header-anchor" href="#v-17-validation-of-historical-data-load"><span>V-17: Validation of Historical Data Load</span></a></h4>
<ul>
<li><strong>Description:</strong> Verify that the Middleware can correctly handle and process historical data.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must be able to query and process historical data for appointments, vehicles, and loads without errors.</li>
</ul>
</li>
</ul>
<h4 id="v-18-validation-of-middleware-module-integration" tabindex="-1"><a class="header-anchor" href="#v-18-validation-of-middleware-module-integration"><span>V-18: Validation of Middleware Module Integration</span></a></h4>
<ul>
<li><strong>Description:</strong> Validate that all Middleware modules (queries, submissions, validations) function together seamlessly and without conflicts.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must ensure that all modules work together without integration errors.</li>
</ul>
</li>
</ul>
<h4 id="v-19-validation-of-compliance-with-regulations-and-standards" tabindex="-1"><a class="header-anchor" href="#v-19-validation-of-compliance-with-regulations-and-standards"><span>V-19: Validation of Compliance with Regulations and Standards</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the Middleware complies with applicable local and international regulations and standards.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must comply with data security, privacy standards, and any other relevant industry regulations.</li>
</ul>
</li>
</ul>
<h4 id="v-20-validation-of-service-availability" tabindex="-1"><a class="header-anchor" href="#v-20-validation-of-service-availability"><span>V-20: Validation of Service Availability</span></a></h4>
<ul>
<li><strong>Description:</strong> Ensure that the Middleware service is available for queries and submissions at all times, with high availability.</li>
<li><strong>Acceptance Criteria:</strong>
<ul>
<li>The Middleware must have an availability rate of 99.9% or higher, ensuring that the systems are always operational.</li>
</ul>
</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>
<p>Full and stable access to the TOS (OTM) and Turbo Graneles (MIIT) APIs is necessary for the integration between the systems. It is assumed that both services will be available throughout the integration process.</p>
</li>
<li>
<p>A functional testing environment must be available during the development and testing phases to simulate all interactions and possible scenarios between Middleware, TOS (OTM), and MIIT.</p>
</li>
<li>
<p>Detailed documentation of the TOS (OTM) and MIIT APIs is required to ensure correct integration. This should include specifications on endpoints, data formats, authentication methods, and possible error responses.</p>
</li>
<li>
<p>Proper configuration in MIIT is necessary for the parameterized sending of weight reports. This is critical for ensuring that the weight data received from TOS (OTM) is processed correctly in MIIT.</p>
</li>
</ul>
<h2 id="_7-service-data" tabindex="-1"><a class="header-anchor" href="#_7-service-data"><span>7. Service Data</span></a></h2>
<h3 id="_7-1-getvoyageandvessel" tabindex="-1"><a class="header-anchor" href="#_7-1-getvoyageandvessel"><span>7.1 GetVoyageandVessel</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"voyage"</span><span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"vesselName"</span><span class="token operator">:</span> <span class="token string">"CMA-Test"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"vesselVoyage"</span><span class="token operator">:</span> <span class="token string">"CMA-Test1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"eta"</span><span class="token operator">:</span> <span class="token string">"2024-07-20-10:36.25"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"etd"</span><span class="token operator">:</span> <span class="token string">"2024-07-20-10:45.55"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-getloadbyeachvessel" tabindex="-1"><a class="header-anchor" href="#_7-2-getloadbyeachvessel"><span>7.2 GetLoadByEachVessel</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"voyage"</span><span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"noBL"</span><span class="token operator">:</span> <span class="token string">"SSF034576272"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"customer"</span><span class="token operator">:</span> <span class="token string">"Uniban"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"product"</span><span class="token operator">:</span> <span class="token string">"Banana"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weightBl "</span><span class="token operator">:</span> <span class="token string">"4550.22"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-sendvesselstatus" tabindex="-1"><a class="header-anchor" href="#_7-3-sendvesselstatus"><span>7.3 SendVesselStatus</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">" voyage "</span><span class="token operator">:</span> <span class="token string">"DSFR-0007"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">" status "</span><span class="token operator">:</span> <span class="token string">"Arrived"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-sendreceiptrecord" tabindex="-1"><a class="header-anchor" href="#_7-4-sendreceiptrecord"><span>7.4 SendReceiptRecord</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"voyage"</span><span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"idTransaction"</span><span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weighingPit"</span><span class="token operator">:</span> <span class="token string">"05"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"productId"</span><span class="token operator">:</span> <span class="token string">"Avocado"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"receiptWeight"</span><span class="token operator">:</span> <span class="token string">"12000,50"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"DateTimeEnd"</span><span class="token operator">:</span> <span class="token string">"2024-07-20-10:45.55"</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5sendcustomsreleasedcargo" tabindex="-1"><a class="header-anchor" href="#_7-5sendcustomsreleasedcargo"><span>7.5	SendCustomsReleasedCargo</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"voyage"</span><span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"Release"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">" weightBl "</span><span class="token operator">:</span> <span class="token string">"52000"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"noBL"</span><span class="token operator">:</span> <span class="token string">"SSF034576272"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"customer"</span><span class="token operator">:</span> <span class="token string">"UNIBAN"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"product"</span><span class="token operator">:</span> <span class="token string">"Avocado"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-6getappointmentinformation" tabindex="-1"><a class="header-anchor" href="#_7-6getappointmentinformation"><span>7.6	GetAppointmentInformation</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"created"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"dateTimeStart"</span><span class="token operator">:</span> <span class="token string">"2024-07-21 21:30"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"dateTimeEnd"</span><span class="token operator">:</span> <span class="token string">"2024-07-21 22:00"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"transportId"</span><span class="token operator">:</span> <span class="token string">"89520125689"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"driverName"</span><span class="token operator">:</span> <span class="token string">"Camilo Cárdenas"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"driverId"</span><span class="token operator">:</span> <span class="token string">"1234567"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckPlate"</span><span class="token operator">:</span> <span class="token string">"LJK178"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"maxWeightPermitted"</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"noBL"</span><span class="token operator">:</span> <span class="token string">"SSF034576272"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"product"</span><span class="token operator">:</span> <span class="token string">"Avocado"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"voyage"</span><span class="token operator">:</span> <span class="token string">"CMA-Test1234"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weightRequired"</span><span class="token operator">:</span> <span class="token number">35000</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"destinationCode"</span><span class="token operator">:</span> <span class="token number">29</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-7getgatein" tabindex="-1"><a class="header-anchor" href="#_7-7getgatein"><span>7.7	GetGateIN</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"truckPlate"</span><span class="token operator">:</span> <span class="token string">"LJK178"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"arriveDate"</span><span class="token operator">:</span> <span class="token string">"2024-07-21"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"arriveTime"</span><span class="token operator">:</span> <span class="token string">"21:45:22"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"arriveWeight"</span><span class="token operator">:</span> <span class="token number">1550.25</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckTransaction"</span><span class="token operator">:</span> <span class="token number">555879</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">" weighingBridgeId "</span><span class="token operator">:</span> <span class="token string">"2"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-8sendtruckfinalizationloading" tabindex="-1"><a class="header-anchor" href="#_7-8sendtruckfinalizationloading"><span>7.8	SendTruckFinalizationLoading</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"truckPlate"</span><span class="token operator">:</span> <span class="token string">"LJK178"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weighingPitId "</span><span class="token operator">:</span> <span class="token string">"04"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weight"</span><span class="token operator">:</span> <span class="token number">35000</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckTransaction"</span><span class="token operator">:</span> <span class="token number">555879</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-9getgateout" tabindex="-1"><a class="header-anchor" href="#_7-9getgateout"><span>7.9	GetGateOut</span></a></h3>
<p><strong>Request and Response</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"departureDateTime"</span><span class="token operator">:</span> <span class="token string">"2024-07-22 11:15:24"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckPlate"</span><span class="token operator">:</span> <span class="token string">"LJK178"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckGrossWeight "</span><span class="token operator">:</span> <span class="token number">15180.13</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"cargoWeight"</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"truckTransaction"</span><span class="token operator">:</span> <span class="token number">98745</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"weightBridgeId"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Sucessfull"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-unit-tests" tabindex="-1"><a class="header-anchor" href="#_8-unit-tests"><span>8. Unit Tests</span></a></h2>
<h3 id="_8-1-check-test" tabindex="-1"><a class="header-anchor" href="#_8-1-check-test"><span>8.1 Check - Test</span></a></h3>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="@source/assets/MIIT/CECK-TEST1.png" alt=""></span></a></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="@source/assets/MIIT/CHECK-TEST2.png" alt=""></span></a></h3>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="@source/assets/MIIT/CHECK-TEST3.png" alt=""></span></a></h3>
<h3 id="_8-2-vessel-information" tabindex="-1"><a class="header-anchor" href="#_8-2-vessel-information"><span>8.2 Vessel Information</span></a></h3>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="@source/assets/MIIT/VESSELINFORMATIO1.png" alt=""></span></a></h3>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4"><span><img src="@source/assets/MIIT/VESSELINFORMATION2.png" alt=""></span></a></h3>
<h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5"><span><img src="@source/assets/MIIT/VESSELINFORMATION3.png" alt=""></span></a></h3>
<h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6"><span><img src="@source/assets/MIIT/VESSELINFORMATION4.png" alt=""></span></a></h3>
<h3 id="_8-3-get-detailed-information-on-the-load-of-each-vessel" tabindex="-1"><a class="header-anchor" href="#_8-3-get-detailed-information-on-the-load-of-each-vessel"><span>8.3 Get Detailed Information on the Load of Each Vessel</span></a></h3>
<h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7"><span><img src="@source/assets/MIIT/GET-DETAILED-INFORMATION1.png" alt=""></span></a></h3>
<h3 id="-8" tabindex="-1"><a class="header-anchor" href="#-8"><span><img src="@source/assets/MIIT/GET-DETAILED-INFORMATION2.png" alt=""></span></a></h3>
<h3 id="-9" tabindex="-1"><a class="header-anchor" href="#-9"><span><img src="@source/assets/MIIT/GET-DETAILED-INFORMATION3.png" alt=""></span></a></h3>
<h3 id="-10" tabindex="-1"><a class="header-anchor" href="#-10"><span><img src="@source/assets/MIIT/GET-DETAILED-INFORMATION4.png" alt=""></span></a></h3>
<h3 id="_8-4-send-finalization-charge-from-miit" tabindex="-1"><a class="header-anchor" href="#_8-4-send-finalization-charge-from-miit"><span>8.4 Send Finalization Charge from MIIT</span></a></h3>
<h3 id="-11" tabindex="-1"><a class="header-anchor" href="#-11"><span><img src="@source/assets/MIIT/SEND-FINALIZATION-CHARGE1.png" alt=""></span></a></h3>
<h3 id="-12" tabindex="-1"><a class="header-anchor" href="#-12"><span><img src="@source/assets/MIIT/SEND-FINALIZATION-CHARGE2.png" alt=""></span></a></h3>
<h3 id="-13" tabindex="-1"><a class="header-anchor" href="#-13"><span><img src="@source/assets/MIIT/SEND-FINALIZATION-CHARGE3.png" alt=""></span></a></h3>
<h3 id="-14" tabindex="-1"><a class="header-anchor" href="#-14"><span><img src="@source/assets/MIIT/SEND-FINALIZATION-CHARGE4.png" alt=""></span></a></h3>
<h3 id="_8-5-receives-appointment-information-from-tos-processes-it-and-forwards-it-to-miit" tabindex="-1"><a class="header-anchor" href="#_8-5-receives-appointment-information-from-tos-processes-it-and-forwards-it-to-miit"><span>8.5 Receives Appointment Information from TOS, Processes It, and Forwards It to MIIT</span></a></h3>
<h3 id="-15" tabindex="-1"><a class="header-anchor" href="#-15"><span><img src="@source/assets/MIIT/RECEIVES-APPOINMENT-INFORMATION1.png" alt=""></span></a></h3>
<h3 id="-16" tabindex="-1"><a class="header-anchor" href="#-16"><span><img src="@source/assets/MIIT/RECEIVES-APPOINMENT-INFORMATION2.png" alt=""></span></a></h3>
<h3 id="-17" tabindex="-1"><a class="header-anchor" href="#-17"><span><img src="@source/assets/MIIT/RECEIVES-APPOINMENT-INFORMATION3.png" alt=""></span></a></h3>
<h3 id="-18" tabindex="-1"><a class="header-anchor" href="#-18"><span><img src="@source/assets/MIIT/RECEIVES-APPOINMENT-INFORMATION4.png" alt=""></span></a></h3>
<h3 id="_8-6-receives-gate-in-information-from-tos-processes-it-and-forwards-it-to-miit" tabindex="-1"><a class="header-anchor" href="#_8-6-receives-gate-in-information-from-tos-processes-it-and-forwards-it-to-miit"><span>8.6 Receives Gate-in Information from TOS, Processes It, and Forwards It to MIIT</span></a></h3>
<h3 id="-19" tabindex="-1"><a class="header-anchor" href="#-19"><span><img src="@source/assets/MIIT/RECEIVES GATE-IN.png" alt=""></span></a></h3>
<h3 id="-20" tabindex="-1"><a class="header-anchor" href="#-20"><span><img src="@source/assets/MIIT/RECEIVES GATE-IN1.png" alt=""></span></a></h3>
<h3 id="-21" tabindex="-1"><a class="header-anchor" href="#-21"><span><img src="@source/assets/MIIT/RECEIVES GATE-IN2.png" alt=""></span></a></h3>
<h3 id="-22" tabindex="-1"><a class="header-anchor" href="#-22"><span><img src="@source/assets/MIIT/RECEIVES GATE-IN3.png" alt=""></span></a></h3>
<h3 id="_8-7-sends-the-end-vessel-process-data-to-miit-for-processing-and-validation" tabindex="-1"><a class="header-anchor" href="#_8-7-sends-the-end-vessel-process-data-to-miit-for-processing-and-validation"><span>8.7 Sends the End Vessel Process Data to MIIT for Processing and Validation</span></a></h3>
<h3 id="-23" tabindex="-1"><a class="header-anchor" href="#-23"><span><img src="@source/assets/MIIT/SENDS THE END VESSEL1.png" alt=""></span></a></h3>
<h3 id="-24" tabindex="-1"><a class="header-anchor" href="#-24"><span><img src="@source/assets/MIIT/SENDS THE END VESSEL2.png" alt=""></span></a></h3>
<h3 id="-25" tabindex="-1"><a class="header-anchor" href="#-25"><span><img src="@source/assets/MIIT/SENDS THE END VESSEL3.png" alt=""></span></a></h3>
<h3 id="-26" tabindex="-1"><a class="header-anchor" href="#-26"><span><img src="@source/assets/MIIT/SENDS THE END VESSEL4.png" alt=""></span></a></h3>
<h3 id="_8-8-registers-product-details-received-for-processing-in-miit" tabindex="-1"><a class="header-anchor" href="#_8-8-registers-product-details-received-for-processing-in-miit"><span>8.8 Registers Product Details Received for Processing in MIIT</span></a></h3>
<h3 id="-27" tabindex="-1"><a class="header-anchor" href="#-27"><span><img src="@source/assets/MIIT/REGISTER PRODUCT DETAILS1.png" alt=""></span></a></h3>
<h3 id="-28" tabindex="-1"><a class="header-anchor" href="#-28"><span><img src="@source/assets/MIIT/REGISTER PRODUCT DETAILS2.png" alt=""></span></a></h3>
<h3 id="-29" tabindex="-1"><a class="header-anchor" href="#-29"><span><img src="@source/assets/MIIT/REGISTER PRODUCT DETAILS3.png" alt=""></span></a></h3>
<h3 id="-30" tabindex="-1"><a class="header-anchor" href="#-30"><span><img src="@source/assets/MIIT/REGISTER PRODUCT DETAILS4.png" alt=""></span></a></h3>
<h3 id="_8-9-payload-containing-the-vehicle-departure-details" tabindex="-1"><a class="header-anchor" href="#_8-9-payload-containing-the-vehicle-departure-details"><span>8.9 Payload Containing the Vehicle Departure Details</span></a></h3>
<h3 id="-31" tabindex="-1"><a class="header-anchor" href="#-31"><span><img src="@source/assets/MIIT/PAYLOAD CONTAINING1.png" alt=""></span></a></h3>
<h3 id="-32" tabindex="-1"><a class="header-anchor" href="#-32"><span><img src="@source/assets/MIIT/PAYLOAD CONTAINING2.png" alt=""></span></a></h3>
<h3 id="-33" tabindex="-1"><a class="header-anchor" href="#-33"><span><img src="@source/assets/MIIT/PAYLOAD CONTAINING3.png" alt=""></span></a></h3>
<h3 id="-34" tabindex="-1"><a class="header-anchor" href="#-34"><span><img src="@source/assets/MIIT/PAYLOAD CONTAINING4.png" alt=""></span></a></h3>
<h3 id="_8-10-sends-container-data-to-the-terminal-operating-system-tos" tabindex="-1"><a class="header-anchor" href="#_8-10-sends-container-data-to-the-terminal-operating-system-tos"><span>8.10 Sends Container Data to the Terminal Operating System (TOS)</span></a></h3>
<h3 id="-35" tabindex="-1"><a class="header-anchor" href="#-35"><span><img src="@source/assets/MIIT/SENDS CONTAINER DATA1.png" alt=""></span></a></h3>
<h3 id="-36" tabindex="-1"><a class="header-anchor" href="#-36"><span><img src="@source/assets/MIIT/SENDS CONTAINER DATA2.png" alt=""></span></a></h3>
<h3 id="-37" tabindex="-1"><a class="header-anchor" href="#-37"><span><img src="@source/assets/MIIT/SENDS CONTAINER DATA3.png" alt=""></span></a></h3>
<h3 id="-38" tabindex="-1"><a class="header-anchor" href="#-38"><span><img src="@source/assets/MIIT/SENDS CONTAINER DATA4.png" alt=""></span></a></h3>
<h3 id="_8-11-sends-cargo-release-information-to-miit" tabindex="-1"><a class="header-anchor" href="#_8-11-sends-cargo-release-information-to-miit"><span>8.11 Sends Cargo Release Information to MIIT</span></a></h3>
<h3 id="-39" tabindex="-1"><a class="header-anchor" href="#-39"><span><img src="@source/assets/MIIT/SENDS CARGO RELEASE1.png" alt=""></span></a></h3>
<h3 id="-40" tabindex="-1"><a class="header-anchor" href="#-40"><span><img src="@source/assets/MIIT/SENDS CARGO RELEASE2.png" alt=""></span></a></h3>
<h3 id="-41" tabindex="-1"><a class="header-anchor" href="#-41"><span><img src="@source/assets/MIIT/SENDS CARGO RELEASE3.png" alt=""></span></a></h3>
<h3 id="-42" tabindex="-1"><a class="header-anchor" href="#-42"><span><img src="@source/assets/MIIT/SENDS CARGO RELEASE4.png" alt=""></span></a></h3>
<h3 id="_8-12-processes-a-request-to-lock-or-unlock-a-cargo-in-the-tos-system" tabindex="-1"><a class="header-anchor" href="#_8-12-processes-a-request-to-lock-or-unlock-a-cargo-in-the-tos-system"><span>8.12 Processes a Request to Lock or Unlock a Cargo in the TOS System</span></a></h3>
<h3 id="-43" tabindex="-1"><a class="header-anchor" href="#-43"><span><img src="@source/assets/MIIT/PROCESSES A REQUEST TO LOCK1.png" alt=""></span></a></h3>
<h3 id="-44" tabindex="-1"><a class="header-anchor" href="#-44"><span><img src="@source/assets/MIIT/PROCESSES A REQUEST TO LOCK2.png" alt=""></span></a></h3>
<h3 id="-45" tabindex="-1"><a class="header-anchor" href="#-45"><span><img src="@source/assets/MIIT/PROCESSES A REQUEST TO LOCK3.png" alt=""></span></a></h3>
<h3 id="-46" tabindex="-1"><a class="header-anchor" href="#-46"><span><img src="@source/assets/MIIT/PROCESSES A REQUEST TO LOCK4.png" alt=""></span></a></h3>
<h3 id="_8-13-sends-a-block-or-unblock-order-to-the-tos-system" tabindex="-1"><a class="header-anchor" href="#_8-13-sends-a-block-or-unblock-order-to-the-tos-system"><span>8.13 Sends a Block or Unblock Order to the TOS System</span></a></h3>
<h3 id="-47" tabindex="-1"><a class="header-anchor" href="#-47"><span><img src="@source/assets/MIIT/SENDS A BLOCK1.png" alt=""></span></a></h3>
<h3 id="-48" tabindex="-1"><a class="header-anchor" href="#-48"><span><img src="@source/assets/MIIT/SENDS A BLOCK2.png" alt=""></span></a></h3>
<h3 id="-49" tabindex="-1"><a class="header-anchor" href="#-49"><span><img src="@source/assets/MIIT/SENDS A BLOCK3.png" alt=""></span></a></h3>
<h3 id="-50" tabindex="-1"><a class="header-anchor" href="#-50"><span><img src="@source/assets/MIIT/SENDS A BLOCK4.png" alt=""></span></a></h3>
<h2 id="_9-annexes" tabindex="-1"><a class="header-anchor" href="#_9-annexes"><span>9. Annexes</span></a></h2>
<h3 id="_9-1-getvoyageandvessel" tabindex="-1"><a class="header-anchor" href="#_9-1-getvoyageandvessel"><span>9.1 GetVoyageandVessel</span></a></h3>
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
<td>voyage</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>vesselName</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>vesselVoyage</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>eta</td>
<td>datetime</td>
<td>datetime</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>etd</td>
<td>datetime</td>
<td>datetime</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="response" tabindex="-1"><a class="header-anchor" href="#response"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-2-getloadbyeachvessel" tabindex="-1"><a class="header-anchor" href="#_9-2-getloadbyeachvessel"><span>9.2 GetLoadByEachVessel</span></a></h2>
<h4 id="request-1" tabindex="-1"><a class="header-anchor" href="#request-1"><span>Request</span></a></h4>
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
<td>voyage</td>
<td>Number</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>noBL</td>
<td>String</td>
<td>16</td>
<td>BL number in the TOS</td>
</tr>
<tr>
<td>3</td>
<td>customer</td>
<td>String</td>
<td>16</td>
<td>Customer in the TOS</td>
</tr>
<tr>
<td>4</td>
<td>product</td>
<td>String</td>
<td>16</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>weightBl</td>
<td>Numeric</td>
<td>(20,2)/decimal</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="response-1" tabindex="-1"><a class="header-anchor" href="#response-1"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-3-sendvesselstatus" tabindex="-1"><a class="header-anchor" href="#_9-3-sendvesselstatus"><span>9.3 SendVesselStatus</span></a></h2>
<h4 id="request-2" tabindex="-1"><a class="header-anchor" href="#request-2"><span>Request</span></a></h4>
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
<td>voyage</td>
<td>String</td>
<td>10/Varchar</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>status</td>
<td>String</td>
<td>30/Varchar</td>
<td>Arrived, Completed</td>
</tr>
</tbody>
</table>
<h4 id="response-2" tabindex="-1"><a class="header-anchor" href="#response-2"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-4-sendreceiptrecord" tabindex="-1"><a class="header-anchor" href="#_9-4-sendreceiptrecord"><span>9.4 SendReceiptRecord</span></a></h2>
<h4 id="request-3" tabindex="-1"><a class="header-anchor" href="#request-3"><span>Request</span></a></h4>
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
<td>voyage</td>
<td>String</td>
<td>30/Varchar</td>
<td>Vessel visit from TOS</td>
</tr>
<tr>
<td>2</td>
<td>idTransaction</td>
<td>String</td>
<td>10/Varchar</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>productId</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>receiptWeight</td>
<td>Numeric</td>
<td>(10,2)/decimal</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>DateTimeEnd</td>
<td>DateTime</td>
<td>20</td>
<td>2024-07-20-11:00.00</td>
</tr>
<tr>
<td>6</td>
<td>weighingPit</td>
<td>String</td>
<td>10/Varchar</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="response-3" tabindex="-1"><a class="header-anchor" href="#response-3"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-5-sendcustomsreleasedcargo" tabindex="-1"><a class="header-anchor" href="#_9-5-sendcustomsreleasedcargo"><span>9.5 SendCustomsReleasedCargo</span></a></h2>
<h4 id="request-4" tabindex="-1"><a class="header-anchor" href="#request-4"><span>Request</span></a></h4>
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
<td>voyage</td>
<td>String</td>
<td>30/Varchar</td>
<td>Vessel visit from TOS</td>
</tr>
<tr>
<td>3</td>
<td>noBl</td>
<td>String</td>
<td>16</td>
<td>BL number in the TOS</td>
</tr>
<tr>
<td>4</td>
<td>customer</td>
<td>String</td>
<td>16</td>
<td>Customer</td>
</tr>
<tr>
<td>5</td>
<td>product</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>weightBl</td>
<td>Numeric</td>
<td>(10,2)/decimal</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>status</td>
<td>String</td>
<td></td>
<td>Release, Apply</td>
</tr>
</tbody>
</table>
<h4 id="response-4" tabindex="-1"><a class="header-anchor" href="#response-4"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-6-getappointmentinformation" tabindex="-1"><a class="header-anchor" href="#_9-6-getappointmentinformation"><span>9.6 GetAppointmentInformation</span></a></h2>
<h4 id="request-5" tabindex="-1"><a class="header-anchor" href="#request-5"><span>Request</span></a></h4>
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
<td>status</td>
<td>Numeric</td>
<td>int</td>
<td>1 appointment taken, 0 appointment cancelled</td>
</tr>
<tr>
<td>2</td>
<td>dateTimeStart</td>
<td>datetime</td>
<td>Yyyy-MM-dd HH:mm:ss</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>dateTimeEnd</td>
<td>datetime</td>
<td>Yyyy-MM-dd HH:mm:ss</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>transportid</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>driverId</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>driverName</td>
<td>String</td>
<td>50/Varchar</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>truckPlate</td>
<td>String</td>
<td>15/Varchar</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>maxWeightPermitted</td>
<td>Numeric</td>
<td></td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>noBl</td>
<td>String</td>
<td>16/Varchar</td>
<td>BL number in the TOS</td>
</tr>
<tr>
<td>10</td>
<td>product</td>
<td>String</td>
<td>30/Varchar</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>voyage</td>
<td>String</td>
<td>30/Varchar</td>
<td>Vessel voyage from TOS</td>
</tr>
<tr>
<td>12</td>
<td>weightRequired</td>
<td>Numeric</td>
<td></td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>destinationCode</td>
<td>Numeric</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="response-5" tabindex="-1"><a class="header-anchor" href="#response-5"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-7-getgatein" tabindex="-1"><a class="header-anchor" href="#_9-7-getgatein"><span>9.7 GetGateIN</span></a></h2>
<h4 id="response-6" tabindex="-1"><a class="header-anchor" href="#response-6"><span>Response</span></a></h4>
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
<td>truckPlate</td>
<td>String</td>
<td>15/Varchar</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>arriveDateTime</td>
<td>DateTime</td>
<td>Yyyy-MM-dd HH:mm:ss</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>arriveWeight</td>
<td>Numeric</td>
<td>(15,2)/decimal</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>truckTransaction</td>
<td>Numeric</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>weighingBridgeId</td>
<td>Numeric</td>
<td>int</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="response-7" tabindex="-1"><a class="header-anchor" href="#response-7"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-8-sendtruckfinalizationloading" tabindex="-1"><a class="header-anchor" href="#_9-8-sendtruckfinalizationloading"><span>9.8 SendTruckFinalizationLoading</span></a></h2>
<h4 id="request-6" tabindex="-1"><a class="header-anchor" href="#request-6"><span>Request</span></a></h4>
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
<td>truckPlate</td>
<td>String</td>
<td>15/Varchar</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>weighingPit</td>
<td>Numeric</td>
<td>(15,2)/decimal</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>weight</td>
<td>Numeric</td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>truckTransaction</td>
<td>Numeric</td>
<td>int</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="response-8" tabindex="-1"><a class="header-anchor" href="#response-8"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
<td>String</td>
<td>250</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_9-9-getgateout" tabindex="-1"><a class="header-anchor" href="#_9-9-getgateout"><span>9.9 GetGateOut</span></a></h2>
<h4 id="request-7" tabindex="-1"><a class="header-anchor" href="#request-7"><span>Request</span></a></h4>
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
<td>departureDateTime</td>
<td>String</td>
<td>15/Varchar</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>truckPlate</td>
<td>String</td>
<td>15/Varchar</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>truckTransaction</td>
<td>Numeric</td>
<td>(10,2)/decimal</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>transactionType</td>
<td>String</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="response-9" tabindex="-1"><a class="header-anchor" href="#response-9"><span>Response</span></a></h4>
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
<td>number</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>description</td>
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
    width: 20%;  /* Ajusta este porcentaje según el número de columnas */
}
</style>