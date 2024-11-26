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
| Sprint                        | Sprint # 4                                                                   |
| Assigned Team                 | Team G                                                                       |
| Sprint Start Date             | 1 November of 2024                                                           |
| Delivery Date                 | 15 November of 2024                                                          |

## 2. Objective

The objective of the Sprint is to develop a series of forms for bulk data entry, which will be converted to JSON format and sent to the Warehouse Management System (WMS). This process will enable the integration of various services with the WMS, improving inventory management efficiency and data synchronization.

## 3. Sprint Scope

The scope of the Sprint includes the development of forms for bulk data entry in the **ProductMaster**, **PlanningInformation**, **DeliveryOrder**, and **ReceiveAndDeliveryAdvice** services. These forms will allow users to enter data or upload files in formats such as CSV and Excel, which will be converted to JSON format by the Middleware and sent to the Warehouse Management System (WMS). The system must also incorporate parametric tables for certain selector-type fields, ensure that mandatory fields are properly validated, and guarantee the correct conversion and submission of requests to the WMS.

## 4. Functional Requirements
### 4.1 General Description

- **RF-01**: Create a form for the **ProductMaster** service that receives data and converts it to JSON for submission to the WMS.
- **RF-02**: Create a form for the **PlanningInformation** service with similar functionality, allowing bulk data entry and conversion to JSON.
- **RF-03**: Create a form for the **DeliveryOrder** service with the same bulk data entry and JSON conversion requirements.
- **RF-04**: Create a form for the **ReceiveAndDeliveryAdvice** service, with the same features as the previous ones.

### 4.2 Use Cases

#### Use Case 1: ProductMaster - Bulk Data Entry

- **Actor:** Middleware Developer
- **Preconditions:** The user has access to the form and documentation.
- **Main Flow:**
  1. The developer accesses the graphical interface.
  2. The developer enters the required data or uploads a file (.CSV, .xlsx).
  3. The system converts the data to JSON format.
  4. The Middleware sends the request to the WMS.
- **Postconditions:** The system successfully sends the request to the WMS and receives confirmation.

#### Use Case 2: PlanningInformation - Bulk Data Entry

- **Actor:** Middleware Developer
- **Preconditions:** The user has access to the form and documentation.
- **Main Flow:**
  1. The developer accesses the graphical interface.
  2. The developer enters the required data or uploads a file (.CSV, .xlsx).
  3. The system converts the data to JSON format.
  4. The Middleware sends the request to the WMS.
- **Postconditions:** The system successfully sends the request to the WMS and receives confirmation.

#### Use Case 3: DeliveryOrder - Bulk Data Entry

- **Actor:** Middleware Developer
- **Preconditions:** The user has access to the form and documentation.
- **Main Flow:**
  1. The developer accesses the graphical interface.
  2. The developer enters the required data or uploads a file (.CSV, .xlsx).
  3. The system converts the data to JSON format.
  4. The Middleware sends the request to the WMS.
- **Postconditions:** The system successfully sends the request to the WMS and receives confirmation.

#### Use Case 4: ReceiveAndDeliveryAdvice - Bulk Data Entry

- **Actor:** Middleware Developer
- **Preconditions:** The user has access to the form and documentation.
- **Main Flow:**
  1. The developer accesses the graphical interface.
  2. The developer enters the required data or uploads a file (.CSV, .xlsx).
  3. The system converts the data to JSON format.
  4. The Middleware sends the request to the WMS.
- **Postconditions:** The system successfully sends the request to the WMS and receives confirmation.

## 5. Validations Requested by the Client

#### V-01: Mandatory Fields
 - **Description:** Fields marked with an asterisk (*) in the specifications document (Word) are mandatory.
 - **Acceptance Criteria:** If a mandatory field is not completed, the system must display an error message and prevent the request from being sent to the WMS.

#### V-02: Template Upload
 - **Description:** The form must allow uploading templates in .CSV or .xlsx format.
 - **Acceptance Criteria:** The system must accept these formats and process the data correctly.

#### V-03: Parametric Tables
 - **Description:** Parametric tables must be created for selector-type fields.
 - **Acceptance Criteria:** The values in the tables must be predefined and selectable by the user.

## 6. Assumptions and Dependencies

- El sistema depende de la API del WMS para el envío de las solicitudes.
- El diseño de la interfaz gráfica debe seguir las guías proporcionadas por el cliente.
- El proyecto requiere acceso a la documentación detallada sobre las estructuras de los servicios y parámetros de la API del WMS.

## 7. Sequence Diagrams

(En esta sección se incluirían los diagramas correspondientes, como diagramas de flujo, diagramas de casos de uso, o diagramas de arquitectura, si se requiere.)

## 8. Service Data

### 8.1 Product Master

```json
Request
{
   "Id": "12345",
   "Client": "CLIENT123",
   "Description": "Producto de Ejemplo",
   "Type": "Product Type",
   "Group": "Electrónica",
   "BaseUnit": "PLT",
   "Weight": 1.25,
   "WeightUnit": "kg",
   "QuantityBox": "30",
   "UrlPicture": "https://example.com/product.jpg",
   "Status": "Active",
   "EquivalentProductId": "54321,65895"
}

```

```json
Response
{
  "Code": "string",
  "Description": "string"
}

```
### 8.2 Planning Information

```json
Request
{
   "NitCustomer": "123456789",
   "PortOfDischarge": "Puerto de Barcelona",
   "VoyageMn": "Voyage001",
   "LineOperator": "OperadorX",
   "day": [
      {
         "day": "monday",
         "ProductID": "ABC123",
         "ProductReference": "REF456",
         "Clasification": "Premium",
         "Quantity": 100,
         "BookingOrBl": "BOOK123456",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Container"
      },
{
         "day": "monday",
         "ProductID": "ABC1276",
         "ProductReference": "REF4321",
         "Clasification": "Premium",
         "Quantity": 200,
         "BookingOrBl": "BOOK12391",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Pallet"
      },

      {
         "day": "tuesday",
         "ProductID": "ABC124",
         "ProductReference": "REF457",
         "Clasification": "ExtraPremium",
         "Quantity": 240,
         "BookingOrBl": "Bl23416",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Pallet"
      },
      {
         "day": "wednesday",
         "ProductID": "ABC124",
         "ProductReference": "REF457",
         "Clasification": "ExtraPremium",
         "Quantity": 200,
         "BookingOrBl": "Bl23416",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Pallet"
      },
      {
         "day": "Thursday",
         "ProductID": "ABC123",
         "ProductReference": "REF456",
         "Clasification": "Premium",
         "Quantity": 74,
         "BookingOrBl": "BOOK123456",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Container"
      },
      {
         "day": "Friday",
         "ProductID": "ABC123",
         "ProductReference": "REF456",
         "Clasification": "Premium",
         "Quantity": 100,
         "BookingOrBl": "BOOK123456",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Container"
      },
      {
         "day": "Saturday",
         "ProductID": "ABC123",
         "ProductReference": "REF456",
         "Clasification": "Premium",
         "Quantity": 50,
         "BookingOrBl": "BOOK123456",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Container"
      },
      {
         "day": "Sunday",
         "ProductID": "ABC128",
         "ProductReference": "REF456",
         "Clasification": "Premium",
         "Quantity": 500,
         "BookingOrBl": "BOOK123456",
         "Commodity": "Hight quality",
         "Description": "",
         "TypeShipping": "Container"
      }
   ]
}

```

```json
Response
{
  "Code": "string",
  "Description": "string",
  " PlanningId ": "string"

}

```
### 8.3	DeliveryOrder (Booking)
```json
Request
{
   "DeliveryOrder": [
      {
         "MasterOrderHeader": {
            "MOId": 7616271671361,
            "Priority": 1,
            "TypeShipping": "Container",
            "Clasification": "Premiun",
            "ClientCode": "COLOMCO001",
            "MainReference": "api-XDOC-02",
            "BranchCode": "AQA",
            "OrderType": "XDOC1",
            "PONo": "BOOKING123",
            "PODate": "2024-07-30",
            "Warehouse": "AQA01",
            "RequestedStartDate": "2024-07-30T10:30:00",
            "Remarks": "BANANA EXPORT",
            "References": [
               {
                  "RefName": "REFERENCE1",
                  "RefValue": "123",
                  "RefType": "Text"
               },{
                  "RefName": "BOOKING",
                  "RefValue": "BOOKING12345",
                  "RefType": "Text"
               }



            ]
         },
         "PartyInformation": [
            {
               "Type": "Shipper",
               "Code": "COLOMCO001",
               "Name": "CLIENT 1",
               "Unformatted": "",
               "Formatted": {
                  "Add1": "SUITE 1, LEVEL 3, 56 PITT STREET,",
                  "Add2": "",
                  "Add3": "",
                  "Add4": "",
                  "City": {
                     "Name": "Bogota",
                     "State": "CUN"
                  },
                  "Country": {
                     "Name": "Colombia"
                  },
                  "POBox": "0"
               }
            }
         ],
         "Attachments": [
            {
               "Type": "BL",
               "Name": "BL123.pdf",
               "Content": "",
               "MimeType": "application/pdf"
            }
         ],
         "Lines": [
            {
               "MOLineId": "0",
               "ArticleCode": "LADYFINGER",
               "ArticleDesc": "Lady Finger Bananas",
               "References": [
{
                  "RefName": " Classification",
                  "RefValue": " Premium",
                  "RefType": "Text"
               },{
                  "RefName": " Priority",
                  "RefValue": "1",
                  "RefType": "Text"
               },{
                  "RefName": "TypeShipping",
                  "RefValue": "Container",
                  "RefType": "Text"
               }
],
               "Quantity": "48",
               "UOM": "PALLET"
            },
            {
               "MOLineId": "0",
               "ArticleCode": "ORINOCO",
               "ArticleDesc": "ORINOCO BANANAS",
               "References": [
{
                  "RefName": " CLASIFICATION",
                  "RefValue": " Premium",
                  "RefType": "Text"
               },{
                  "RefName": " Priority",
                  "RefValue": "1",
                  "RefType": "Text"
               },{
                  "RefName": "TypeShipping",
                  "RefValue": "Container",
                  "RefType": "Text"
               }
],
               "Quantity": "2496",
               "UOM": "PALLET"
            }
         ],
         "Units": [
            {
               "UnitType": "40HC",
               "Description": "40' High Cube",
               "Qty": "3",
               "ISOCode": "45R1",
               "ReeferTemp": "",
               "Hazard": false,
               "UNNo": "",
               "Class": "",
               "IMDGPageNo": ""
            }
         ],
         "RoutingsDetails": {
            "Carrier": {
               "Code": "OOL",
               "Name": "ORIENT OVERSEAS CONTAINER LINE LTD"
            },
            "Vessel": {
               "Code": "9926207",
               "Name": "CMA CGM BAIKAL"
            },
            "ETD": "2024-08-05T00:00:00",
            "TransportMode": "3",
            "PortOfLoading": {
               "Code": "COCTG",
               "Name": "Cartagena, Colombia",
               "State": "",
               "UNLOCODE": "COCTG"
            },
            "PortOfDischarge": {
               "Code": "CNQIN",
               "Name": "QINGDAO, CHINA",
               "State": "",
               "UNLOCODE": "CNQIN"
            },
            "VoyageNo": "229N",
            "OriginTerminal": {
               "Code": "CTLPB"
            }
         },
         "CargoDetails": {
            "CargoDescription": "COLOMBIAN BANANA",
            "PreAdvised": {
               "GW": {
                  "Value": "38104.00",
                  "UOM": "kgs"
               },
               "NW": {
                  "Value": "26104.00",
                  "UOM": "kgs"
               },
               "Volume": {
                  "Value": "0.00",
                  "UOM": ""
               },
               "NumberOfPackages": "78"
            }
         }
      },
      {
         "MasterOrderHeader": {
            "MOId": null,
            "Priority": "2",
            "TypeShipping": "Pallets",
            "Clasification": "Extrapremium",
            "ClientCode": "COLOMCO001",
            "MainReference": "api-XDOC-03",
            "BranchCode": "AQA",
            "OrderType": "XDOC1",
            "PONo": "BOOKING124",
            "PODate": "2024-07-30",
            "Warehouse": "AQA01",
            "RequestedStartDate": "2024-07-30T10:30:00",
            "Remarks": "BANANA EXPORT",
            "References": [
               {
                  "RefName": "REFERENCE1",
                  "RefValue": "123",
                  "RefType": "Text"
               },{
                  "RefName": "BOOKING",
                  "RefValue": "BOOKING123",
                  "RefType": "Text"
               }

            ]
         },
         "PartyInformation": [
            {
               "Type": "Shipper",
               "Code": "COLOMCO001",
               "Name": "CLIENT 1",
               "Unformatted": "",
               "Formatted": {
                  "Add1": "SUITE 1, LEVEL 3, 56 PITT STREET,",
                  "Add2": "",
                  "Add3": "",
                  "Add4": "",
                  "City": {
                     "Name": "Bogota",
                     "State": "CUN"
                  },
                  "Country": {
                     "Name": "Colombia"
                  },
                  "POBox": "0"
               }
            }
         ],
         "Attachments": [
            {
               "Type": "BL",
               "Name": "BL123.pdf",
               "Content": "",
               "MimeType": "application/pdf"
            }
         ],
         "Lines": [
            {
               "MOLineId": "0",
               "ArticleCode": "TEST01",
               "ArticleDesc": "Lady Finger Bananas",
               "References": [{
                  "RefName": "CLASIFICATION",
                  "RefValue": " Premium",
                  "RefType": "Text"
               },{
                  "RefName": " Priority",
                  "RefValue": "1",
                  "RefType": "Text"
               },{
                  "RefName": "TypeShipping",
                  "RefValue": "Container",
                  "RefType": "Text"
               }
],
               "Quantity": "1248",
               "UOM": "BOX"
            },
            {
               "MOLineId": "0",
               "ArticleCode": "TEST10",
               "ArticleDesc": "ORINOCO BANANAS",
               "References": [
{
                  "RefName": "CLASIFICATION",
                  "RefValue": " Premium",
                  "RefType": "Text"
               },{
                  "RefName": " Priority",
                  "RefValue": "1",
                  "RefType": "Text"
               },{
                  "RefName": "TypeShipping",
                  "RefValue": "Container",
                  "RefType": "Text"
               }
],
               "Quantity": "2496",
               "UOM": "BOX"
            }
         ],
         "Units": [
            {
               "UnitType": "40HC",
               "Description": "40' High Cube",
               "Qty": "3",
               "ISOCode": "45R1",
               "ReeferTemp": "",
               "Hazard": false,
               "UNNo": "",
               "Class": "",
               "IMDGPageNo": ""
            }
         ],
         "RoutingsDetails": {
            "Carrier": {
               "Code": "OOL",
               "Name": "ORIENT OVERSEAS CONTAINER LINE LTD"
            },
            "Vessel": {
               "Code": "9926207",
               "Name": "CMA CGM BAIKAL"
            },
            "ETD": "2024-08-05T00:00:00",
            "TransportMode": "3",
            "PortOfLoading": {
               "Code": "COCTG",
               "Name": "Cartagena, Colombia",
               "State": "",
               "UNLOCODE": "COCTG"
            },
            "PortOfDischarge": {
               "Code": "CNQIN",
               "Name": "QINGDAO, CHINA",
               "State": "",
               "UNLOCODE": "CNQIN"
            },
            "VoyageNo": "229N",
            "OriginTerminal": {
               "Code": "CTLPB"
            }
         },
         "CargoDetails": {
            "CargoDescription": "COLOMBIAN BANANA",
            "PreAdvised": {
               "GW": {
                  "Value": "38104.00",
                  "UOM": "kgs"
               },
               "NW": {
                  "Value": "26104.00",
                  "UOM": "kgs"
               },
               "Volume": {
                  "Value": "0.00",
                  "UOM": ""
               },
               "NumberOfPackages": "100"
            }
         }
      }
   ]
}

```

```json
{
   "code": 201,
   "Description": "successfull",
   "StuffingId": 56125612561,
   "DeliveryOrder": [
      {
         "MoId": 121232121212,
         "Lines": [
            {
               "ArticleCode": "LADYFINGER",
               "ArticleDesc": "Lady Finger Bananas",
               "MOLineId": 185
            },
            {
               "ArticleCode": "ORINOCO",
               "ArticleDesc": "ORINOCO BANANAS",
               "MOLineId": 186
            }
         ]
      },
      {
         "MoId": 232323121212,
         "Lines": [
            {
               "ArticleCode": "TEST01",
               "ArticleDesc": "Lady Finger Bananas",
               "MOLineId": 185
            },
            {
               "ArticleCode": "TEST10",
               "ArticleDesc": "ORINOCO BANANAS",
               "MOLineId": 186
            }
         ]
      }
   ]
}

```
### 8.4	ReceiveAndDeliveryAdvice

```json
Request
{
   "MasterOrderHeader": {
      "MOId": "0",
      "ClientCode": "COLOMCO001",

      "BranchCode": "AQA",
      "OrderType": "ASN",
      "PONo": "MASTERMANIFESTID240000001",
      "PODate": "2024-07-24",
      "VendorCode": "ALNATCO001",
      "Warehouse": "AQA01",
      "RequestedStartDate": "2024-07-30T10:30:00",
      "Remarks": "COLUMBIAN BANANA",
      "References": [
         {
            "RefName": "BOOKING NUMBER",
            "RefValue": "2150513350",
            "RefType": "Text"
         },
         {
            "RefName": "ADDITIONAL REF1",
            "RefValue": "TEST",
            "RefType": "Text"
         }
      ]
   },
   "PartyInformation": [
      {
         "Type": "Shipper",
         "Code": "COLOMCO001",
         "Name": "CLIENT 1",
         "Unformatted": "",
         "Formatted": {
            "Add1": "SUITE 1, LEVEL 3, 56 PITT STREET,",
            "Add2": "",
            "Add3": "",
            "Add4": "",
            "City": {
               "Name": "Bogota",
               "State": "CUN"
            },
            "Country": {
               "Name": "Colombia"
            },
            "POBox": "0"
         }
      }
   ],
   "Attachments": [
      {
         "Type": "MNFST",
         "Name": "MasterManifest_123.pdf",
         "Content": "",
         "MimeType": "application/pdf"
      },
      {
         "Type": "SSI",
         "Name": "seedsample.pdf",
         "Content": "",
         "MimeType": "application/pdf"
      }
   ],
   "Lines": [
      {
         "MOLineId": "0",
         "ArticleCode": "ORINOCO",
         "ArticleDesc": "ORINOCO BANANAS",
         "ExtCaseNo": "377005910940986587",
"TypeShipping": "Container",
         "References": [
            {
               "RefName": "MANIFEST ID",
               "RefValue": "AE7JK94TM",
               "RefType": "Text"
            },
{
                  "RefName": "TypeShipping",
                  "RefValue": "Container",
                  "RefType": "Text"
               },

            {
               "RefName": "FARM ID",
               "RefValue": "1234",
               "RefType": "Text"
            },
            {
               "RefName": "SERIAL NO",
               "RefValue": "094098658",
               "RefType": "Text"
            },
            {
               "RefName": "CARRIER",
               "RefValue": "MAERSK",
               "RefType": "Text"
            },
            {
               "RefName": "GROUP ID",
               "RefValue": "500",
               "RefType": "Text"
            },
            {
               "RefName": " Client Order Number ",
               "RefValue": "30450",
               "RefType": "Text"
            },


            {
               "RefName": "BOOKING REF",
               "RefValue": "OUTBOUND12345",
               "RefType": "Text"
            },
            {
               "RefName": "EXIT DATE",
               "RefValue": "2024-07-25T10:25:00",
               "RefType": "Date"
            },
            {
               "RefName": "CURT DATE",
               "RefValue": "2024-07-25T09:25:00",
               "RefType": "Date"
            }
            {
               "RefName": "CLASIFICATION",
               "RefValue": "PREMIUN",
               "RefType": "Text"
            }
         ],
         "Quantity": "48",
         "UOM": "BOX"
      },
      {
         "MOLineId": "0",
         "ArticleCode": "LADYFINGER",
         "ArticleDesc": "Lady Finger Bananas",
         "ExtCaseNo": "00377005910940986597",
         "References": [
            {
               "RefName": "MANIFEST ID",
               "RefValue": "AE7JK94TM",
               "RefType": "Text"
            },
            {
               "RefName": "FARM ID",
               "RefValue": "1234",
               "RefType": "Text"
            },
            {
               "RefName": "SERIAL NO",
               "RefValue": "094098659",
               "RefType": "Text"
            },
            {
               "RefName": "CARRIER",
               "RefValue": "MAERSK",
               "RefType": "Text"
            },
            {
               "RefName": "BOOKING REF",
               "RefValue": "OUTBOUND12345",
               "RefType": "Text"
            },
            {
               "RefName": "EXIT DATE",
               "RefValue": "2024-07-25T10:25:00",
               "RefType": "Date"
            }
         ],
         "Quantity": "48",
         "UOM": "BOX"
      }
   ],
   "RoutingsDetails": {
      "Carrier": {
         "Code": "OOL",
         "Name": "ORIENT OVERSEAS CONTAINER LINE LTD"
      },
      "Vessel": {
         "Code": "9926207",
         "Name": "CMA CGM BAIKAL"
      },
      "ETD": "2024-08-05T00:00:00",
      "TransportMode": "3",
      "PortOfLoading": {
         "Code": "COCTG",
         "Name": "Cartagena, Colombia",
         "State": "",
         "UNLOCODE": "COCTG"
      },
      "PortOfDischarge": {
         "Code": "CNQIN",
         "Name": "QINGDAO, CHINA",
         "State": "",
         "UNLOCODE": "CNQIN"
      },
      "VoyageNo": "229N",
      "OriginTerminal": {
         "Code": "CTLPB"
      }
   },
   "CargoDetails": {
      "CargoDescription": "COLOMBIAN BANANAS",
      "quantityPallets": "18"
   }
}

```

```json
Response
{
"code": 201,
"Description": “successfull”,
 "MOId": 114,

  "Lines": [
    {
      "ArticleCode": "ORINOCO",
      "ArticleDesc": "ORINOCO BANANAS",
      "MOLineId": 186
    },
    {
      "ArticleCode": "LADYFINGER",
      "ArticleDesc": "Lady Finger Bananas",
      "MOLineId": 187
    }
  ]
}

```
## 9. Unit Tests

## 10. Annexes

### 10.1  Product Master

#### Request

| No  | Field                     | Mandatory | Size/Format          | Comments                                                                 |
|-----|---------------------------|-----------|----------------------|--------------------------------------------------------------------------|
| 1*  | Id                         | Yes       | 18/Varchar           | Product identification (key)                                              |
| 2*  | Client                     | Yes       | 50/Varchar           |                                                                          |
| 3*  | Description                | Yes       | 250/Varchar          | Name                                                                     |
| 4*  | Type                       | Yes       | 50/Varchar           | Product type                                                             |
| 5*  | Group                      | Yes       | 10/Varchar           | Some products are grouped together to facilitate filling.                |
| 6*  | BaseUnit                   | Yes       | 3/Varchar            | It is a short name used by the supplier (e.g., PLT = Pallet, LOT = Lote)  |
| 7*  | Weight                     | Yes       | Numeric / 2 Decimal  |                                                                          |
| 8*  | WeightUnit                 | Yes       | 5/Varchar            | Kg                                                                       |
| 9*  | QuantityBox               | Yes       | Integer              | Means how many boxes per pallet                                           |
| 10* | UrlPicture                 | Yes       | 250/Varchar          | Link allowing the visualisation of a product in the cloud                |
| 11* | Status                     | Yes       | 15/Varchar           | Active, Inactive                                                         |
| 12* | EquivalentProductId        | Yes       | 18/Varchar           | Identification of an equivalent product to be stuffing or loaded on a vessel |

#### Responses

| No  | Field             | Type     | Size/Format      | Remarks                                            |
|-----|-------------------|----------|------------------|----------------------------------------------------|
| 1   | Code              | String   | 10/Varchar       | 201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error |
| 2   | Description       | String   | 250/Nvarchar     | UM                                                 |


### 10.2 Planning Information

#### Request

| No  | Field               | Mandatory | Size/Format         | Comments                                                    |
|-----|---------------------|-----------|---------------------|-------------------------------------------------------------|
| 1*  | NitCustomer         | Yes       | 20/Varchar          | Shipper (Uniban)                                            |
| 2*  | PortOfDischarge     | Yes       | 5/Varchar           | Puerto de Destino (Codigo)                                  |
| 3*  | day                 | Yes       | 15/Varchar          | Day of the week (e.g., Lunes, Martes, Miercoles, etc.)      |
| 4*  | ProductID           | Yes       | 20/Varchar          | e.g., 1400.1401                                             |
| 5   | ProductReference    | No        | 100/Nvarchar        | e.g., FREF210, RFE34                                        |
| 6*  | Clasification       | Yes       | 50/Varchar          | Premium, Extra, Darien                                      |
| 7*  | Quantity            | Yes       | 5/Integer           | Cantidad de Pallets                                         |
| 8   | BookingOrBl         | No        | 50/Varchar          | Número de booking (aun no esta)?                            |
| 9   | VoyageMn            | No        | 50/Varchar          | Vessel visit trip (Número del buque-Viaje).                |
| 10  | LineOperator        | No        | 3/Varchar           | Naviera (MSC, Hapag, etc.)                                  |
| 11  | Commodity           | No        | 50/Varchar          | Descripción del producto                                    |
| 12  | Description         | No        | 50/Varchar          | Consideración de la carga                                   |
| 13* | TypeShipping        | Yes       | 20/Varchar          | Container, Pallet, Europallet                               |
| 14  | PlanningId          | No        | 20/Varchar          | Mandatory for update of forecast                           |

#### Responses

| No  | Field             | Type     | Size/Format      | Remarks                                            |
|-----|-------------------|----------|------------------|----------------------------------------------------|
| 1   | Code              | String   | 10/Varchar       | 201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error |
| 2   | Description       | String   | 250/Nvarchar     |                                                        |
| 3   | PlanningId        | String   | 20/Varchar       |                                                        |


### 10.3 DeliveryOrder (Booking)

#### Request
*/M = Mandatory

| No  | Field                                        | Mandatory                     | Size/Format                           | Comments                                                                                   |
|-----|----------------------------------------------|-------------------------------|---------------------------------------|--------------------------------------------------------------------------------------------|
| 1   | MOId                                         | Yes in case of Update         | Numeric                               | Master Order ID. Optional – only filled on update request                                   |
| 2*  | ClientCode                                   | Yes                           | 20/varchar                           | Client Code                                                                                 |
| 3   | MainReference                                | Yes                           | 35/varchar                           | Main reference identifier                                                                   |
| 4*  | BranchCode                                   | Yes                           | 3/varchar                            | Branch code (type of product)                                                                |
| 5   | OrderType                                    | No                            | 20/varchar                           | Order type. Static value “XDOC1” for cross-docking                                           |
| 6*  | PONo                                         | Yes                           | 50/varchar                           | Client Order number                                                                          |
| 7*  | PODate                                       | Yes                           | "YYYY-MM-DD"/ DateTime                | Client Order date                                                                            |
| 8   | Warehouse                                    | Yes                           | 20/varchar                           | Warehouse identifier (e.g., Banana Cross-dock warehouse AQA01)                             |
| 9   | RequestedStartDate                           | No                            | "YYYY-MM-DDTHH:MM / DateTime          | Estimated date of Cross docking (actual day)                                                |
| 10  | Remarks                                      | No                            | 500/nvarchar                         | Additional remarks                                                                           |
| 11* | References.RefName                           | Yes                           | 50/nvarchar                          | Name of the reference (Booking ID)                                                          |
| 12* | References.RefValue                          | Yes                           | 50/varchar                           | Value of the reference (Number Booking)                                                     |
| 13* | References.RefType                           | Yes                           | Fixed                                | Type of the reference (Text/Date)                                                           |
| 14  | Type (PartyInformation)                      | No                            | Fixed                                | Type of party information (Shipper, Consignee, Notify, Others, Collection, Delivery)       |
| 15  | Code (PartyInformation)                      | No                            | 20/varchar                           | Code of the party                                                                            |
| 16  | Name (PartyInformation)                      | No                            | 200/nvarchar                         | Name of the party                                                                            |
| 17  | Unformatted (PartyInformation)               | No                            | 200/nvarchar                         | Unformatted address details                                                                  |
| 18  | Formatted.Add1 (PartyInformation)            | No                            | 200/nvarchar                         | Address line 1                                                                               |
| 19  | Formatted.Add2 (PartyInformation)            | No                            | 200/nvarchar                         | Address line 2                                                                               |
| 20  | Formatted.Add3 (PartyInformation)            | No                            | 200/nvarchar                         | Address line 3                                                                               |
| 21  | Formatted.Add4 (PartyInformation)            | No                            | 200/nvarchar                         | Address line 4                                                                               |
| 22  | Formatted.City.Name (PartyInformation)       | No                            | 50/nvarchar                          | City name                                                                                  |
| 23  | Formatted.City.State (PartyInformation)      | No                            | 20/varchar                           | State code                                                                                 |
| 24  | Formatted.Country.Name (PartyInformation)    | No                            | 50/nvarchar                          | Country name                                                                                |
| 25  | Formatted.POBox (PartyInformation)           | No                            |                                       | PO Box                                                                                      |
| 26  | Type (Attachments)                           | No                            | Fixed length (e.g., "MNFST")          | Type of attachment (Refer Appendix A)                                                       |
| 27  | Name (Attachments)                           | No                            |                                       | Name of the attachment                                                                      |
| 28  | Content (Attachments)                        | No                            | Base64                               | Content (usually base64)                                                                     |
| 29  | MimeType (Attachments)                       | No                            | Fixed length (e.g., "application/pdf") | MIME type of the attachment                                                                  |
| 30  | MOLineId                                     | Yes in case of update         | Integer (e.g., "0")                   | Line ID in the master order. Optional – only filled on update requests                      |
| 31* | ArticleCode                                  | Yes                           | 20/varchar                           | Code of the article                                                                          |
| 32  | ArticleDesc                                  | String                        | 250/nvarchar                         | Description of the article                                                                   |
| 33* | Quantity                                     | Yes                           | Integer (e.g., "48")                  | Quantity of the order line in multipleOf: 0.01                                              |
| 36* | UOM                                          | Yes                           | Fixed length (e.g., "pallets")        | Unit of measure (Pallets)                                                                    |
| 37  | UnitType (Units)                             | Yes                           | 5/varchar                            | Type of the Unit (40HC, 20DC etc.)                                                           |
| 38  | Description (Units)                          | No                            | 150/nvarchar                         | Description of the unit                                                                      |
| 39  | ISOCode (Units)                              | Yes                           | 10/nvarchar                          | ISO code of the unit (mandatory if unit type is blank) (22R1, 42R1, 45R1 etc)               |
| 40* | ReeferTemp                                   | Yes                           | (10,2)/decimal                        | Temperature for reefer units                                                                 |
| 41  | Hazard                                       | No                            | boolean                              | true, false                                                                                 |
| 42  | UNNo                                         | No                            | 20/varchar                           | Mandatory if “Hazard” = true                                                                  |
| 43  | Class                                        | No                            | 20/varchar                           | Mandatory if “Hazard” = true                                                                  |
| 44  | IMDGPageNo                                   | No                            | 20/varchar                           | Mandatory if “Hazard” = true                                                                  |
| 45  | Carrier.Code (RoutingsDetails)               | Yes                           | 20/varchar                           | Carrier code                                                                                 |
| 46  | Carrier.Name (RoutingsDetails)               | Yes                           | 50/varchar                           | Carrier name                                                                                 |
| 47  | Vessel.Code (RoutingsDetails)                | No                            | 20/varchar                           | Vessel code                                                                                  |
| 48  | Vessel.Name (RoutingsDetails)                | No                            | 50/varchar                           | Vessel name                                                                                 |
| 49  | ETD                                          | No                            | "YYYY-MM-DDTHH:MM/ DateTime           | Estimated Time of Departure                                                                  |
| 50  | TransportMode                                | No                            | 1/varchar                            | Transport mode (1 = Road, 2 = Air, 3 = Sea, 4 = Rail)                                         |
| 51  | PortOfLoading.Code (RoutingsDetails)         | No                            | 5/varchar                            | Port of loading code                                                                          |
| 52  | PortOfLoading.Name (RoutingsDetails)         | No                            | 50/nvarchar                          | Port of loading name                                                                          |
| 53  | PortOfDischarge.Code (RoutingsDetails)       | No                            | 5/varchar                            | Port of discharge code                                                                        |
| 54  | PortOfDischarge.Name (RoutingsDetails)       | No                            | 50/nvarchar                          | Port of discharge name                                                                        |
| 55* | VoyageNo (RoutingsDetails)                   | Yes                           | 15/varchar                           | Voyage number                                                                                 |
| 56  | OriginTerminal.Code (RoutingsDetails)        | No                            | 5/varchar                            | Origin terminal code                                                                          |
| 57  | CargoDescription (CargoDetails)              | No                            | 2000/nvarchar                        | Description of cargo                                                                          |
| 58  | PreAdvised. GW. Value (CargoDetails)         | No                            | (18,5)/decimal                       | Pre-advised total gross weight                                                                |
| 59  | PreAdvised. NW. Value (CargoDetails)         | No                            | (18,5)/decimal                       | Pre-advised total net weight                                                                  |
| 60  | PreAdvised. Volume. Value (CargoDetails)     | No                            | (18,5)/decimal                       | Pre-advised total volume                                                                      |
| 61  | NumberOfPackages (CargoDetails)              | No                            | Integer                              | Pre-advised Total number of packages                                                          |
| 62* | Clasification                                | String                           | 50/varchar                           | Premium, Extra, Darien (Under MO Line --> References)                                        |
| 63* | Priority                                     | numeric                           | Integer (e.g., "48")                  | MultipleOf: 0.01 (Under MO Line --> References)                                               |
| 64* | TypeShipping                                 | String                           | 20/varchar                           | Container, Pallet, Europallet (Under MO Line --> References)                                 |


#### Responses

| No  | Field               | Type     | Size/Format      | Remarks                                            |
|-----|---------------------|----------|------------------|----------------------------------------------------|
| 1   | StuffingId          | Numeric  |                   | StuffingId is generated by Logiswift to group multiple master orders. To be saved in EDI log and MO header. |
| 2   | MOId                | Numeric  |                   | Logiswift identification number – used for updating a booking in the order |
| 3   | Lines. ArticleCode  | String   |                   |                                                        |
| 4   | Lines. ArticleDesc  | String   |                   |                                                        |
| 5   | Lines. MOLineId     | Numeric  |                   | Logiswift Master Order Line identification number – used for updating the order, if missing it will create a new line |
| 6   | Code                | String   | 10/Varchar       | 201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error |
| 7   | Description         | String   | 250/Nvarchar     |                                                        |


### 10.4 ReceiveAndDeliveryAdvice

#### Request
 M/* = Mandatory

| No   | Field                              | Type        | Size/Format      | Comments                                                                                                     |
|------|------------------------------------|-------------|------------------|--------------------------------------------------------------------------------------------------------------|
| 1*   | MOId*                              | String      | 20/varchar       | Master Order ID (request: Voyage Number)                                                                     |
| 2*   | ClientCode*                        | String      | 20/varchar       | Client Code (e.g., Uniban)                                                                                    |
| 3    | MainReference*                     | String      | 35/varchar       | Main reference identifier                                                                                     |
| 4*   | BranchCode*                        | String      | 3/varchar        | Branch code (Type of product)                                                                                 |
| 5*   | OrderType*                         | String      | 20/varchar       | Order type: Receive, Delivery                                                                                 |
| 6*   | PONo*                              | String      | 50/varchar       | Purchase Order number (e.g., Voyage Number)                                                                  |
| 7*   | PODate*                             | Date        | "YYYY-MM-DD"     | Purchase Order date                                                                                           |
| 8*   | VendorCode*                        | String      | 20/varchar       | Vendor code (e.g., Nit Truck Company)                                                                         |
| 9    | Warehouse*                         | String      | 20/varchar       | Warehouse identifier                                                                                          |
| 10   | RequestedStartDate*                | DateTime    | "YYYY-MM-DDTHH:MM" | Estimated Time of truck arrival                                                                               |
| 11   | Remarks                            | String      | 500/nvarchar     | Additional remarks                                                                                             |
| 12*  | References.RefName                 | String      | 50/nvarchar      | Name of the reference (e.g., MANIFEST ID)                                                                    |
| 13*  | References.RefValue                | String      | 50/varchar       | Value of the reference (e.g., Farm Manifest Number)                                                           |
| 14*  | References.RefType                 | String      | Fixed            | Type of the reference (Text)                                                                                  |
| 12.1*| References.RefName                 | String      | 50/nvarchar      | Name of the reference (e.g., FARM ID)                                                                         |
| 13.1*| References.RefValue                | String      | 50/varchar       | Value of the reference (e.g., Farm code)                                                                      |
| 14.1*| References.RefType                 | String      | Fixed            | Type of the reference (Text)                                                                                  |
| 12.2*| References.RefName                 | String      | 50/nvarchar      | Name of the reference (e.g., GROUP ID)                                                                        |
| 13.2*| References.RefValue                | String      | 50/varchar       | Value of the reference (e.g., Group code)                                                                     |
| 14.2*| References.RefType                 | String      | Fixed            | Type of the reference (Text)                                                                                  |
| 12.3*| References.RefName                 | String      | 50/nvarchar      | Name of the reference (e.g., Client Order Number)                                                             |
| 13.3*| References.RefValue                | String      | 50/varchar       | Value of the reference (e.g., Order Number)                                                                   |
| 14.3*| References.RefType                 | String      | Fixed            | Type of the reference (Text)                                                                                  |
| 15   | Type (PartyInformation)            | String      | Fixed            | Type of party information (Shipper, Consignee, Notify, Others, Collection, Delivery)                         |
| 16   | Code (PartyInformation)            | String      | 20/varchar       | Code of the party                                                                                             |
| 17   | Name (PartyInformation)            | String      | 200/nvarchar     | Name of the party                                                                                             |
| 18   | Unformatted (PartyInformation)     | String      | 200/nvarchar     | Unformatted address details                                                                                   |
| 19   | Formatted.Add1 (PartyInformation)  | String      | 200/nvarchar     | Address line 1                                                                                                 |
| 20   | Formatted.Add2 (PartyInformation)  | String      | 200/nvarchar     | Address line 2                                                                                                 |
| 21   | Formatted.Add3 (PartyInformation)  | String      | 200/nvarchar     | Address line 3                                                                                                 |
| 22   | Formatted.Add4 (PartyInformation)  | String      | 200/nvarchar     | Address line 4                                                                                                 |
| 23   | Formatted.City.Name (PartyInformation) | String   | 50/nvarchar      | City name                                                                                                      |
| 24   | Formatted.City.State (PartyInformation) | String  | 20/varchar       | State code                                                                                                     |
| 25   | Formatted.Country.Name (PartyInformation) | String | 50/nvarchar     | Country name                                                                                                   |
| 26   | Formatted.POBox (PartyInformation) | Numeric     |                  | PO Box                                                                                                         |
| 27   | Type (Attachments)                 | String      | Fixed            | Type of attachment (Refer to Appendix A)                                                                     |
| 28   | Name (Attachments)                 | String      |                  | Name of the attachment                                                                                         |
| 29   | Content (Attachments)              | String      | Base64           | Content (usually base64)                                                                                       |
| 30   | MimeType (Attachments)             | String      | Fixed            | MIME type of the attachment                                                                                   |
| 31   | MOLineId                           | Numeric     | Integer          | UMId                                                                                                          |
| 32*  | ArticleCode*                       | String      | 20/varchar       | Code of the article                                                                                           |
| 33   | ArticleDesc                        | String      | 250/nvarchar     | Description of the article                                                                                    |
| 34*  | ExtCaseNo*                         | String      | 50/varchar       | Extended case number (e.g., Pallet ID)                                                                        |
| 35*  | Quantity*                          | Numeric     | Integer          | Quantity of boxes in the pallet                                                                                |
| 36*  | UOM*                               | String      | Fixed            | Unit of measure (e.g., "BOX")                                                                                 |
| 37   | Carrier.Code (RoutingsDetails)     | String      | 20/varchar       | Carrier code                                                                                                  |
| 38   | Carrier.Name (RoutingsDetails)     | String      | 50/varchar       | Carrier name                                                                                                  |
| 39   | Vessel.Code (RoutingsDetails)      | String      | 20/varchar       | Vessel code                                                                                                   |
| 40   | Vessel.Name (RoutingsDetails)      | String      | 50/varchar       | Vessel name                                                                                                   |
| 41   | ETD                                | DateTime    | "YYYY-MM-DDTHH:MM" | Estimated Time of Departure                                                                                   |
| 42   | TransportMode                      | String      | 1/varchar        | Transport mode (1 = Road, 2 = Air, 3 = Sea, 4 = Rail)                                                        |
| 43   | PortOfLoading.Code (RoutingsDetails) | String    | 5/varchar        | Port of loading code                                                                                          |
| 44   | PortOfLoading.Name (RoutingsDetails) | String    | 50/nvarchar      | Port of loading name                                                                                          |
| 45   | PortOfDischarge.Code (RoutingsDetails) | String   | 5/varchar        | Port of discharge code                                                                                         |
| 46   | PortOfDischarge.Name (RoutingsDetails) | String   | 50/nvarchar      | Port of discharge name                                                                                        |
| 47   | VoyageNo (RoutingsDetails)         | String      | 15/varchar       | Voyage number                                                                                                 |
| 48   | OriginTerminal.Code (RoutingsDetails) | String    | 5/varchar        | Origin terminal code                                                                                         |
| 49   | CargoDescription (CargoDetails)    | String      | 2000/nvarchar     | Description of cargo                                                                                          |
| 50*  | QuantityPallets*                   | Numeric     | Integer          | Quantity in Pallets                                                                                           |
| 51*  | TypeShipping*                       | String      | 20/varchar       | Type of shipping (Container, Pallet, Europallet)                                                              |


#### Responses

| No  | Field                    | Type     | Size/Format      | Remarks                                                                                       |
|-----|--------------------------|----------|------------------|-----------------------------------------------------------------------------------------------|
| 1   | MOId                     | String   | 20/Varchar       | Id for the order and create the appointment                                                   |
| 2   | Lines. ArticleCode       | String   |                  | Article Code in the line of the order                                                          |
| 3   | Lines. ArticleDesc       | String   |                  | Description of the article in the order line                                                  |
| 4   | Lines. MOLineId          | Numeric  |                  | Logiswift Master Order Line identification number. UMId. Used for updating the order, if missing, it will create a new line |
| 5   | Code                     | String   | 10/Varchar       | 201 = Success / Created <br> 202 = Success / updated <br> 400 = Bad request <br> 500 = Error    |
| 6   | Description              | String   | 250/Nvarchar     | Description of the response, typically indicating the status or any errors                    |
