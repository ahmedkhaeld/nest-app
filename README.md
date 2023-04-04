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
    "active_status": Boolean
  },
  "contracts": {
    "_id": ObjectId,
    "program_type": [String],
    "organization_id": ObjectId (reference to organizations collection),
    "date": Date,
    "beneficiary": String,
    "description": String,
     "contact_info": [
      {
        "name": String,
        "phone": String,
        "email": String
      }
    ]
  }
}

```

---
* End Points

| Method         | Route     | Description   |
|--------------|-----------|------------|
| Get          | /organizations      | return all available orgs        |
| Post      | /organizations  | create a new org       |
| Put      | /organizations/id  | edit an existing org      |
| Delete      | /organizations/id  | delete an existing org      |
| Get      | /organizations/id  | return an indivdaul org       |

