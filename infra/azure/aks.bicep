
param location string
param env string
param nodeCount int = 3

resource aks 'Microsoft.ContainerService/managedClusters@2023-10-01' = {
  name: 'tp-aks-${env}'
  location: location
  properties: {
    dnsPrefix: 'tp-${env}'
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        count: nodeCount
        vmSize: 'Standard_DS3_v2'
        osType: 'Linux'
        mode: 'System'
      }
    ]
    enableRBAC: true
  }
}
output aksName string = aks.name
