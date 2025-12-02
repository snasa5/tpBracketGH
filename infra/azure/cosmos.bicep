
param location string
param env string

resource account 'Microsoft.DocumentDB/databaseAccounts@2023-06-15' = {
  name: 'tp-cosmos-${env}'
  location: location
  kind: 'GlobalDocumentDB'
  properties: {
    databaseAccountOfferType: 'Standard'
    locations: [
      { locationName: location, failoverPriority: 0, isZoneRedundant: true }
    ]
    consistencyPolicy: { defaultConsistencyLevel: 'Session' }
  }
}

resource db 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2023-06-15' = {
  name: '${account.name}/tp'
  properties: { resource: { id: 'tp' } }
}

resource users 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2023-06-15' = {
  name: '${account.name}/tp/users'
  properties: { resource: { id: 'users', partitionKey: { paths: ['/id'], kind: 'Hash' } } }
}

output connectionString string = 'AccountEndpoint=${account.properties.documentEndpoint};AccountKey=${listKeys(account.id, account.apiVersion).primaryMasterKey}'
