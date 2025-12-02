
param location string = resourceGroup().location
param env string = 'prod'
param aksNodeCount int = 3

module kv './keyvault.bicep' = {
  name: 'kv'
  params: {
    location: location
    env: env
  }
}

module ai './appinsights.bicep' = {
  name: 'ai'
  params: {
    location: location
    env: env
  }
}

module db './cosmos.bicep' = {
  name: 'cosmos'
  params: {
    location: location
    env: env
  }
}

module aks './aks.bicep' = {
  name: 'aks'
  params: {
    location: location
    env: env
    nodeCount: aksNodeCount
  }
}

output keyVaultId string = kv.outputs.kvId
output appInsightsKey string = ai.outputs.instrumentationKey
output cosmosConn string = db.outputs.connectionString
output aksName string = aks.outputs.aksName
