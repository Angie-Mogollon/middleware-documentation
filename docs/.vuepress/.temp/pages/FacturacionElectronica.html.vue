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
<p>To integrate the Middleware system with TOS (OTM), the technology provider (Facture), the ERP, and the Payment Portal, in order to manage electronic invoicing, status reporting, and payment processing. The goal is to automate communication between these systems, ensuring that invoices, credit notes, and payments are processed and recorded accurately.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The Sprint scope includes implementing services in Middleware to handle the reception, validation, and transmission of invoices and credit notes from TOS, communication with the technology provider for authentication and processing with DIAN, and status notifications to the ERP and Payment Portal.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<ul>
<li><strong>RF-01</strong>: Reception and Processing of Invoices/Credit Notes from TOS (OTM) - Middleware must receive invoices or credit notes in JSON format from TOS, validate them, convert them to XML, and send them to the technology provider.</li>
<li><strong>RF-02</strong>: Authentication with the Technology Provider - Middleware must authenticate with the provider (Facture) to obtain a token and use it for invoicing transactions.</li>
<li><strong>RF-03</strong>: Sending Invoices/Credit Notes to the Technology Provider - Middleware must send invoices/credit notes to the technology provider for processing with DIAN and handle any errors or rejections.</li>
<li><strong>RF-04</strong>: Contingency Process - Middleware must activate a contingency process if DIAN does not respond within the expected time frame, generating contingency invoices.</li>
<li><strong>RF-05</strong>: Status Reporting to TOS (OTM) - Middleware must notify TOS of the final status of invoices/credit notes (accepted or rejected), including details such as CUFE and URL.</li>
<li><strong>RF-06</strong>: Status Reporting to ERP - Middleware must report the status of invoices/credit notes to the ERP for accounting, adapting the data to the required structure.</li>
<li><strong>RF-07</strong>: Status Reporting to Payment Portal - Middleware must send invoice information to the Payment Portal for viewing and payment.</li>
<li><strong>RF-08</strong>: Reporting Payments to TOS and ERP - Middleware must report the status of payments received from the Payment Portal to both TOS and ERP.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-authentication-with-the-technology-provider" tabindex="-1"><a class="header-anchor" href="#use-case-1-authentication-with-the-technology-provider"><span>Use Case 1: Authentication with the Technology Provider</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: Middleware must have the provider's credentials.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware sends an authentication request with the credentials.</li>
<li>The provider returns an access token.</li>
<li>Middleware stores the token for future use.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: Middleware is authenticated and can access the provider's services.</li>
</ul>
<h4 id="use-case-2-send-invoice-or-credit-note" tabindex="-1"><a class="header-anchor" href="#use-case-2-send-invoice-or-credit-note"><span>Use Case 2: Send Invoice or Credit Note</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: Middleware must be authenticated and have the invoice ready for submission.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware validates the invoice format against the required schema.</li>
<li>Middleware sends the invoice to the technology provider.</li>
<li>Middleware waits for the provider's response.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The invoice status is recorded, and a notification is sent to TOS (OTM) or ERP as applicable.</li>
</ul>
<h4 id="use-case-3-handle-provider-response" tabindex="-1"><a class="header-anchor" href="#use-case-3-handle-provider-response"><span>Use Case 3: Handle Provider Response</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: A response has been received from the provider after sending the invoice.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware analyzes the provider's response.</li>
<li>If the response indicates acceptance, it records the CUFE and relevant details.</li>
<li>If the response indicates rejection, it logs the rejection reason and notifies TOS (OTM) and ERP.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The final status of the invoice is updated in the system.</li>
</ul>
<h4 id="use-case-4-contingency-process" tabindex="-1"><a class="header-anchor" href="#use-case-4-contingency-process"><span>Use Case 4: Contingency Process</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: No response has been received from DIAN within the established timeframe.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware activates the contingency process.</li>
<li>Middleware generates a contingency invoice using an approved folio.</li>
<li>Middleware legalizes the invoice once the contingency process ends.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: Contingency invoices are registered and notified.</li>
</ul>
<h4 id="use-case-5-invoice-status-inquiry" tabindex="-1"><a class="header-anchor" href="#use-case-5-invoice-status-inquiry"><span>Use Case 5: Invoice Status Inquiry</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: Middleware needs to inquire about the status of an invoice that was previously sent.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware sends a status inquiry request to the technology provider.</li>
<li>The technology provider responds with the current status of the invoice.</li>
<li>Middleware records and notifies the status to TOS (OTM) or ERP.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The invoice status is updated in the system.</li>
</ul>
<h4 id="use-case-6-receipt-of-credit-notes" tabindex="-1"><a class="header-anchor" href="#use-case-6-receipt-of-credit-notes"><span>Use Case 6: Receipt of Credit Notes</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: The system has received a request to create a credit note.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware receives the credit note creation request from TOS (OTM).</li>
<li>Middleware validates the credit note information.</li>
<li>Middleware sends the credit note to the technology provider.</li>
<li>The provider responds with the acceptance or rejection of the credit note.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The credit note is recorded, and its status is notified to TOS (OTM).</li>
</ul>
<h4 id="use-case-7-error-notification-to-the-support-team" tabindex="-1"><a class="header-anchor" href="#use-case-7-error-notification-to-the-support-team"><span>Use Case 7: Error Notification to the Support Team</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware, Support Team</li>
<li><strong>Preconditions</strong>: An error occurs during the invoicing or credit note submission process.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware detects an error during processing.</li>
<li>Middleware logs the error in the system logs.</li>
<li>Middleware sends a notification to the support team with the error details.</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The support team is notified, and the error is logged.</li>
</ul>
<h4 id="use-case-8-inquiry-and-legalization-of-contingency-invoices" tabindex="-1"><a class="header-anchor" href="#use-case-8-inquiry-and-legalization-of-contingency-invoices"><span>Use Case 8: Inquiry and Legalization of Contingency Invoices</span></a></h4>
<ul>
<li><strong>Actor</strong>: Middleware</li>
<li><strong>Preconditions</strong>: A contingency invoice has been generated.</li>
<li><strong>Main Flow</strong>:
<ol>
<li>Middleware inquires with DIAN about the availability of the service.</li>
<li>Once the service is available, Middleware legalizes the contingency invoice.</li>
<li>Middleware records and notifies the legalization to TOS (OTM).</li>
</ol>
</li>
<li><strong>Postconditions</strong>: The invoice is legalized, and the contingency process is completed.</li>
</ul>
<h2 id="_5-validations-requested-by-the-client" tabindex="-1"><a class="header-anchor" href="#_5-validations-requested-by-the-client"><span>5. Validations Requested by the Client</span></a></h2>
<h4 id="v-01-authentication-with-the-technology-provider" tabindex="-1"><a class="header-anchor" href="#v-01-authentication-with-the-technology-provider"><span>V-01: Authentication with the Technology Provider</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the provided credentials are correct and that the authentication token is received.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>Middleware must receive a valid token that allows access to the provider's services.</li>
<li>If the credentials are invalid, an appropriate error message must be displayed.</li>
</ul>
</li>
</ul>
<h4 id="v-02-send-invoice-or-credit-note" tabindex="-1"><a class="header-anchor" href="#v-02-send-invoice-or-credit-note"><span>V-02: Send Invoice or Credit Note</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the invoice or credit note is in the correct format before sending it to the provider.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>If the invoice meets the required schema, it should be allowed for submission.</li>
<li>If not, an error message detailing the format issue must be returned.</li>
</ul>
</li>
</ul>
<h4 id="v-03-handle-provider-response" tabindex="-1"><a class="header-anchor" href="#v-03-handle-provider-response"><span>V-03: Handle Provider Response</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the provider's response contains all the required information, such as CUFE in case of acceptance or clear reasons in case of rejection.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The CUFE must be correctly recorded in the system.</li>
<li>Rejection reasons must be stored and communicated appropriately.</li>
</ul>
</li>
</ul>
<h4 id="v-04-contingency-process" tabindex="-1"><a class="header-anchor" href="#v-04-contingency-process"><span>V-04: Contingency Process</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that Middleware generates contingency invoices only when the necessary conditions are met (e.g., no response from DIAN within a specified timeframe).</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The contingency invoice must be generated only under failure conditions or unavailability of the DIAN service.</li>
</ul>
</li>
</ul>
<h4 id="v-05-invoice-status-inquiry" tabindex="-1"><a class="header-anchor" href="#v-05-invoice-status-inquiry"><span>V-05: Invoice Status Inquiry</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the contingency invoice legalization process occurs once the DIAN service becomes available.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The contingency invoice must be legalized correctly and notified to the corresponding systems.</li>
</ul>
</li>
</ul>
<h4 id="v-06-receipt-of-credit-notes" tabindex="-1"><a class="header-anchor" href="#v-06-receipt-of-credit-notes"><span>V-06: Receipt of Credit Notes</span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the credit note creation request meets the necessary format and data requirements before sending it to the provider.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The credit note must be validated before submission, and any errors in the request must be reported to the originating system (TOS/OTM).</li>
</ul>
</li>
</ul>
<h4 id="v-07-error-notification-to-the-support-team" tabindex="-1"><a class="header-anchor" href="#v-07-error-notification-to-the-support-team"><span><strong>V-07: Error Notification to the Support Team</strong></span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the system detects critical errors during invoice or credit note processing and sends an appropriate notification to the support team.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>Errors must be logged in the system logs and notified to the support team in a timely manner.</li>
</ul>
</li>
</ul>
<h4 id="v-08-inquiry-and-legalization-of-contingency-invoices" tabindex="-1"><a class="header-anchor" href="#v-08-inquiry-and-legalization-of-contingency-invoices"><span><strong>V-08: Inquiry and Legalization of Contingency Invoices</strong></span></a></h4>
<ul>
<li><strong>Description</strong>: Validate that the inquiry to DIAN about service availability is performed correctly before attempting to legalize contingency invoices.</li>
<li><strong>Acceptance Criteria</strong>:
<ul>
<li>The system must correctly register the availability of DIAN services and proceed to legalize the invoice if the service is available.</li>
</ul>
</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>It is assumed that the technology provider will provide the necessary documentation for authentication and invoice submission.</li>
<li>The system will depend on the availability of the technology provider and DIAN for the correct processing of invoices.</li>
</ul>
<h2 id="_7-diagrams" tabindex="-1"><a class="header-anchor" href="#_7-diagrams"><span>7. Diagrams</span></a></h2>
<h3 id="sequence-diagrams-–-electronic-invoicing" tabindex="-1"><a class="header-anchor" href="#sequence-diagrams-–-electronic-invoicing"><span>Sequence Diagrams – Electronic Invoicing</span></a></h3>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="@source/assets/facturacionElectronica/diagramaFlujoFactElectro.png" alt=""></span></a></h3>
<h3 id="object-diagram" tabindex="-1"><a class="header-anchor" href="#object-diagram"><span>Object Diagram</span></a></h3>
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="@source/assets/facturacionElectronica/diagramaObjetosFactElctro.png" alt=""></span></a></h3>
<h2 id="_8-service-data" tabindex="-1"><a class="header-anchor" href="#_8-service-data"><span>8. Service Data</span></a></h2>
<h3 id="_8-1-payments" tabindex="-1"><a class="header-anchor" href="#_8-1-payments"><span>8.1 Payments</span></a></h3>
<p>curl -X 'POST' <br>
'http://localhost:8080/api/v1/electronic-invoice/erp-create-payment' <br>
-H 'accept: <em>/</em>' <br>
-H 'Content-Type: application/json' <br>
-d</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line">'<span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"Input"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"BankAccountNo"</span><span class="token operator">:</span> <span class="token string">"13146300"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"Currency"</span><span class="token operator">:</span> <span class="token string">"COP"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"PaymentDate"</span><span class="token operator">:</span> <span class="token string">"2024-09-03"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"PayRef1"</span><span class="token operator">:</span> <span class="token string">"01032301"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CustomerId"</span><span class="token operator">:</span> <span class="token string">"CLT0001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"89897"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"Currency"</span><span class="token operator">:</span> <span class="token string">"USD"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"Amount"</span><span class="token operator">:</span> <span class="token number">1190000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"PaymentDate"</span><span class="token operator">:</span> <span class="token string">"2023-09-03"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"PaymentBankRef"</span><span class="token operator">:</span> <span class="token string">"010332301"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"NAVISRef"</span><span class="token operator">:</span> <span class="token string">"010332301"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span>'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Reponses</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"statusResponse"</span><span class="token operator">:</span> <span class="token string">"Ok"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Payment registered successfully."</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-creation-of-electronic-invoices" tabindex="-1"><a class="header-anchor" href="#_8-2-creation-of-electronic-invoices"><span>8.2 Creation of electronic invoices</span></a></h3>
<p>-curl -X 'POST' <br>
'http://localhost:8080/api/v1/electronic-invoice/erp-create-invoice' <br>
-H 'accept: <em>/</em>' <br>
-H 'Content-Type: application/json' <br>
-d</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"></span>
<span class="line"> '<span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"Input"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"H"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"CustIdentity"</span><span class="token operator">:</span> <span class="token string">"CT0001"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"TransactionDate"</span><span class="token operator">:</span> <span class="token string">"2024-10-01"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"InvoiceType"</span><span class="token operator">:</span> <span class="token string">"EXTINV"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"InvoiceDate"</span><span class="token operator">:</span> <span class="token string">"2024-10-01"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"DueDate"</span><span class="token operator">:</span> <span class="token string">"2024-10-15"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"PayTermId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"Currency"</span><span class="token operator">:</span> <span class="token string">"COP"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"CurrRate"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"VoucherType"</span><span class="token operator">:</span> <span class="token string">"F"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"CreatorsReference"</span><span class="token operator">:</span> <span class="token string">"N4BILLING"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"PayTermBaseDate"</span><span class="token operator">:</span> <span class="token string">"2024-10-01"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"DeliveryDate"</span><span class="token operator">:</span> <span class="token string">"2024-10-02"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"CustomerReference"</span><span class="token operator">:</span> <span class="token string">"Ref_001"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"I"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"VatCode"</span><span class="token operator">:</span> <span class="token string">"VAT19"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"NetCurrAmount"</span><span class="token operator">:</span> <span class="token number">500000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"VatCurrAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"Reference"</span><span class="token operator">:</span> <span class="token string">"Item_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"IncomeTypeId"</span><span class="token operator">:</span> <span class="token string">"4"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"I"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"VatCode"</span><span class="token operator">:</span> <span class="token string">"VAT19"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"NetCurrAmount"</span><span class="token operator">:</span> <span class="token number">500000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"VatCurrAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"Reference"</span><span class="token operator">:</span> <span class="token string">"Item_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"IncomeTypeId"</span><span class="token operator">:</span> <span class="token string">"4"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"I"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"VatCode"</span><span class="token operator">:</span> <span class="token string">"VAT19"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"NetCurrAmount"</span><span class="token operator">:</span> <span class="token number">500000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"VatCurrAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"Reference"</span><span class="token operator">:</span> <span class="token string">"Item_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"IncomeTypeId"</span><span class="token operator">:</span> <span class="token string">"4"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"Postings"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"P"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"RowId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CodeA"</span><span class="token operator">:</span> <span class="token string">"706303"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CurrAmount"</span><span class="token operator">:</span> <span class="token number">-500000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"AutoPostingProcCode"</span><span class="token operator">:</span> <span class="token string">"CUSTOM"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"P"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"RowId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CodeA"</span><span class="token operator">:</span> <span class="token string">"706303"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CurrAmount"</span><span class="token operator">:</span> <span class="token number">-500000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"AutoPostingProcCode"</span><span class="token operator">:</span> <span class="token string">"CUSTOM"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"P"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"RowId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CodeA"</span><span class="token operator">:</span> <span class="token string">"706303"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CurrAmount"</span><span class="token operator">:</span> <span class="token number">-500000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"AutoPostingProcCode"</span><span class="token operator">:</span> <span class="token string">"CUSTOM"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"Taxes"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"T"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxCurrAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxDomAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"FeeCode"</span><span class="token operator">:</span> <span class="token string">"VAT19"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"T"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxCurrAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxDomAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"FeeCode"</span><span class="token operator">:</span> <span class="token string">"VAT19"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"LineType"</span><span class="token operator">:</span> <span class="token string">"T"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"InvoiceNo"</span><span class="token operator">:</span> <span class="token string">"M_INV_001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"ItemId"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxId"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxCurrAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"TaxDomAmount"</span><span class="token operator">:</span> <span class="token number">95000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"FeeCode"</span><span class="token operator">:</span> <span class="token string">"VAT19"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Responses</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"isSuccess"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"requestId"</span><span class="token operator">:</span> <span class="token string">"9c40edb8-8c42-41aa-a3de-3b544104843d"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"UUID"</span><span class="token operator">:</span> <span class="token string">"4f26fb001569dad92e57a823630574aa01ae9147"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"documentNumber"</span><span class="token operator">:</span> <span class="token string">"3003"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"LDF"</span><span class="token operator">:</span> <span class="token string">"FACTURA-UBL(900880811;3003;2017-12-21;PRINCIPAL;PRINCIPAL)"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"URL"</span><span class="token operator">:</span> <span class="token string">"https://plataforma-beta.facture.co/PublicViewer#/PublicViewer/OTAwODgwODExLzE0ZjI3OGUyLTJmZmUtNDg3YS05YmNmLWExNThlMWEyZjUzMS8xYzc5YmM2Zi1kZmZlLTRkZGItYTY1ZS0xNDk5OTAyYTdkMGI="</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"UBL"</span><span class="token operator">:</span> <span class="token null keyword">null</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-unit-tests" tabindex="-1"><a class="header-anchor" href="#_9-unit-tests"><span>9. Unit Tests</span></a></h2>
<h3 id="setup-del-servicio-y-mock-de-axios" tabindex="-1"><a class="header-anchor" href="#setup-del-servicio-y-mock-de-axios"><span>Setup del Servicio y Mock de Axios</span></a></h3>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="@source/assets/facturacionElectronica/setupService-MockAxios.png" alt=""></span></a></h3>
<h3 id="a-authenticate" tabindex="-1"><a class="header-anchor" href="#a-authenticate"><span>A.	authenticate</span></a></h3>
<p>Returns an access token in case of success.</p>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="@source/assets/facturacionElectronica/authenticate.png" alt=""></span></a></h3>
<p>Error handling by returning undefined.</p>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4"><span><img src="@source/assets/facturacionElectronica/manejoErrorAuthenticate.png" alt=""></span></a></h3>
<h3 id="b-createinvoice" tabindex="-1"><a class="header-anchor" href="#b-createinvoice"><span>B.	createInvoice</span></a></h3>
<p>Creates an invoice and returns data in case of success.</p>
<h3 id="-5" tabindex="-1"><a class="header-anchor" href="#-5"><span><img src="@source/assets/facturacionElectronica/createInvoice.png" alt=""></span></a></h3>
<p>Returns an error response when the creation fails.</p>
<h3 id="-6" tabindex="-1"><a class="header-anchor" href="#-6"><span><img src="@source/assets/facturacionElectronica/manejoErrorCreateInvoice.png" alt=""></span></a></h3>
<h3 id="c-createpayment" tabindex="-1"><a class="header-anchor" href="#c-createpayment"><span>C.	createPayment</span></a></h3>
<p>Creates a payment and returns data in case of success.</p>
<h3 id="-7" tabindex="-1"><a class="header-anchor" href="#-7"><span><img src="@source/assets/facturacionElectronica/createPayment.png" alt=""></span></a></h3>
<p>Throws an error when the payment creation fails.</p>
<h3 id="-8" tabindex="-1"><a class="header-anchor" href="#-8"><span><img src="@source/assets/facturacionElectronica/manejoErrorCreatePayment.png" alt=""></span></a></h3>
<h3 id="d-sendelectronicinvoice" tabindex="-1"><a class="header-anchor" href="#d-sendelectronicinvoice"><span>D. sendElectronicInvoice</span></a></h3>
<p>Sends an electronic invoice and returns data in case of success.</p>
<h3 id="-9" tabindex="-1"><a class="header-anchor" href="#-9"><span><img src="@source/assets/facturacionElectronica/sendElectronicInvoice.png" alt=""></span></a></h3>
<p>Returns an error response when the sending fails.</p>
<h3 id="-10" tabindex="-1"><a class="header-anchor" href="#-10"><span><img src="@source/assets/facturacionElectronica/manejoErrorElectronicInvoice.png" alt=""></span></a></h3>
<h3 id="setup-del-servicio-y-configuracion-de-mocks" tabindex="-1"><a class="header-anchor" href="#setup-del-servicio-y-configuracion-de-mocks"><span>Setup del Servicio y Configuración de Mocks</span></a></h3>
<h3 id="-11" tabindex="-1"><a class="header-anchor" href="#-11"><span><img src="@source/assets/facturacionElectronica/setupServiceMocks.png" alt=""></span></a></h3>
<h3 id="a-transformjson-transforma-facturadtobody-a-facturadto-correctamente" tabindex="-1"><a class="header-anchor" href="#a-transformjson-transforma-facturadtobody-a-facturadto-correctamente"><span>A. transformJson - Transforma FacturaDtoBody a FacturaDto Correctamente</span></a></h3>
<h3 id="-12" tabindex="-1"><a class="header-anchor" href="#-12"><span><img src="@source/assets/facturacionElectronica/transformJson1.png" alt=""></span></a></h3>
<h3 id="-13" tabindex="-1"><a class="header-anchor" href="#-13"><span><img src="@source/assets/facturacionElectronica/transformJson2.png" alt=""></span></a></h3>
<h3 id="-14" tabindex="-1"><a class="header-anchor" href="#-14"><span><img src="@source/assets/facturacionElectronica/transformJson3.png" alt=""></span></a></h3>
<h3 id="b-sendelectronicinvoice" tabindex="-1"><a class="header-anchor" href="#b-sendelectronicinvoice"><span>B. sendElectronicInvoice</span></a></h3>
<p>Sends an electronic invoice and returns a success response.</p>
<h3 id="-15" tabindex="-1"><a class="header-anchor" href="#-15"><span><img src="@source/assets/facturacionElectronica/sendElectronicInvoice.png" alt=""></span></a></h3>
<p>Returns an error response when the sending fails.</p>
<h3 id="-16" tabindex="-1"><a class="header-anchor" href="#-16"><span><img src="@source/assets/facturacionElectronica/manejoErrorElectronicInvoice.png" alt=""></span></a></h3>
<h3 id="configuracion-inicial-electonic-invoice-service" tabindex="-1"><a class="header-anchor" href="#configuracion-inicial-electonic-invoice-service"><span>Configuración Inicial - Electonic invoice Service</span></a></h3>
<h3 id="-17" tabindex="-1"><a class="header-anchor" href="#-17"><span><img src="@source/assets/facturacionElectronica/ConfiguracionInicialSendElectronicInvoice.png" alt=""></span></a></h3>
<h3 id="a-test-gethealth" tabindex="-1"><a class="header-anchor" href="#a-test-gethealth"><span>A.	Test getHealth</span></a></h3>
<h3 id="-18" tabindex="-1"><a class="header-anchor" href="#-18"><span><img src="@source/assets/facturacionElectronica/pruebaGetHealth.png" alt=""></span></a></h3>
<h3 id="b-test-convertjsontoxml" tabindex="-1"><a class="header-anchor" href="#b-test-convertjsontoxml"><span>B.	Test convertJsonToXml</span></a></h3>
<h3 id="-19" tabindex="-1"><a class="header-anchor" href="#-19"><span><img src="@source/assets/facturacionElectronica/pruebaConvertJsonXml.png" alt=""></span></a></h3>
<h3 id="c-test-for-loginrequest" tabindex="-1"><a class="header-anchor" href="#c-test-for-loginrequest"><span>C. Test for loginRequest</span></a></h3>
<h3 id="-20" tabindex="-1"><a class="header-anchor" href="#-20"><span><img src="@source/assets/facturacionElectronica/pruebaLoginRequest.png" alt=""></span></a></h3>
<p>Returns an error response when the sending fails.</p>
<h3 id="-21" tabindex="-1"><a class="header-anchor" href="#-21"><span><img src="@source/assets/facturacionElectronica/respuestaErrorLoginRequest.png" alt=""></span></a></h3>
<h3 id="d-test-for-sendinvoice" tabindex="-1"><a class="header-anchor" href="#d-test-for-sendinvoice"><span>D. Test for sendInvoice</span></a></h3>
<h3 id="-22" tabindex="-1"><a class="header-anchor" href="#-22"><span><img src="@source/assets/facturacionElectronica/pruebaSendInvoice.png" alt=""></span></a></h3>
<p>Returns an error response when the sending fails.</p>
<h3 id="-23" tabindex="-1"><a class="header-anchor" href="#-23"><span><img src="@source/assets/facturacionElectronica/respuestaErrorSendInvoice.png" alt=""></span></a></h3>
<h3 id="e-test-for-tosfacturetoifs" tabindex="-1"><a class="header-anchor" href="#e-test-for-tosfacturetoifs"><span>E. Test for tosFactureToIFS</span></a></h3>
<h3 id="-24" tabindex="-1"><a class="header-anchor" href="#-24"><span><img src="@source/assets/facturacionElectronica/pruebaTosFacturaToIFS.png" alt=""></span></a></h3>
<h3 id="-25" tabindex="-1"><a class="header-anchor" href="#-25"><span><img src="@source/assets/facturacionElectronica/pruebaTosFacturaToIFS2.png" alt=""></span></a></h3>
<h2 id="_10-annexes" tabindex="-1"><a class="header-anchor" href="#_10-annexes"><span>10. Annexes</span></a></h2>
<h3 id="_10-1-payments" tabindex="-1"><a class="header-anchor" href="#_10-1-payments"><span>10.1 Payments</span></a></h3>
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
<td>Input</td>
<td>String</td>
<td>5000</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>BankAccountNo</td>
<td>String</td>
<td>8</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>Currency</td>
<td>String</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>PaymentDate</td>
<td>Date</td>
<td>Yyyy-MM-dd</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>Lines</td>
<td>String</td>
<td>5000</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>PayRef1</td>
<td>String</td>
<td>8</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>CustomerId</td>
<td>String</td>
<td>7</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>InvoiceNo</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>Currency</td>
<td>String</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>Amount</td>
<td>Numeric decimal</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>PaymentDate</td>
<td>Date</td>
<td>Yyyy-MM-dd</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>PaymentBankRef</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>NAVISRef</td>
<td>String</td>
<td>10</td>
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
<td>number</td>
<td>2</td>
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
<h3 id="_10-2-creation-of-electronic-invoices" tabindex="-1"><a class="header-anchor" href="#_10-2-creation-of-electronic-invoices"><span>10.2 Creation of Electronic Invoices</span></a></h3>
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
<td>Input</td>
<td>String</td>
<td>10000</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>LineType</td>
<td>String</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>CustIdentity</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>InvoiceNo</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>TransactionDate</td>
<td>Date</td>
<td>Yyyy-MM-dd</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>InvoiceType</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>InvoiceDate</td>
<td>Date</td>
<td>Yyyy-MM-dd</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>DueDate</td>
<td>Date</td>
<td>Yyyy-MM-dd</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>PayTermId</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>Currency</td>
<td>String</td>
<td>3</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>CurrRate</td>
<td>Numeric</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>12</td>
<td>VoucherType</td>
<td>String</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>CreatorsReference</td>
<td>String</td>
<td>9</td>
<td></td>
</tr>
<tr>
<td>14</td>
<td>PayTermBaseDate</td>
<td>Date</td>
<td>Yyyy-MM-dd</td>
<td></td>
</tr>
<tr>
<td>15</td>
<td>DeliveryDate</td>
<td>Date</td>
<td>Yyyy-MM-dd</td>
<td></td>
</tr>
<tr>
<td>16</td>
<td>CustomerReference</td>
<td>String</td>
<td>7</td>
<td></td>
</tr>
<tr>
<td>17</td>
<td>Lines</td>
<td>Array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>18</td>
<td>ItemId</td>
<td>Numeric</td>
<td></td>
<td></td>
</tr>
<tr>
<td>19</td>
<td>VatCode</td>
<td>String</td>
<td>5</td>
<td></td>
</tr>
<tr>
<td>20</td>
<td>NetCurrAmount</td>
<td>Numeric decimal</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>21</td>
<td>VatCurrAmount</td>
<td>Numeric decimal</td>
<td>5</td>
<td></td>
</tr>
<tr>
<td>22</td>
<td>Reference</td>
<td>String</td>
<td>8</td>
<td></td>
</tr>
<tr>
<td>23</td>
<td>IncomeTypeId</td>
<td>String</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>24</td>
<td>Postings</td>
<td>Array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>25</td>
<td>RowId</td>
<td>Numeric</td>
<td></td>
<td></td>
</tr>
<tr>
<td>26</td>
<td>CodeA</td>
<td>String</td>
<td>6</td>
<td></td>
</tr>
<tr>
<td>27</td>
<td>CurrAmount</td>
<td>Numeric decimal</td>
<td></td>
<td></td>
</tr>
<tr>
<td>28</td>
<td>AutoPostingProcCode</td>
<td>String</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td>29</td>
<td>Taxes</td>
<td>Array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>30</td>
<td>TaxId</td>
<td>Numeric</td>
<td></td>
<td></td>
</tr>
<tr>
<td>31</td>
<td>TaxCurrAmount</td>
<td>Numeric decimal</td>
<td></td>
<td></td>
</tr>
<tr>
<td>32</td>
<td>TaxDomAmount</td>
<td>Numeric decimal</td>
<td></td>
<td></td>
</tr>
<tr>
<td>33</td>
<td>FeeCode</td>
<td>String</td>
<td>5</td>
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
<td>isSuccess</td>
<td>boolean</td>
<td>5</td>
<td>True, False</td>
</tr>
<tr>
<td>2</td>
<td>requestID</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>UUID</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>documentNumber</td>
<td>String</td>
<td>5</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>LDF</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>URL</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>UBL</td>
<td>String</td>
<td></td>
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