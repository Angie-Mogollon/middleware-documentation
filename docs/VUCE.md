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

# Functional Requirements Document

## 1. General Project Information

| Project Name                  | Interface Design in the Middleware for PBCU Applications Integration         |
|-------------------------------|------------------------------------------------------------------------------|
| Sprint                        | Sprint # 1                                                                   |
| Assigned Team                 | Team F                                                                       |
| Sprint Start Date             | 16 September of 2024                                                           |
| Delivery Date                 | 20 September of 2024                                                           |

## 2. Objective

The objective of this project is to develop a service in Middleware that receives requests in JSON format from the TOS (OTM), converts them to XML according to VUCE requirements, executes the "Report Container Filling" service from VUCE, and then returns the response in JSON format to the TOS (OTM). This service will enable proper integration between the TOS (OTM) and VUCE systems, optimizing the container filling reporting process, ensuring efficiency, accuracy, and compliance with required standards.

## 3. Sprint Scope

The scope of this service includes receiving requests in JSON format from the TOS (OTM), which will be converted to XML according to the VUCE requirements. The Middleware must execute the "Report Container Filling" service from VUCE, sending the converted information and processing the response received in XML format. The Middleware will then convert this response back to JSON and send it to the TOS (OTM). Additionally, error handling mechanisms will be implemented, such as logging and retries in case of failures, to ensure the reliability of the service. The Middleware must integrate with the TOS (OTM) and VUCE systems, ensuring correct data transfer and efficient process execution. Finally, unit and integration tests will be conducted to validate the functionality of the service.

## 4. Functional Requirements
### 4.1 General Description

- **RF-01**: The Middleware must receive a request in JSON format from the TOS (OTM) with the necessary data to process container filling.
- **RF-02**: The Middleware must correctly convert the JSON request to XML according to the format specifications required by VUCE.
- **RF-03**: The Middleware must execute the "Report Container Filling" service of VUCE, using the generated XML, to register the container filling.
- **RF-04**: The Middleware must receive the response from VUCE in XML format, process it, and convert it back to JSON before sending it to the TOS (OTM).
- **RF-05**: The Middleware must implement appropriate error handling in case of failures during format conversion, execution of the VUCE service, or receiving responses. This should include detailed logs and retry mechanisms.
- **RF-06**: The Middleware must ensure that all conversions and processing of requests and responses are performed efficiently and without data loss.
- **RF-07**: The Middleware must ensure that data transmitted between the TOS (OTM) and VUCE is protected and complies with applicable security standards.
- **RF-08**: The Middleware must have mechanisms in place to ensure continuous service availability, implementing recovery strategies and high availability.
- **RF-09**: The Middleware must be capable of handling multiple concurrent requests without degrading system performance.
- **RF-10**: The Middleware must maintain an adequate log of all transactions to ensure traceability of each processed request.

### 4.2 Use Cases

#### Use Case 1: Consult Appointments from TOS (OTM)

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the TOS (OTM) API.
- **Main Flow**:
  1. The Middleware sends a request to TOS (OTM) to query appointments.
  2. TOS (OTM) responds with appointment data.
  3. The Middleware processes the response.
- **Postconditions**: The Middleware has the appointment data for further processing.

#### Use Case 2: Query Pending Containers from VUCE

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the pending container query service from VUCE.
- **Main Flow**:
  1. The Middleware requests the list of containers pending scheduling from VUCE.
  2. VUCE responds with the pending container data.
  3. The Middleware processes the obtained data.
- **Postconditions**: The Middleware has the list of pending containers from VUCE for further processing.

#### Use Case 3: Query Full Export Containers

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the full export container API.
- **Main Flow**:
  1. The Middleware queries the full export containers from VUCE.
  2. The Middleware receives the full container data.
  3. The Middleware executes the "Consult SAE" service to obtain the selectivity of each container.
  4. The Middleware returns the updated list of containers with their selectivity to the TOS (OTM) system.
- **Postconditions**: The TOS (OTM) system receives the updated list of full export containers with their selectivity.

#### Use Case 4: Query Inspection Schedule and Location

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the "Send inspection schedule and location" service from VUCE.
- **Main Flow**:
  1. The Middleware receives a request in JSON format from TOS (OTM).
  2. The Middleware converts the JSON request to XML according to VUCE's requirements.
  3. The Middleware executes the "Send inspection schedule and location" service from VUCE.
  4. The Middleware receives the response from VUCE and converts it from XML to JSON.
  5. The Middleware returns the response in JSON format to TOS (OTM).
- **Postconditions**: The TOS (OTM) system receives the processed response with the inspection schedule and location.

#### Use Case 5: Send General Cargo Entry

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the "Send general cargo entry" service from VUCE.
- **Main Flow**:
  1. The Middleware receives a request in JSON format from TOS (OTM).
  2. The Middleware converts the JSON request to XML according to VUCE's requirements.
  3. The Middleware executes the "Send general cargo entry" service from VUCE.
  4. The Middleware receives the response from VUCE and converts it from XML to JSON.
  5. The Middleware returns the response in JSON format to TOS (OTM).
- **Postconditions**: The TOS (OTM) system receives the processed response with the general cargo entry.

#### Use Case 6: General Cargo Filling Scheduling

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the "General cargo filling scheduling" service from VUCE.
- **Main Flow**:
  1. The Middleware receives a request in JSON format from TOS (OTM).
  2. The Middleware converts the JSON request to XML according to VUCE's requirements.
  3. The Middleware executes the "General cargo filling scheduling" service from VUCE.
  4. The Middleware receives the response from VUCE and converts it from XML to JSON.
  5. The Middleware returns the response in JSON format to TOS (OTM).
- **Postconditions**: The TOS (OTM) system receives the processed response with the general cargo filling scheduling.

#### Use Case 7: Report Container Filling

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the "Report container filling" service from VUCE.
- **Main Flow**:
  1. The Middleware receives a request in JSON format from TOS (OTM).
  2. The Middleware converts the JSON request to XML according to VUCE's requirements.
  3. The Middleware executes the "Report container filling" service from VUCE.
  4. The Middleware receives the response from VUCE and converts it from XML to JSON.
  5. The Middleware returns the response in JSON format to TOS (OTM).
- **Postconditions**: The TOS (OTM) system receives the processed response with the container filling report.

#### Use Case 8: Check Container Filling Status

- **Actor**: Middleware
- **Preconditions**: The Middleware has access to the service to check the filling status of containers.
- **Main Flow**:
  1. The Middleware makes a request to VUCE to check the filling status of the containers.
  2. VUCE responds with the filling status data of the containers.
  3. The Middleware processes the response and extracts the required data.
  4. The Middleware returns the processed data to the TOS (OTM) system.
- **Postconditions**: The TOS (OTM) system receives the data about the filling status of the containers.

## 5. Validations Requested by the Client

#### V-01: Appointment Validation
- **Description**: Verify that the appointments received from the TOS (OTM) system are valid, with complete and correct data according to the client's requirements.
- **Acceptance Criteria**:
  - The appointments must include the required fields: date, time, vehicle, driver, and load type.
  - If any data is missing, the Middleware must return an appropriate error.
  - The Middleware must correctly process valid appointments and send them to the corresponding system.

#### V-02: Vehicle Validation
- **Description**: Ensure that the vehicle making the request or action in TOS (OTM) is registered and authorized according to the company's criteria.
- **Acceptance Criteria**:
  - The vehicle must have an active registration in the TOS (OTM) system and be authorized for the required operations.
  - If the vehicle is not registered or authorized, the Middleware must return an appropriate error message, indicating the reason for the invalidation.

#### V-03: Driver Validation
- **Description**: Verify that the driver associated with the operation in TOS (OTM) is registered and authorized to operate the vehicle.
- **Acceptance Criteria**:
  - The driver must be registered in the system with a valid license and without any restrictions that prevent their operation.
  - If the driver does not meet the requirements, the Middleware must return an error indicating the reason for the invalidation.

#### V-04: Manifest Validation
- **Description**: Validate that the cargo manifest is complete, legible, and matches the cargo details in TOS (OTM).
- **Acceptance Criteria**:
  - The manifest must contain complete information about the cargo (type, quantity, destination, and other details).
  - If the manifest has missing or incorrect information, the Middleware must return a specific error about the cause of the rejection.

#### V-05: Load Validation
- **Description**: Verify that the load registered in TOS (OTM) is correctly specified and compatible with the required characteristics.
- **Acceptance Criteria**:
  - The load must be correctly detailed in type, weight, volume, and handling characteristics.
  - If the load does not meet the requirements or is incomplete, the Middleware must return an error message indicating the problem.

#### V-06: Container Weight Validation
- **Description**: Ensure that the container weight registered in TOS (OTM) matches the data from the weighing system or the prior specifications.
- **Acceptance Criteria**:
  - The registered weight must be consistent with the values provided by the weighing system.
  - If the weight is incorrect or inconsistent, the Middleware must return an error specifying the inconsistency.

#### V-07: Validation of Loading Schedule
- **Description**: Confirm that the loading schedule for the cargo is correctly defined according to the requirements of VUCE and the TOS (OTM) system.
- **Acceptance Criteria**:
  - The schedule must include the date, time, and details of the loading location.
  - If the schedule is incomplete or invalid, the Middleware must return an appropriate error message.

#### V-08: Validation of Inspection Time and Location
- **Description**: Ensure that the inspection time and location for the container are correctly defined and accessible according to the schedule and rules of VUCE.
- **Acceptance Criteria**:
  - The inspection time and location must match the VUCE data and fall within the available times and locations.
  - If the data is invalid, the Middleware must generate an error message with details of the failure.

#### V-09: Validation of Container Filling Report
- **Description**: Validate that the container filling report is accurate and meets the requirements of VUCE.
- **Acceptance Criteria**:
  - The report must include the correct container information, such as filling data, type of cargo, and the container used.
  - If the report is incorrect or incomplete, the Middleware must return an error indicating the cause.

#### V-10: Validation of Container Data Consistency
- **Description**: Confirm that the container data in the TOS (OTM) system is consistent with that of VUCE.
- **Acceptance Criteria**:
  - Container details, such as the number, type, and status, must match between TOS (OTM) and VUCE.
  - If there are discrepancies, the Middleware must generate an error and provide details of the inconsistency.

## 6. Assumptions and Dependencies

- The Middleware depends on the availability and proper functioning of the TOS (OTM) services to receive and send data related to appointments, containers, general cargo, and other logistics processes.
- The Middleware depends on the availability and access to VUCE services to perform tasks such as querying pending containers, scheduling general cargo filling, and generating container filling reports.
- The Middleware and the involved systems require a stable internet connection to communicate with TOS (OTM) and VUCE via their APIs.
- The Middleware depends on having valid access credentials and appropriate permissions to interact with the TOS (OTM) and VUCE APIs.
- The Middleware depends on the availability and accuracy of the data provided by the weighing system to validate the weight of containers before processing them.
- The Middleware must coordinate with the inspection systems to obtain the schedules and locations of container inspections, which may depend on the availability of such information.
- The Middleware and all involved systems need to have properly configured testing environments for integration and functionality testing.
- The Middleware depends on the JSON and XML data formats, used for communication between TOS (OTM) and VUCE, being updated according to the standards and requirements set by both platforms.

## 7. Sequence Diagrams

*(Aquí se deben incluir los diagramas de secuencia para ilustrar el flujo de comunicación y procesos entre el Middleware, TOS (OTM), VUCE y otros sistemas involucrados. Agrega los diagramas correspondientes en esta sección)*

## 8. Service Data

### 8.1 Report SAE

```json
Request

{
   "sae": "Valor del campo SAE",
   "container": "Valor del campo container",
   "sticker": "Valor del campo sticker",
   "seals": "Valor del campo seals",
   "idCarga": "Valor del campo idCarga",
   "boardingPlaceCode": "Valor del campo boardingPlaceCode",
   "vesselName": "Valor del campo vesselName",
   "visitNbr": "Valor del campo visitNbr",
   "truckCompany": "Valor del campo truckCompany",
   "truckLicence": "Valor del campo truckLicence",
   "driverName": "Valor del campo driverName",
   "driverId": 12345,
   "isoCode": "Valor del campo isoCode",
   "numFormatoIngresoZP ": "Valor del campo isoCode"

}
```
```json
Response
{
	"statusResponse":"Ok",
	"code":200,
	"description":"",
"dianForm":"1158765289712"

}

```
### 8.2	Get Selectivity

```json
Request

{
   "containers": [
      {
         "inspectionNbr": "String",
         "statusRequest": "String",
         "container": "String",
         "statusContainer": "String",
         "selectivityInformation": "String"
      },
      {
         "inspectionNbr": "String",
         "statusRequest": "String",
         "container": "String",
         "statusContainer": "String",
         "selectivityInformation": "String"
      }
   ]
}

```
```json
Response

{
	"statusResponse":"Ok",
	"code":200,
	"description":""
}

```
### 8.3 Send Inspection location and times (Schedule)

```json
Request

{
   "boardingPlaceCode": "ABC123",
   "dateTimeInspection": "2024-07-22T10:30:00",
   "cargoType": "Fruit",
   "container": "Container123",
   "remarks": "No issues found",
   "inspectionPlaceCode": "XYZ789"
}

```
```json
Response

{
	"statusResponse":"Ok",
	"code":200,
	"description":"",
"statusSelectivity ": "agendado "
}

```
### 8.4	Send GateIn General Cargo

```json
Request

{
   "serviceNbr": "12345",
   "shippingLine": "ABC Shipping Co.",
   "vessel": "MV Example",
   "visitNbr": "V001",
   "cargoId": "CARGO-001",
   "weight": 500.75,
   "sae": "SAE-789",
   "truckCompany": "XYZ Transport",
   "truckLicense": "XYZ-1234",
   "driverName": "John Doe",
   "driverId": "D123456",
   "boardingPlaceCode": "BPC-567"
}

```
```json

Response

{
	"statusResponse":"Ok",
	"code":200,
	"description":""
}

```
### 8.5	Send stuffing schedule

```json
Request

{
   "boardingPlaceCode": "BPC-567",
   "dateTimeInspection": "String",
   "operationType": "String",
   "programmingTime": "10:30:05",
   "programmingDate": "2024-07-22",
   "programminNbr": "PN-123",
   "inspectionPlaceCode": "IPC-789",
   "consecutiveFilling": 3,
   "update": "N",
   "reschedule": “N”,
}

```
```json
Response

{
	"statusResponse":"Ok",
	"code":200,
	"description":""
}

```
### 8.6	Send stuffed containers

```json
Request

{
   "programmingNbr": "PN-456",
   "consecutiveStuffing": 2,
   "seals": "SEAL-789",
   "container": "Container-123",
   "serviceNbr": 98765,
   "loaded": true,
   "reason": "Inspection required"
}

```
```json
{
	"statusResponse":"Ok",
	"code":200,
	"description":""
}

```

## 9. Unit Tests

*(En esta sección se deben incluir detalles de las pruebas unitarias realizadas en el Middleware. Incluye una descripción de los casos de prueba, los módulos probados, los resultados esperados y los resultados obtenidos. Asegúrate de mencionar cualquier herramienta de pruebas utilizada y el nivel de cobertura alcanzado)*

## 10. Annexes

### 10.1 Report SAE

#### Request

| No. | Field              | Type   | Size/Format               | Domain |
|-----|---------------------|--------|---------------------------|--------|
| 1   | sae                | String | 20                        |        |
| 2   | container          | String | 12                        |        |
| 3   | sticker            | String | 35                        |        |
| 4   | seals              | String | 35                        |        |
| 5   | idCarga            | String | 10                        |        |
| 6   | boardingPlaceCode  | String | 12                        |        |
| 7   | vesselName         | String | 128                       |        |
| 8   | visitNbr           | String | 32                        |        |
| 9   | truckCompany       | String | 255                       |        |
| 10  | truckLicence       | String | 30                        |        |
| 11  | driverName         | String | 255                       |        |
| 12  | driverId           | Number | 12                        |        |
| 13  | isoCode            | String | 12                        |        |
| 14  | numFormatoIngresoZP| String | 20                        |        |

#### Responses

| No. | Field            | Type   | Size/Format | Domain          |
|-----|-------------------|--------|-------------|-----------------|
| 1   | statusResponse   | String | 5           | True, false     |
| 2   | code             | Number | 2           |                 |
| 3   | description      | String | 5000        |                 |
| 4   | dianForm         | String | 20          |                 |

### 10.2 Get Selectivity

#### Request

| No. | Field                 | Type   | Size/Format               | Domain |
|-----|------------------------|--------|---------------------------|--------|
| 1   | containers            | Array  |                           |        |
| 2   | inspectionNbr         | String | 50                        |        |
| 3   | statusRequest         | String | 50                        |        |
| 4   | container             | String | 15                        |        |
| 5   | statusContainer       | String | 50                        |        |
| 6   | selectivityInformation| String | 50                        |        |

#### Responses

| No. | Field            | Type   | Size/Format | Domain          |
|-----|-------------------|--------|-------------|-----------------|
| 1   | statusResponse   | String | 5           | True, false     |
| 2   | code             | Number | 2           |                 |
| 3   | description      | String | 5000        |                 |

### 10.3 Send Inspection Location and Times (Schedule)

#### Request

| No. | Field               | Type   | Size/Format               | Domain |
|-----|----------------------|--------|---------------------------|--------|
| 1   | boardingPlaceCode   | String | 4                         |        |
| 2   | dateTimeInspection  | String | 19 / AAAA-MM-DD HH:MM:SS  |        |
| 3   | cargoType           | String | 20                        |        |
| 4   | container           | String | 12                        |        |
| 5   | remarks             | String | 500                       |        |
| 6   | inspectionPlaceCode | String | 4                         |        |

#### Responses

| No. | Field            | Type   | Size/Format | Domain          |
|-----|-------------------|--------|-------------|-----------------|
| 1   | statusResponse   | String | 5           | True, false     |
| 2   | code             | Number | 2           |                 |
| 3   | description      | String | 5000        |                 |
| 4   | statusSelectivity| String | 30          |                 |

### 10.4 Send GateIn General Cargo

#### Request

| No. | Field           | Type           | Size/Format  | Domain |
|-----|------------------|----------------|--------------|--------|
| 1   | serviceNbr      | String         | 12           |        |
| 2   | shippinLine     | String         | 255          |        |
| 3   | vessel          | String         | 128          |        |
| 4   | visitNbr        | String         | 128          |        |
| 5   | cargoId         | String         | 20           |        |
| 6   | weight          | Number decimal | 12.2         |        |
| 7   | sae             | String         | 20           |        |
| 8   | truckCompany    | String         | 255          |        |
| 9   | truckLicense    | String         | 30           |        |
| 10  | driverName      | String         | 255          |        |
| 11  | driverId        | String         | 12           |        |
| 12  | boardingPlaceCode| String        | 10           |        |

#### Responses

| No. | Field            | Type   | Size/Format | Domain          |
|-----|-------------------|--------|-------------|-----------------|
| 1   | statusResponse   | String | 5           | True, false     |
| 2   | code             | Number | 2           |                 |
| 3   | description      | String | 5000        |                 |

### 10.5 Send Stuffing Schedule

#### Request

| No. | Field               | Type           | Size/Format            | Domain        |
|-----|----------------------|----------------|-------------------------|---------------|
| 1   | boardingPlaceCode   | String         | 10                      |               |
| 2   | dateTimeInspection  | String         | 19 / AAAA-MM-DD HH:MM:SS|               |
| 3   | operationType       | String         | 20                      |               |
| 4   | programmingTime     | String         | 9 / T00:00:00           |               |
| 5   | programmingDate     | Date           | 10 / AAAA-MM-DD         |               |
| 6   | programmingNbr      | String         | 20                      |               |
| 7   | inspectionPlaceCode | String         | 4                       |               |
| 8   | consecutiveStuffing | Number         | 20                      |               |
| 9   | update              | String         | 1                       | S: Yes, N: No|
| 10  | reschedule          | String         | 1                       | S: Yes, N: No|

#### Responses

| No. | Field            | Type   | Size/Format | Domain          |
|-----|-------------------|--------|-------------|-----------------|
| 1   | statusResponse   | String | 5           | True, false     |
| 2   | code             | Number | 2           |                 |
| 3   | description      | String | 5000        |                 |

### 10.6 Send Stuffed Containers

#### Request

| No. | Field                | Type   | Size/Format | Domain         |
|-----|-----------------------|--------|-------------|----------------|
| 1   | programmingNbr       | String | 20          |                |
| 2   | consecutiveStuffing  | Number | 20          |                |
| 3   | seals                | String | 35          |                |
| 4   | container            | String | 12          |                |
| 5   | serviceNbr           | Number | 12          |                |
| 6   | loaded               | String | 2           | SI, NO         |
| 7   | reason               | String | 4           |                |

#### Responses

| No. | Field            | Type   | Size/Format | Domain          |
|-----|-------------------|--------|-------------|-----------------|
| 1   | statusResponse   | String | 5           | True, false     |
| 2   | code             | Number | 2           |                 |
| 3   | description      | String | 5000        |                 |


