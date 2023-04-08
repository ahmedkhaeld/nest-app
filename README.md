# nest-app


#### analyze the relationships:
* Can contract be related to more than one Organization? NO
* Can Organization be related to more than one Contract? Yes
* Can Contract exist without an Organization? No
* Can Organization exist without a Contract? Yes

##### Data Modeling using Document reference

```json

{
  "organizations": {
    "_id": ObjectId,
    "arabic_name": String,
    "english_name": String,
    "state": String,
    "active": Boolean,
  },
  "contracts": {
    "_id": ObjectId,
    "program_type": String,
    "organization_id": ObjectId (reference to organizations collection),
    "date": Date,
    "beneficiary": String,
    "description": String,
     "contacts": [
      {
        "name": String,
        "job_title": String,
        "phone": String,
        "email": String
      }
    ]
  },
  "programs":{
    "_id": ObjectId,
    "type": String,
    "description": String
  }
}

```

---
* End Points

| Method         | Route     | Description                       |
|--------------|-----------|------------|
| Get          | /organizations      | return all available orgs  |
| Post         | /organizations  | create a new org               |
| Put          | /organizations/id  | edit an existing org        |
| Delete       | /organizations/id  | delete an existing org      |
| Get          | /organizations/id  | return an indivdaul org     |
| Get          | /organizations/id/contracts  | return all contracts for an org    |
| Get          | /organizations/id/contracts/contradID  | return an indivdaul contract for an org     |
| Get          | /contracts         | return all contracts     |
| Get          | /contracts/id       | return an indivdaul contract     |
| Post         | /contracts        | create a new contract     |
| Put          | /contracts/id  | update an indivdaul contract     |
| Delete          | /contracts/id  | remove an indivdaul contract     |
| Get          | /programs     | return all programs              |
| Post         | /programs     | create a new program             |
| Put          | /programs/id  | update an indivdaul program     |
| Delete       | /programs/id  | remove an indivdaul program     |

