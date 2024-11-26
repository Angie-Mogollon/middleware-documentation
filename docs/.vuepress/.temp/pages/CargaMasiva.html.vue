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
<td>Team G</td>
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
<p>The objective of the Sprint is to develop a series of forms for bulk data entry, which will be converted to JSON format and sent to the Warehouse Management System (WMS). This process will enable the integration of various services with the WMS, improving inventory management efficiency and data synchronization.</p>
<h2 id="_3-sprint-scope" tabindex="-1"><a class="header-anchor" href="#_3-sprint-scope"><span>3. Sprint Scope</span></a></h2>
<p>The scope of the Sprint includes the development of forms for bulk data entry in the <strong>ProductMaster</strong>, <strong>PlanningInformation</strong>, <strong>DeliveryOrder</strong>, and <strong>ReceiveAndDeliveryAdvice</strong> services. These forms will allow users to enter data or upload files in formats such as CSV and Excel, which will be converted to JSON format by the Middleware and sent to the Warehouse Management System (WMS). The system must also incorporate parametric tables for certain selector-type fields, ensure that mandatory fields are properly validated, and guarantee the correct conversion and submission of requests to the WMS.</p>
<h2 id="_4-functional-requirements" tabindex="-1"><a class="header-anchor" href="#_4-functional-requirements"><span>4. Functional Requirements</span></a></h2>
<h3 id="_4-1-general-description" tabindex="-1"><a class="header-anchor" href="#_4-1-general-description"><span>4.1 General Description</span></a></h3>
<ul>
<li><strong>RF-01</strong>: Create a form for the <strong>ProductMaster</strong> service that receives data and converts it to JSON for submission to the WMS.</li>
<li><strong>RF-02</strong>: Create a form for the <strong>PlanningInformation</strong> service with similar functionality, allowing bulk data entry and conversion to JSON.</li>
<li><strong>RF-03</strong>: Create a form for the <strong>DeliveryOrder</strong> service with the same bulk data entry and JSON conversion requirements.</li>
<li><strong>RF-04</strong>: Create a form for the <strong>ReceiveAndDeliveryAdvice</strong> service, with the same features as the previous ones.</li>
</ul>
<h3 id="_4-2-use-cases" tabindex="-1"><a class="header-anchor" href="#_4-2-use-cases"><span>4.2 Use Cases</span></a></h3>
<h4 id="use-case-1-productmaster-bulk-data-entry" tabindex="-1"><a class="header-anchor" href="#use-case-1-productmaster-bulk-data-entry"><span>Use Case 1: ProductMaster - Bulk Data Entry</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware Developer</li>
<li><strong>Preconditions:</strong> The user has access to the form and documentation.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The developer accesses the graphical interface.</li>
<li>The developer enters the required data or uploads a file (.CSV, .xlsx).</li>
<li>The system converts the data to JSON format.</li>
<li>The Middleware sends the request to the WMS.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The system successfully sends the request to the WMS and receives confirmation.</li>
</ul>
<h4 id="use-case-2-planninginformation-bulk-data-entry" tabindex="-1"><a class="header-anchor" href="#use-case-2-planninginformation-bulk-data-entry"><span>Use Case 2: PlanningInformation - Bulk Data Entry</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware Developer</li>
<li><strong>Preconditions:</strong> The user has access to the form and documentation.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The developer accesses the graphical interface.</li>
<li>The developer enters the required data or uploads a file (.CSV, .xlsx).</li>
<li>The system converts the data to JSON format.</li>
<li>The Middleware sends the request to the WMS.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The system successfully sends the request to the WMS and receives confirmation.</li>
</ul>
<h4 id="use-case-3-deliveryorder-bulk-data-entry" tabindex="-1"><a class="header-anchor" href="#use-case-3-deliveryorder-bulk-data-entry"><span>Use Case 3: DeliveryOrder - Bulk Data Entry</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware Developer</li>
<li><strong>Preconditions:</strong> The user has access to the form and documentation.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The developer accesses the graphical interface.</li>
<li>The developer enters the required data or uploads a file (.CSV, .xlsx).</li>
<li>The system converts the data to JSON format.</li>
<li>The Middleware sends the request to the WMS.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The system successfully sends the request to the WMS and receives confirmation.</li>
</ul>
<h4 id="use-case-4-receiveanddeliveryadvice-bulk-data-entry" tabindex="-1"><a class="header-anchor" href="#use-case-4-receiveanddeliveryadvice-bulk-data-entry"><span>Use Case 4: ReceiveAndDeliveryAdvice - Bulk Data Entry</span></a></h4>
<ul>
<li><strong>Actor:</strong> Middleware Developer</li>
<li><strong>Preconditions:</strong> The user has access to the form and documentation.</li>
<li><strong>Main Flow:</strong>
<ol>
<li>The developer accesses the graphical interface.</li>
<li>The developer enters the required data or uploads a file (.CSV, .xlsx).</li>
<li>The system converts the data to JSON format.</li>
<li>The Middleware sends the request to the WMS.</li>
</ol>
</li>
<li><strong>Postconditions:</strong> The system successfully sends the request to the WMS and receives confirmation.</li>
</ul>
<h2 id="_5-validations-requested-by-the-client" tabindex="-1"><a class="header-anchor" href="#_5-validations-requested-by-the-client"><span>5. Validations Requested by the Client</span></a></h2>
<h4 id="v-01-mandatory-fields" tabindex="-1"><a class="header-anchor" href="#v-01-mandatory-fields"><span>V-01: Mandatory Fields</span></a></h4>
<ul>
<li><strong>Description:</strong> Fields marked with an asterisk (*) in the specifications document (Word) are mandatory.</li>
<li><strong>Acceptance Criteria:</strong> If a mandatory field is not completed, the system must display an error message and prevent the request from being sent to the WMS.</li>
</ul>
<h4 id="v-02-template-upload" tabindex="-1"><a class="header-anchor" href="#v-02-template-upload"><span>V-02: Template Upload</span></a></h4>
<ul>
<li><strong>Description:</strong> The form must allow uploading templates in .CSV or .xlsx format.</li>
<li><strong>Acceptance Criteria:</strong> The system must accept these formats and process the data correctly.</li>
</ul>
<h4 id="v-03-parametric-tables" tabindex="-1"><a class="header-anchor" href="#v-03-parametric-tables"><span>V-03: Parametric Tables</span></a></h4>
<ul>
<li><strong>Description:</strong> Parametric tables must be created for selector-type fields.</li>
<li><strong>Acceptance Criteria:</strong> The values in the tables must be predefined and selectable by the user.</li>
</ul>
<h2 id="_6-assumptions-and-dependencies" tabindex="-1"><a class="header-anchor" href="#_6-assumptions-and-dependencies"><span>6. Assumptions and Dependencies</span></a></h2>
<ul>
<li>El sistema depende de la API del WMS para el envío de las solicitudes.</li>
<li>El diseño de la interfaz gráfica debe seguir las guías proporcionadas por el cliente.</li>
<li>El proyecto requiere acceso a la documentación detallada sobre las estructuras de los servicios y parámetros de la API del WMS.</li>
</ul>
<h2 id="_7-sequence-diagrams" tabindex="-1"><a class="header-anchor" href="#_7-sequence-diagrams"><span>7. Sequence Diagrams</span></a></h2>
<p>(En esta sección se incluirían los diagramas correspondientes, como diagramas de flujo, diagramas de casos de uso, o diagramas de arquitectura, si se requiere.)</p>
<h2 id="_8-service-data" tabindex="-1"><a class="header-anchor" href="#_8-service-data"><span>8. Service Data</span></a></h2>
<h3 id="_8-1-product-master" tabindex="-1"><a class="header-anchor" href="#_8-1-product-master"><span>8.1 Product Master</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"Id"</span><span class="token operator">:</span> <span class="token string">"12345"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Client"</span><span class="token operator">:</span> <span class="token string">"CLIENT123"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">"Producto de Ejemplo"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"Product Type"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Group"</span><span class="token operator">:</span> <span class="token string">"Electrónica"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"BaseUnit"</span><span class="token operator">:</span> <span class="token string">"PLT"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Weight"</span><span class="token operator">:</span> <span class="token number">1.25</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"WeightUnit"</span><span class="token operator">:</span> <span class="token string">"kg"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"QuantityBox"</span><span class="token operator">:</span> <span class="token string">"30"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"UrlPicture"</span><span class="token operator">:</span> <span class="token string">"https://example.com/product.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Status"</span><span class="token operator">:</span> <span class="token string">"Active"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"EquivalentProductId"</span><span class="token operator">:</span> <span class="token string">"54321,65895"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">"string"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-planning-information" tabindex="-1"><a class="header-anchor" href="#_8-2-planning-information"><span>8.2 Planning Information</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"NitCustomer"</span><span class="token operator">:</span> <span class="token string">"123456789"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"PortOfDischarge"</span><span class="token operator">:</span> <span class="token string">"Puerto de Barcelona"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"VoyageMn"</span><span class="token operator">:</span> <span class="token string">"Voyage001"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"LineOperator"</span><span class="token operator">:</span> <span class="token string">"OperadorX"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"day"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"monday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC123"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Premium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"BOOK123456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Container"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"monday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC1276"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF4321"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Premium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"BOOK12391"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Pallet"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"tuesday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC124"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF457"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"ExtraPremium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"Bl23416"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Pallet"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"wednesday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC124"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF457"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"ExtraPremium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"Bl23416"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Pallet"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"Thursday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC123"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Premium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">74</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"BOOK123456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Container"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"Friday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC123"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Premium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"BOOK123456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Container"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"Saturday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC123"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Premium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"BOOK123456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Container"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"day"</span><span class="token operator">:</span> <span class="token string">"Sunday"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductID"</span><span class="token operator">:</span> <span class="token string">"ABC128"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ProductReference"</span><span class="token operator">:</span> <span class="token string">"REF456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Premium"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"BookingOrBl"</span><span class="token operator">:</span> <span class="token string">"BOOK123456"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Commodity"</span><span class="token operator">:</span> <span class="token string">"Hight quality"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Container"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">" PlanningId "</span><span class="token operator">:</span> <span class="token string">"string"</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3deliveryorder-booking" tabindex="-1"><a class="header-anchor" href="#_8-3deliveryorder-booking"><span>8.3	DeliveryOrder (Booking)</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"DeliveryOrder"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"MasterOrderHeader"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"MOId"</span><span class="token operator">:</span> <span class="token number">7616271671361</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Priority"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Premiun"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"ClientCode"</span><span class="token operator">:</span> <span class="token string">"COLOMCO001"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"MainReference"</span><span class="token operator">:</span> <span class="token string">"api-XDOC-02"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"BranchCode"</span><span class="token operator">:</span> <span class="token string">"AQA"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"OrderType"</span><span class="token operator">:</span> <span class="token string">"XDOC1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PONo"</span><span class="token operator">:</span> <span class="token string">"BOOKING123"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PODate"</span><span class="token operator">:</span> <span class="token string">"2024-07-30"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Warehouse"</span><span class="token operator">:</span> <span class="token string">"AQA01"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"RequestedStartDate"</span><span class="token operator">:</span> <span class="token string">"2024-07-30T10:30:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Remarks"</span><span class="token operator">:</span> <span class="token string">"BANANA EXPORT"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">               <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"REFERENCE1"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"BOOKING"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"BOOKING12345"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"PartyInformation"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"Shipper"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"COLOMCO001"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"CLIENT 1"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Unformatted"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Formatted"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Add1"</span><span class="token operator">:</span> <span class="token string">"SUITE 1, LEVEL 3, 56 PITT STREET,"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Add2"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Add3"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Add4"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"City"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                     <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Bogota"</span><span class="token punctuation">,</span></span>
<span class="line">                     <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">"CUN"</span></span>
<span class="line">                  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Country"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                     <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Colombia"</span></span>
<span class="line">                  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"POBox"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Attachments"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"BL"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"BL123.pdf"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"MimeType"</span><span class="token operator">:</span> <span class="token string">"application/pdf"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"LADYFINGER"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"Lady Finger Bananas"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">" Classification"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">" Premium"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">" Priority"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"TypeShipping"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token string">"48"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"PALLET"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"ORINOCO"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"ORINOCO BANANAS"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">" CLASIFICATION"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">" Premium"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">" Priority"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"TypeShipping"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token string">"2496"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"PALLET"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Units"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"UnitType"</span><span class="token operator">:</span> <span class="token string">"40HC"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">"40' High Cube"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Qty"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ISOCode"</span><span class="token operator">:</span> <span class="token string">"45R1"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ReeferTemp"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Hazard"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UNNo"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Class"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"IMDGPageNo"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"RoutingsDetails"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"Carrier"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"OOL"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"ORIENT OVERSEAS CONTAINER LINE LTD"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Vessel"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"9926207"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"CMA CGM BAIKAL"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"ETD"</span><span class="token operator">:</span> <span class="token string">"2024-08-05T00:00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"TransportMode"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PortOfLoading"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"COCTG"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Cartagena, Colombia"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UNLOCODE"</span><span class="token operator">:</span> <span class="token string">"COCTG"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PortOfDischarge"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"CNQIN"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"QINGDAO, CHINA"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UNLOCODE"</span><span class="token operator">:</span> <span class="token string">"CNQIN"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"VoyageNo"</span><span class="token operator">:</span> <span class="token string">"229N"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"OriginTerminal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"CTLPB"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"CargoDetails"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"CargoDescription"</span><span class="token operator">:</span> <span class="token string">"COLOMBIAN BANANA"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PreAdvised"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"GW"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Value"</span><span class="token operator">:</span> <span class="token string">"38104.00"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"kgs"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"NW"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Value"</span><span class="token operator">:</span> <span class="token string">"26104.00"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"kgs"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Volume"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Value"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"NumberOfPackages"</span><span class="token operator">:</span> <span class="token string">"78"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"MasterOrderHeader"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"MOId"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Priority"</span><span class="token operator">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Pallets"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Clasification"</span><span class="token operator">:</span> <span class="token string">"Extrapremium"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"ClientCode"</span><span class="token operator">:</span> <span class="token string">"COLOMCO001"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"MainReference"</span><span class="token operator">:</span> <span class="token string">"api-XDOC-03"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"BranchCode"</span><span class="token operator">:</span> <span class="token string">"AQA"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"OrderType"</span><span class="token operator">:</span> <span class="token string">"XDOC1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PONo"</span><span class="token operator">:</span> <span class="token string">"BOOKING124"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PODate"</span><span class="token operator">:</span> <span class="token string">"2024-07-30"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Warehouse"</span><span class="token operator">:</span> <span class="token string">"AQA01"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"RequestedStartDate"</span><span class="token operator">:</span> <span class="token string">"2024-07-30T10:30:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Remarks"</span><span class="token operator">:</span> <span class="token string">"BANANA EXPORT"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">               <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"REFERENCE1"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"BOOKING"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"BOOKING123"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"PartyInformation"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"Shipper"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"COLOMCO001"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"CLIENT 1"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Unformatted"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Formatted"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Add1"</span><span class="token operator">:</span> <span class="token string">"SUITE 1, LEVEL 3, 56 PITT STREET,"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Add2"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Add3"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Add4"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"City"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                     <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Bogota"</span><span class="token punctuation">,</span></span>
<span class="line">                     <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">"CUN"</span></span>
<span class="line">                  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"Country"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                     <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Colombia"</span></span>
<span class="line">                  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"POBox"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Attachments"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"BL"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"BL123.pdf"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"MimeType"</span><span class="token operator">:</span> <span class="token string">"application/pdf"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"TEST01"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"Lady Finger Bananas"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"CLASIFICATION"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">" Premium"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">" Priority"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"TypeShipping"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token string">"1248"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"BOX"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"TEST10"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"ORINOCO BANANAS"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"CLASIFICATION"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">" Premium"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">" Priority"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"TypeShipping"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token string">"2496"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"BOX"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Units"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"UnitType"</span><span class="token operator">:</span> <span class="token string">"40HC"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">"40' High Cube"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Qty"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ISOCode"</span><span class="token operator">:</span> <span class="token string">"45R1"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ReeferTemp"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Hazard"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UNNo"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Class"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"IMDGPageNo"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"RoutingsDetails"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"Carrier"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"OOL"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"ORIENT OVERSEAS CONTAINER LINE LTD"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Vessel"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"9926207"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"CMA CGM BAIKAL"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"ETD"</span><span class="token operator">:</span> <span class="token string">"2024-08-05T00:00:00"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"TransportMode"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PortOfLoading"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"COCTG"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Cartagena, Colombia"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UNLOCODE"</span><span class="token operator">:</span> <span class="token string">"COCTG"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PortOfDischarge"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"CNQIN"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"QINGDAO, CHINA"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"UNLOCODE"</span><span class="token operator">:</span> <span class="token string">"CNQIN"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"VoyageNo"</span><span class="token operator">:</span> <span class="token string">"229N"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"OriginTerminal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"CTLPB"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"CargoDetails"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"CargoDescription"</span><span class="token operator">:</span> <span class="token string">"COLOMBIAN BANANA"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"PreAdvised"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"GW"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Value"</span><span class="token operator">:</span> <span class="token string">"38104.00"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"kgs"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"NW"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Value"</span><span class="token operator">:</span> <span class="token string">"26104.00"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"kgs"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"Volume"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"Value"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"NumberOfPackages"</span><span class="token operator">:</span> <span class="token string">"100"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">201</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Description"</span><span class="token operator">:</span> <span class="token string">"successfull"</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"StuffingId"</span><span class="token operator">:</span> <span class="token number">56125612561</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"DeliveryOrder"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"MoId"</span><span class="token operator">:</span> <span class="token number">121232121212</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"LADYFINGER"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"Lady Finger Bananas"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token number">185</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"ORINOCO"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"ORINOCO BANANAS"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token number">186</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"MoId"</span><span class="token operator">:</span> <span class="token number">232323121212</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"TEST01"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"Lady Finger Bananas"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token number">185</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"TEST10"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"ORINOCO BANANAS"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token number">186</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4receiveanddeliveryadvice" tabindex="-1"><a class="header-anchor" href="#_8-4receiveanddeliveryadvice"><span>8.4	ReceiveAndDeliveryAdvice</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Request</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">"MasterOrderHeader"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"MOId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"ClientCode"</span><span class="token operator">:</span> <span class="token string">"COLOMCO001"</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">      <span class="token property">"BranchCode"</span><span class="token operator">:</span> <span class="token string">"AQA"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"OrderType"</span><span class="token operator">:</span> <span class="token string">"ASN"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"PONo"</span><span class="token operator">:</span> <span class="token string">"MASTERMANIFESTID240000001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"PODate"</span><span class="token operator">:</span> <span class="token string">"2024-07-24"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"VendorCode"</span><span class="token operator">:</span> <span class="token string">"ALNATCO001"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"Warehouse"</span><span class="token operator">:</span> <span class="token string">"AQA01"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"RequestedStartDate"</span><span class="token operator">:</span> <span class="token string">"2024-07-30T10:30:00"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"Remarks"</span><span class="token operator">:</span> <span class="token string">"COLUMBIAN BANANA"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">         <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"BOOKING NUMBER"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"2150513350"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"ADDITIONAL REF1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"TEST"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"PartyInformation"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"Shipper"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"COLOMCO001"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"CLIENT 1"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Unformatted"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Formatted"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">"Add1"</span><span class="token operator">:</span> <span class="token string">"SUITE 1, LEVEL 3, 56 PITT STREET,"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Add2"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Add3"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Add4"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"City"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Bogota"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">"CUN"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"Country"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Colombia"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token property">"POBox"</span><span class="token operator">:</span> <span class="token string">"0"</span></span>
<span class="line">         <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Attachments"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"MNFST"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"MasterManifest_123.pdf"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"MimeType"</span><span class="token operator">:</span> <span class="token string">"application/pdf"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Type"</span><span class="token operator">:</span> <span class="token string">"SSI"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"seedsample.pdf"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Content"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"MimeType"</span><span class="token operator">:</span> <span class="token string">"application/pdf"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"ORINOCO"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"ORINOCO BANANAS"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ExtCaseNo"</span><span class="token operator">:</span> <span class="token string">"377005910940986587"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"TypeShipping"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"MANIFEST ID"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"AE7JK94TM"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">                  <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"TypeShipping"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"Container"</span><span class="token punctuation">,</span></span>
<span class="line">                  <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">               <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"FARM ID"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"SERIAL NO"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"094098658"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"CARRIER"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"MAERSK"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"GROUP ID"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"500"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">" Client Order Number "</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"30450"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"BOOKING REF"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"OUTBOUND12345"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"EXIT DATE"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"2024-07-25T10:25:00"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Date"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"CURT DATE"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"2024-07-25T09:25:00"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Date"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"CLASIFICATION"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"PREMIUN"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token string">"48"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"BOX"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"LADYFINGER"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"Lady Finger Bananas"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"ExtCaseNo"</span><span class="token operator">:</span> <span class="token string">"00377005910940986597"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"References"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"MANIFEST ID"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"AE7JK94TM"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"FARM ID"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"SERIAL NO"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"094098659"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"CARRIER"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"MAERSK"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"BOOKING REF"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"OUTBOUND12345"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Text"</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">               <span class="token property">"RefName"</span><span class="token operator">:</span> <span class="token string">"EXIT DATE"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefValue"</span><span class="token operator">:</span> <span class="token string">"2024-07-25T10:25:00"</span><span class="token punctuation">,</span></span>
<span class="line">               <span class="token property">"RefType"</span><span class="token operator">:</span> <span class="token string">"Date"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">         <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Quantity"</span><span class="token operator">:</span> <span class="token string">"48"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"UOM"</span><span class="token operator">:</span> <span class="token string">"BOX"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"RoutingsDetails"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"Carrier"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"OOL"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"ORIENT OVERSEAS CONTAINER LINE LTD"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"Vessel"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"9926207"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"CMA CGM BAIKAL"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"ETD"</span><span class="token operator">:</span> <span class="token string">"2024-08-05T00:00:00"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"TransportMode"</span><span class="token operator">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"PortOfLoading"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"COCTG"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"Cartagena, Colombia"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"UNLOCODE"</span><span class="token operator">:</span> <span class="token string">"COCTG"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"PortOfDischarge"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"CNQIN"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"Name"</span><span class="token operator">:</span> <span class="token string">"QINGDAO, CHINA"</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"State"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">         <span class="token property">"UNLOCODE"</span><span class="token operator">:</span> <span class="token string">"CNQIN"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"VoyageNo"</span><span class="token operator">:</span> <span class="token string">"229N"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"OriginTerminal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">         <span class="token property">"Code"</span><span class="token operator">:</span> <span class="token string">"CTLPB"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">   <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">   <span class="token property">"CargoDetails"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"CargoDescription"</span><span class="token operator">:</span> <span class="token string">"COLOMBIAN BANANAS"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"quantityPallets"</span><span class="token operator">:</span> <span class="token string">"18"</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">Response</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">201</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"Description"</span><span class="token operator">:</span> “successfull”<span class="token punctuation">,</span></span>
<span class="line"> <span class="token property">"MOId"</span><span class="token operator">:</span> <span class="token number">114</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token property">"Lines"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"ORINOCO"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"ORINOCO BANANAS"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token number">186</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"ArticleCode"</span><span class="token operator">:</span> <span class="token string">"LADYFINGER"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"ArticleDesc"</span><span class="token operator">:</span> <span class="token string">"Lady Finger Bananas"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"MOLineId"</span><span class="token operator">:</span> <span class="token number">187</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-unit-tests" tabindex="-1"><a class="header-anchor" href="#_9-unit-tests"><span>9. Unit Tests</span></a></h2>
<h2 id="_10-annexes" tabindex="-1"><a class="header-anchor" href="#_10-annexes"><span>10. Annexes</span></a></h2>
<h3 id="_10-1-product-master" tabindex="-1"><a class="header-anchor" href="#_10-1-product-master"><span>10.1  Product Master</span></a></h3>
<h4 id="request" tabindex="-1"><a class="header-anchor" href="#request"><span>Request</span></a></h4>
<table>
<thead>
<tr>
<th>No</th>
<th>Field</th>
<th>Mandatory</th>
<th>Size/Format</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td>1*</td>
<td>Id</td>
<td>Yes</td>
<td>18/Varchar</td>
<td>Product identification (key)</td>
</tr>
<tr>
<td>2*</td>
<td>Client</td>
<td>Yes</td>
<td>50/Varchar</td>
<td></td>
</tr>
<tr>
<td>3*</td>
<td>Description</td>
<td>Yes</td>
<td>250/Varchar</td>
<td>Name</td>
</tr>
<tr>
<td>4*</td>
<td>Type</td>
<td>Yes</td>
<td>50/Varchar</td>
<td>Product type</td>
</tr>
<tr>
<td>5*</td>
<td>Group</td>
<td>Yes</td>
<td>10/Varchar</td>
<td>Some products are grouped together to facilitate filling.</td>
</tr>
<tr>
<td>6*</td>
<td>BaseUnit</td>
<td>Yes</td>
<td>3/Varchar</td>
<td>It is a short name used by the supplier (e.g., PLT = Pallet, LOT = Lote)</td>
</tr>
<tr>
<td>7*</td>
<td>Weight</td>
<td>Yes</td>
<td>Numeric / 2 Decimal</td>
<td></td>
</tr>
<tr>
<td>8*</td>
<td>WeightUnit</td>
<td>Yes</td>
<td>5/Varchar</td>
<td>Kg</td>
</tr>
<tr>
<td>9*</td>
<td>QuantityBox</td>
<td>Yes</td>
<td>Integer</td>
<td>Means how many boxes per pallet</td>
</tr>
<tr>
<td>10*</td>
<td>UrlPicture</td>
<td>Yes</td>
<td>250/Varchar</td>
<td>Link allowing the visualisation of a product in the cloud</td>
</tr>
<tr>
<td>11*</td>
<td>Status</td>
<td>Yes</td>
<td>15/Varchar</td>
<td>Active, Inactive</td>
</tr>
<tr>
<td>12*</td>
<td>EquivalentProductId</td>
<td>Yes</td>
<td>18/Varchar</td>
<td>Identification of an equivalent product to be stuffing or loaded on a vessel</td>
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
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Code</td>
<td>String</td>
<td>10/Varchar</td>
<td>201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error</td>
</tr>
<tr>
<td>2</td>
<td>Description</td>
<td>String</td>
<td>250/Nvarchar</td>
<td>UM</td>
</tr>
</tbody>
</table>
<h3 id="_10-2-planning-information" tabindex="-1"><a class="header-anchor" href="#_10-2-planning-information"><span>10.2 Planning Information</span></a></h3>
<h4 id="request-1" tabindex="-1"><a class="header-anchor" href="#request-1"><span>Request</span></a></h4>
<table>
<thead>
<tr>
<th>No</th>
<th>Field</th>
<th>Mandatory</th>
<th>Size/Format</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td>1*</td>
<td>NitCustomer</td>
<td>Yes</td>
<td>20/Varchar</td>
<td>Shipper (Uniban)</td>
</tr>
<tr>
<td>2*</td>
<td>PortOfDischarge</td>
<td>Yes</td>
<td>5/Varchar</td>
<td>Puerto de Destino (Codigo)</td>
</tr>
<tr>
<td>3*</td>
<td>day</td>
<td>Yes</td>
<td>15/Varchar</td>
<td>Day of the week (e.g., Lunes, Martes, Miercoles, etc.)</td>
</tr>
<tr>
<td>4*</td>
<td>ProductID</td>
<td>Yes</td>
<td>20/Varchar</td>
<td>e.g., 1400.1401</td>
</tr>
<tr>
<td>5</td>
<td>ProductReference</td>
<td>No</td>
<td>100/Nvarchar</td>
<td>e.g., FREF210, RFE34</td>
</tr>
<tr>
<td>6*</td>
<td>Clasification</td>
<td>Yes</td>
<td>50/Varchar</td>
<td>Premium, Extra, Darien</td>
</tr>
<tr>
<td>7*</td>
<td>Quantity</td>
<td>Yes</td>
<td>5/Integer</td>
<td>Cantidad de Pallets</td>
</tr>
<tr>
<td>8</td>
<td>BookingOrBl</td>
<td>No</td>
<td>50/Varchar</td>
<td>Número de booking (aun no esta)?</td>
</tr>
<tr>
<td>9</td>
<td>VoyageMn</td>
<td>No</td>
<td>50/Varchar</td>
<td>Vessel visit trip (Número del buque-Viaje).</td>
</tr>
<tr>
<td>10</td>
<td>LineOperator</td>
<td>No</td>
<td>3/Varchar</td>
<td>Naviera (MSC, Hapag, etc.)</td>
</tr>
<tr>
<td>11</td>
<td>Commodity</td>
<td>No</td>
<td>50/Varchar</td>
<td>Descripción del producto</td>
</tr>
<tr>
<td>12</td>
<td>Description</td>
<td>No</td>
<td>50/Varchar</td>
<td>Consideración de la carga</td>
</tr>
<tr>
<td>13*</td>
<td>TypeShipping</td>
<td>Yes</td>
<td>20/Varchar</td>
<td>Container, Pallet, Europallet</td>
</tr>
<tr>
<td>14</td>
<td>PlanningId</td>
<td>No</td>
<td>20/Varchar</td>
<td>Mandatory for update of forecast</td>
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
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Code</td>
<td>String</td>
<td>10/Varchar</td>
<td>201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error</td>
</tr>
<tr>
<td>2</td>
<td>Description</td>
<td>String</td>
<td>250/Nvarchar</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>PlanningId</td>
<td>String</td>
<td>20/Varchar</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_10-3-deliveryorder-booking" tabindex="-1"><a class="header-anchor" href="#_10-3-deliveryorder-booking"><span>10.3 DeliveryOrder (Booking)</span></a></h3>
<h4 id="request-2" tabindex="-1"><a class="header-anchor" href="#request-2"><span>Request</span></a></h4>
<p>*/M = Mandatory</p>
<table>
<thead>
<tr>
<th>No</th>
<th>Field</th>
<th>Mandatory</th>
<th>Size/Format</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>MOId</td>
<td>Yes in case of Update</td>
<td>Numeric</td>
<td>Master Order ID. Optional – only filled on update request</td>
</tr>
<tr>
<td>2*</td>
<td>ClientCode</td>
<td>Yes</td>
<td>20/varchar</td>
<td>Client Code</td>
</tr>
<tr>
<td>3</td>
<td>MainReference</td>
<td>Yes</td>
<td>35/varchar</td>
<td>Main reference identifier</td>
</tr>
<tr>
<td>4*</td>
<td>BranchCode</td>
<td>Yes</td>
<td>3/varchar</td>
<td>Branch code (type of product)</td>
</tr>
<tr>
<td>5</td>
<td>OrderType</td>
<td>No</td>
<td>20/varchar</td>
<td>Order type. Static value “XDOC1” for cross-docking</td>
</tr>
<tr>
<td>6*</td>
<td>PONo</td>
<td>Yes</td>
<td>50/varchar</td>
<td>Client Order number</td>
</tr>
<tr>
<td>7*</td>
<td>PODate</td>
<td>Yes</td>
<td>&quot;YYYY-MM-DD&quot;/ DateTime</td>
<td>Client Order date</td>
</tr>
<tr>
<td>8</td>
<td>Warehouse</td>
<td>Yes</td>
<td>20/varchar</td>
<td>Warehouse identifier (e.g., Banana Cross-dock warehouse AQA01)</td>
</tr>
<tr>
<td>9</td>
<td>RequestedStartDate</td>
<td>No</td>
<td>&quot;YYYY-MM-DDTHH:MM / DateTime</td>
<td>Estimated date of Cross docking (actual day)</td>
</tr>
<tr>
<td>10</td>
<td>Remarks</td>
<td>No</td>
<td>500/nvarchar</td>
<td>Additional remarks</td>
</tr>
<tr>
<td>11*</td>
<td>References.RefName</td>
<td>Yes</td>
<td>50/nvarchar</td>
<td>Name of the reference (Booking ID)</td>
</tr>
<tr>
<td>12*</td>
<td>References.RefValue</td>
<td>Yes</td>
<td>50/varchar</td>
<td>Value of the reference (Number Booking)</td>
</tr>
<tr>
<td>13*</td>
<td>References.RefType</td>
<td>Yes</td>
<td>Fixed</td>
<td>Type of the reference (Text/Date)</td>
</tr>
<tr>
<td>14</td>
<td>Type (PartyInformation)</td>
<td>No</td>
<td>Fixed</td>
<td>Type of party information (Shipper, Consignee, Notify, Others, Collection, Delivery)</td>
</tr>
<tr>
<td>15</td>
<td>Code (PartyInformation)</td>
<td>No</td>
<td>20/varchar</td>
<td>Code of the party</td>
</tr>
<tr>
<td>16</td>
<td>Name (PartyInformation)</td>
<td>No</td>
<td>200/nvarchar</td>
<td>Name of the party</td>
</tr>
<tr>
<td>17</td>
<td>Unformatted (PartyInformation)</td>
<td>No</td>
<td>200/nvarchar</td>
<td>Unformatted address details</td>
</tr>
<tr>
<td>18</td>
<td>Formatted.Add1 (PartyInformation)</td>
<td>No</td>
<td>200/nvarchar</td>
<td>Address line 1</td>
</tr>
<tr>
<td>19</td>
<td>Formatted.Add2 (PartyInformation)</td>
<td>No</td>
<td>200/nvarchar</td>
<td>Address line 2</td>
</tr>
<tr>
<td>20</td>
<td>Formatted.Add3 (PartyInformation)</td>
<td>No</td>
<td>200/nvarchar</td>
<td>Address line 3</td>
</tr>
<tr>
<td>21</td>
<td>Formatted.Add4 (PartyInformation)</td>
<td>No</td>
<td>200/nvarchar</td>
<td>Address line 4</td>
</tr>
<tr>
<td>22</td>
<td>Formatted.City.Name (PartyInformation)</td>
<td>No</td>
<td>50/nvarchar</td>
<td>City name</td>
</tr>
<tr>
<td>23</td>
<td>Formatted.City.State (PartyInformation)</td>
<td>No</td>
<td>20/varchar</td>
<td>State code</td>
</tr>
<tr>
<td>24</td>
<td>Formatted.Country.Name (PartyInformation)</td>
<td>No</td>
<td>50/nvarchar</td>
<td>Country name</td>
</tr>
<tr>
<td>25</td>
<td>Formatted.POBox (PartyInformation)</td>
<td>No</td>
<td></td>
<td>PO Box</td>
</tr>
<tr>
<td>26</td>
<td>Type (Attachments)</td>
<td>No</td>
<td>Fixed length (e.g., &quot;MNFST&quot;)</td>
<td>Type of attachment (Refer Appendix A)</td>
</tr>
<tr>
<td>27</td>
<td>Name (Attachments)</td>
<td>No</td>
<td></td>
<td>Name of the attachment</td>
</tr>
<tr>
<td>28</td>
<td>Content (Attachments)</td>
<td>No</td>
<td>Base64</td>
<td>Content (usually base64)</td>
</tr>
<tr>
<td>29</td>
<td>MimeType (Attachments)</td>
<td>No</td>
<td>Fixed length (e.g., &quot;application/pdf&quot;)</td>
<td>MIME type of the attachment</td>
</tr>
<tr>
<td>30</td>
<td>MOLineId</td>
<td>Yes in case of update</td>
<td>Integer (e.g., &quot;0&quot;)</td>
<td>Line ID in the master order. Optional – only filled on update requests</td>
</tr>
<tr>
<td>31*</td>
<td>ArticleCode</td>
<td>Yes</td>
<td>20/varchar</td>
<td>Code of the article</td>
</tr>
<tr>
<td>32</td>
<td>ArticleDesc</td>
<td>String</td>
<td>250/nvarchar</td>
<td>Description of the article</td>
</tr>
<tr>
<td>33*</td>
<td>Quantity</td>
<td>Yes</td>
<td>Integer (e.g., &quot;48&quot;)</td>
<td>Quantity of the order line in multipleOf: 0.01</td>
</tr>
<tr>
<td>36*</td>
<td>UOM</td>
<td>Yes</td>
<td>Fixed length (e.g., &quot;pallets&quot;)</td>
<td>Unit of measure (Pallets)</td>
</tr>
<tr>
<td>37</td>
<td>UnitType (Units)</td>
<td>Yes</td>
<td>5/varchar</td>
<td>Type of the Unit (40HC, 20DC etc.)</td>
</tr>
<tr>
<td>38</td>
<td>Description (Units)</td>
<td>No</td>
<td>150/nvarchar</td>
<td>Description of the unit</td>
</tr>
<tr>
<td>39</td>
<td>ISOCode (Units)</td>
<td>Yes</td>
<td>10/nvarchar</td>
<td>ISO code of the unit (mandatory if unit type is blank) (22R1, 42R1, 45R1 etc)</td>
</tr>
<tr>
<td>40*</td>
<td>ReeferTemp</td>
<td>Yes</td>
<td>(10,2)/decimal</td>
<td>Temperature for reefer units</td>
</tr>
<tr>
<td>41</td>
<td>Hazard</td>
<td>No</td>
<td>boolean</td>
<td>true, false</td>
</tr>
<tr>
<td>42</td>
<td>UNNo</td>
<td>No</td>
<td>20/varchar</td>
<td>Mandatory if “Hazard” = true</td>
</tr>
<tr>
<td>43</td>
<td>Class</td>
<td>No</td>
<td>20/varchar</td>
<td>Mandatory if “Hazard” = true</td>
</tr>
<tr>
<td>44</td>
<td>IMDGPageNo</td>
<td>No</td>
<td>20/varchar</td>
<td>Mandatory if “Hazard” = true</td>
</tr>
<tr>
<td>45</td>
<td>Carrier.Code (RoutingsDetails)</td>
<td>Yes</td>
<td>20/varchar</td>
<td>Carrier code</td>
</tr>
<tr>
<td>46</td>
<td>Carrier.Name (RoutingsDetails)</td>
<td>Yes</td>
<td>50/varchar</td>
<td>Carrier name</td>
</tr>
<tr>
<td>47</td>
<td>Vessel.Code (RoutingsDetails)</td>
<td>No</td>
<td>20/varchar</td>
<td>Vessel code</td>
</tr>
<tr>
<td>48</td>
<td>Vessel.Name (RoutingsDetails)</td>
<td>No</td>
<td>50/varchar</td>
<td>Vessel name</td>
</tr>
<tr>
<td>49</td>
<td>ETD</td>
<td>No</td>
<td>&quot;YYYY-MM-DDTHH:MM/ DateTime</td>
<td>Estimated Time of Departure</td>
</tr>
<tr>
<td>50</td>
<td>TransportMode</td>
<td>No</td>
<td>1/varchar</td>
<td>Transport mode (1 = Road, 2 = Air, 3 = Sea, 4 = Rail)</td>
</tr>
<tr>
<td>51</td>
<td>PortOfLoading.Code (RoutingsDetails)</td>
<td>No</td>
<td>5/varchar</td>
<td>Port of loading code</td>
</tr>
<tr>
<td>52</td>
<td>PortOfLoading.Name (RoutingsDetails)</td>
<td>No</td>
<td>50/nvarchar</td>
<td>Port of loading name</td>
</tr>
<tr>
<td>53</td>
<td>PortOfDischarge.Code (RoutingsDetails)</td>
<td>No</td>
<td>5/varchar</td>
<td>Port of discharge code</td>
</tr>
<tr>
<td>54</td>
<td>PortOfDischarge.Name (RoutingsDetails)</td>
<td>No</td>
<td>50/nvarchar</td>
<td>Port of discharge name</td>
</tr>
<tr>
<td>55*</td>
<td>VoyageNo (RoutingsDetails)</td>
<td>Yes</td>
<td>15/varchar</td>
<td>Voyage number</td>
</tr>
<tr>
<td>56</td>
<td>OriginTerminal.Code (RoutingsDetails)</td>
<td>No</td>
<td>5/varchar</td>
<td>Origin terminal code</td>
</tr>
<tr>
<td>57</td>
<td>CargoDescription (CargoDetails)</td>
<td>No</td>
<td>2000/nvarchar</td>
<td>Description of cargo</td>
</tr>
<tr>
<td>58</td>
<td>PreAdvised. GW. Value (CargoDetails)</td>
<td>No</td>
<td>(18,5)/decimal</td>
<td>Pre-advised total gross weight</td>
</tr>
<tr>
<td>59</td>
<td>PreAdvised. NW. Value (CargoDetails)</td>
<td>No</td>
<td>(18,5)/decimal</td>
<td>Pre-advised total net weight</td>
</tr>
<tr>
<td>60</td>
<td>PreAdvised. Volume. Value (CargoDetails)</td>
<td>No</td>
<td>(18,5)/decimal</td>
<td>Pre-advised total volume</td>
</tr>
<tr>
<td>61</td>
<td>NumberOfPackages (CargoDetails)</td>
<td>No</td>
<td>Integer</td>
<td>Pre-advised Total number of packages</td>
</tr>
<tr>
<td>62*</td>
<td>Clasification</td>
<td>String</td>
<td>50/varchar</td>
<td>Premium, Extra, Darien (Under MO Line --&gt; References)</td>
</tr>
<tr>
<td>63*</td>
<td>Priority</td>
<td>numeric</td>
<td>Integer (e.g., &quot;48&quot;)</td>
<td>MultipleOf: 0.01 (Under MO Line --&gt; References)</td>
</tr>
<tr>
<td>64*</td>
<td>TypeShipping</td>
<td>String</td>
<td>20/varchar</td>
<td>Container, Pallet, Europallet (Under MO Line --&gt; References)</td>
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
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>StuffingId</td>
<td>Numeric</td>
<td></td>
<td>StuffingId is generated by Logiswift to group multiple master orders. To be saved in EDI log and MO header.</td>
</tr>
<tr>
<td>2</td>
<td>MOId</td>
<td>Numeric</td>
<td></td>
<td>Logiswift identification number – used for updating a booking in the order</td>
</tr>
<tr>
<td>3</td>
<td>Lines. ArticleCode</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>Lines. ArticleDesc</td>
<td>String</td>
<td></td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>Lines. MOLineId</td>
<td>Numeric</td>
<td></td>
<td>Logiswift Master Order Line identification number – used for updating the order, if missing it will create a new line</td>
</tr>
<tr>
<td>6</td>
<td>Code</td>
<td>String</td>
<td>10/Varchar</td>
<td>201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error</td>
</tr>
<tr>
<td>7</td>
<td>Description</td>
<td>String</td>
<td>250/Nvarchar</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="_10-4-receiveanddeliveryadvice" tabindex="-1"><a class="header-anchor" href="#_10-4-receiveanddeliveryadvice"><span>10.4 ReceiveAndDeliveryAdvice</span></a></h3>
<h4 id="request-3" tabindex="-1"><a class="header-anchor" href="#request-3"><span>Request</span></a></h4>
<p>M/* = Mandatory</p>
<table>
<thead>
<tr>
<th>No</th>
<th>Field</th>
<th>Type</th>
<th>Size/Format</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr>
<td>1*</td>
<td>MOId*</td>
<td>String</td>
<td>20/varchar</td>
<td>Master Order ID (request: Voyage Number)</td>
</tr>
<tr>
<td>2*</td>
<td>ClientCode*</td>
<td>String</td>
<td>20/varchar</td>
<td>Client Code (e.g., Uniban)</td>
</tr>
<tr>
<td>3</td>
<td>MainReference*</td>
<td>String</td>
<td>35/varchar</td>
<td>Main reference identifier</td>
</tr>
<tr>
<td>4*</td>
<td>BranchCode*</td>
<td>String</td>
<td>3/varchar</td>
<td>Branch code (Type of product)</td>
</tr>
<tr>
<td>5*</td>
<td>OrderType*</td>
<td>String</td>
<td>20/varchar</td>
<td>Order type: Receive, Delivery</td>
</tr>
<tr>
<td>6*</td>
<td>PONo*</td>
<td>String</td>
<td>50/varchar</td>
<td>Purchase Order number (e.g., Voyage Number)</td>
</tr>
<tr>
<td>7*</td>
<td>PODate*</td>
<td>Date</td>
<td>&quot;YYYY-MM-DD&quot;</td>
<td>Purchase Order date</td>
</tr>
<tr>
<td>8*</td>
<td>VendorCode*</td>
<td>String</td>
<td>20/varchar</td>
<td>Vendor code (e.g., Nit Truck Company)</td>
</tr>
<tr>
<td>9</td>
<td>Warehouse*</td>
<td>String</td>
<td>20/varchar</td>
<td>Warehouse identifier</td>
</tr>
<tr>
<td>10</td>
<td>RequestedStartDate*</td>
<td>DateTime</td>
<td>&quot;YYYY-MM-DDTHH:MM&quot;</td>
<td>Estimated Time of truck arrival</td>
</tr>
<tr>
<td>11</td>
<td>Remarks</td>
<td>String</td>
<td>500/nvarchar</td>
<td>Additional remarks</td>
</tr>
<tr>
<td>12*</td>
<td>References.RefName</td>
<td>String</td>
<td>50/nvarchar</td>
<td>Name of the reference (e.g., MANIFEST ID)</td>
</tr>
<tr>
<td>13*</td>
<td>References.RefValue</td>
<td>String</td>
<td>50/varchar</td>
<td>Value of the reference (e.g., Farm Manifest Number)</td>
</tr>
<tr>
<td>14*</td>
<td>References.RefType</td>
<td>String</td>
<td>Fixed</td>
<td>Type of the reference (Text)</td>
</tr>
<tr>
<td>12.1*</td>
<td>References.RefName</td>
<td>String</td>
<td>50/nvarchar</td>
<td>Name of the reference (e.g., FARM ID)</td>
</tr>
<tr>
<td>13.1*</td>
<td>References.RefValue</td>
<td>String</td>
<td>50/varchar</td>
<td>Value of the reference (e.g., Farm code)</td>
</tr>
<tr>
<td>14.1*</td>
<td>References.RefType</td>
<td>String</td>
<td>Fixed</td>
<td>Type of the reference (Text)</td>
</tr>
<tr>
<td>12.2*</td>
<td>References.RefName</td>
<td>String</td>
<td>50/nvarchar</td>
<td>Name of the reference (e.g., GROUP ID)</td>
</tr>
<tr>
<td>13.2*</td>
<td>References.RefValue</td>
<td>String</td>
<td>50/varchar</td>
<td>Value of the reference (e.g., Group code)</td>
</tr>
<tr>
<td>14.2*</td>
<td>References.RefType</td>
<td>String</td>
<td>Fixed</td>
<td>Type of the reference (Text)</td>
</tr>
<tr>
<td>12.3*</td>
<td>References.RefName</td>
<td>String</td>
<td>50/nvarchar</td>
<td>Name of the reference (e.g., Client Order Number)</td>
</tr>
<tr>
<td>13.3*</td>
<td>References.RefValue</td>
<td>String</td>
<td>50/varchar</td>
<td>Value of the reference (e.g., Order Number)</td>
</tr>
<tr>
<td>14.3*</td>
<td>References.RefType</td>
<td>String</td>
<td>Fixed</td>
<td>Type of the reference (Text)</td>
</tr>
<tr>
<td>15</td>
<td>Type (PartyInformation)</td>
<td>String</td>
<td>Fixed</td>
<td>Type of party information (Shipper, Consignee, Notify, Others, Collection, Delivery)</td>
</tr>
<tr>
<td>16</td>
<td>Code (PartyInformation)</td>
<td>String</td>
<td>20/varchar</td>
<td>Code of the party</td>
</tr>
<tr>
<td>17</td>
<td>Name (PartyInformation)</td>
<td>String</td>
<td>200/nvarchar</td>
<td>Name of the party</td>
</tr>
<tr>
<td>18</td>
<td>Unformatted (PartyInformation)</td>
<td>String</td>
<td>200/nvarchar</td>
<td>Unformatted address details</td>
</tr>
<tr>
<td>19</td>
<td>Formatted.Add1 (PartyInformation)</td>
<td>String</td>
<td>200/nvarchar</td>
<td>Address line 1</td>
</tr>
<tr>
<td>20</td>
<td>Formatted.Add2 (PartyInformation)</td>
<td>String</td>
<td>200/nvarchar</td>
<td>Address line 2</td>
</tr>
<tr>
<td>21</td>
<td>Formatted.Add3 (PartyInformation)</td>
<td>String</td>
<td>200/nvarchar</td>
<td>Address line 3</td>
</tr>
<tr>
<td>22</td>
<td>Formatted.Add4 (PartyInformation)</td>
<td>String</td>
<td>200/nvarchar</td>
<td>Address line 4</td>
</tr>
<tr>
<td>23</td>
<td>Formatted.City.Name (PartyInformation)</td>
<td>String</td>
<td>50/nvarchar</td>
<td>City name</td>
</tr>
<tr>
<td>24</td>
<td>Formatted.City.State (PartyInformation)</td>
<td>String</td>
<td>20/varchar</td>
<td>State code</td>
</tr>
<tr>
<td>25</td>
<td>Formatted.Country.Name (PartyInformation)</td>
<td>String</td>
<td>50/nvarchar</td>
<td>Country name</td>
</tr>
<tr>
<td>26</td>
<td>Formatted.POBox (PartyInformation)</td>
<td>Numeric</td>
<td></td>
<td>PO Box</td>
</tr>
<tr>
<td>27</td>
<td>Type (Attachments)</td>
<td>String</td>
<td>Fixed</td>
<td>Type of attachment (Refer to Appendix A)</td>
</tr>
<tr>
<td>28</td>
<td>Name (Attachments)</td>
<td>String</td>
<td></td>
<td>Name of the attachment</td>
</tr>
<tr>
<td>29</td>
<td>Content (Attachments)</td>
<td>String</td>
<td>Base64</td>
<td>Content (usually base64)</td>
</tr>
<tr>
<td>30</td>
<td>MimeType (Attachments)</td>
<td>String</td>
<td>Fixed</td>
<td>MIME type of the attachment</td>
</tr>
<tr>
<td>31</td>
<td>MOLineId</td>
<td>Numeric</td>
<td>Integer</td>
<td>UMId</td>
</tr>
<tr>
<td>32*</td>
<td>ArticleCode*</td>
<td>String</td>
<td>20/varchar</td>
<td>Code of the article</td>
</tr>
<tr>
<td>33</td>
<td>ArticleDesc</td>
<td>String</td>
<td>250/nvarchar</td>
<td>Description of the article</td>
</tr>
<tr>
<td>34*</td>
<td>ExtCaseNo*</td>
<td>String</td>
<td>50/varchar</td>
<td>Extended case number (e.g., Pallet ID)</td>
</tr>
<tr>
<td>35*</td>
<td>Quantity*</td>
<td>Numeric</td>
<td>Integer</td>
<td>Quantity of boxes in the pallet</td>
</tr>
<tr>
<td>36*</td>
<td>UOM*</td>
<td>String</td>
<td>Fixed</td>
<td>Unit of measure (e.g., &quot;BOX&quot;)</td>
</tr>
<tr>
<td>37</td>
<td>Carrier.Code (RoutingsDetails)</td>
<td>String</td>
<td>20/varchar</td>
<td>Carrier code</td>
</tr>
<tr>
<td>38</td>
<td>Carrier.Name (RoutingsDetails)</td>
<td>String</td>
<td>50/varchar</td>
<td>Carrier name</td>
</tr>
<tr>
<td>39</td>
<td>Vessel.Code (RoutingsDetails)</td>
<td>String</td>
<td>20/varchar</td>
<td>Vessel code</td>
</tr>
<tr>
<td>40</td>
<td>Vessel.Name (RoutingsDetails)</td>
<td>String</td>
<td>50/varchar</td>
<td>Vessel name</td>
</tr>
<tr>
<td>41</td>
<td>ETD</td>
<td>DateTime</td>
<td>&quot;YYYY-MM-DDTHH:MM&quot;</td>
<td>Estimated Time of Departure</td>
</tr>
<tr>
<td>42</td>
<td>TransportMode</td>
<td>String</td>
<td>1/varchar</td>
<td>Transport mode (1 = Road, 2 = Air, 3 = Sea, 4 = Rail)</td>
</tr>
<tr>
<td>43</td>
<td>PortOfLoading.Code (RoutingsDetails)</td>
<td>String</td>
<td>5/varchar</td>
<td>Port of loading code</td>
</tr>
<tr>
<td>44</td>
<td>PortOfLoading.Name (RoutingsDetails)</td>
<td>String</td>
<td>50/nvarchar</td>
<td>Port of loading name</td>
</tr>
<tr>
<td>45</td>
<td>PortOfDischarge.Code (RoutingsDetails)</td>
<td>String</td>
<td>5/varchar</td>
<td>Port of discharge code</td>
</tr>
<tr>
<td>46</td>
<td>PortOfDischarge.Name (RoutingsDetails)</td>
<td>String</td>
<td>50/nvarchar</td>
<td>Port of discharge name</td>
</tr>
<tr>
<td>47</td>
<td>VoyageNo (RoutingsDetails)</td>
<td>String</td>
<td>15/varchar</td>
<td>Voyage number</td>
</tr>
<tr>
<td>48</td>
<td>OriginTerminal.Code (RoutingsDetails)</td>
<td>String</td>
<td>5/varchar</td>
<td>Origin terminal code</td>
</tr>
<tr>
<td>49</td>
<td>CargoDescription (CargoDetails)</td>
<td>String</td>
<td>2000/nvarchar</td>
<td>Description of cargo</td>
</tr>
<tr>
<td>50*</td>
<td>QuantityPallets*</td>
<td>Numeric</td>
<td>Integer</td>
<td>Quantity in Pallets</td>
</tr>
<tr>
<td>51*</td>
<td>TypeShipping*</td>
<td>String</td>
<td>20/varchar</td>
<td>Type of shipping (Container, Pallet, Europallet)</td>
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
<th>Remarks</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>MOId</td>
<td>String</td>
<td>20/Varchar</td>
<td>Id for the order and create the appointment</td>
</tr>
<tr>
<td>2</td>
<td>Lines. ArticleCode</td>
<td>String</td>
<td></td>
<td>Article Code in the line of the order</td>
</tr>
<tr>
<td>3</td>
<td>Lines. ArticleDesc</td>
<td>String</td>
<td></td>
<td>Description of the article in the order line</td>
</tr>
<tr>
<td>4</td>
<td>Lines. MOLineId</td>
<td>Numeric</td>
<td></td>
<td>Logiswift Master Order Line identification number. UMId. Used for updating the order, if missing, it will create a new line</td>
</tr>
<tr>
<td>5</td>
<td>Code</td>
<td>String</td>
<td>10/Varchar</td>
<td>201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error</td>
</tr>
<tr>
<td>6</td>
<td>Description</td>
<td>String</td>
<td>250/Nvarchar</td>
<td>Description of the response, typically indicating the status or any errors</td>
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