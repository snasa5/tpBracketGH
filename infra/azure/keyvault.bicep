
param location string
param env string

resource kv 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: 'tp-kv-${env}'
  location: location
  properties: {
    tenantId: subscription().tenantId
    sku: { name: 'Standard', family: 'A' }
    accessPolicies: []
    enablePurgeProtection: true
    enableSoftDelete: true
  }
}
output kvId string = kv.id
