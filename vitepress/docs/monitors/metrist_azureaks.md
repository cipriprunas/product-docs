---
title: Azure Kubernetes Service
---

# {{ $frontmatter.title }}

## Monitor Specs

Name

: `azureaks`

Version

: 0.0.1-alpha

Description

: Monitor the observability of [Azure Kubernetes Service](https://learn.microsoft.com/azure/aks/).

: &nbsp;


<!--@include: /parts/_1.md-->


<!--@include: /parts/_2.md-->


<!--@include: /parts/_3.md-->


```sh
# (Required) A Service Principal Client Id.
METRIST_CLIENT_ID=""

# (Required) A Service Principal Secret.
METRIST_CLIENT_SECRET=""

# (Required) A subscription ID.
METRIST_SUBSCRIPTION_ID=""

# (Required) A tenant ID for which the Service Principal has authorization.
METRIST_TENANT_ID=""
```

<!--@include: /parts/tips_env-vars.md -->


<!--@include: /parts/_4.md-->


```json
{
  "monitor_logical_name": "azureaks",
  "interval_secs": 120,
  "run_groups": ["match-one", "or-more", "run-groups"],
  "run_spec": {
    "name": "azureaks",
    "run_type": "dll"
  },
  "steps": [{
    "check_logical_name": "CreateCluster",
    "description": "This step attemps to create a Kubernetes Cluster in a given Azure Region. Note: this monitor has cleanup routines that run when other steps are complete. If you run this monitor through several Orchestrators, you may choose which Orchestrator(s) shall perform the cleanup.",
    "required": true,
    "timeout_secs": 900
  }, {
    "check_logical_name": "CreateDeployment",
    "description": "This step attemps to deploy a container in a cluster created in a previous step.",
    "required": false,
    "timeout_secs": 900
  }, {
    "check_logical_name": "RemoveDeployment",
    "description": "This step attemps to remove the container deployed in a previous step.",
    "required": false,
    "timeout_secs": 900
  }]
}
```

Convert your monitor config to a JSON string, get your Metrist API token, and use the curl request below to register your monitor:

```sh
json= the json above converted to string

echo $json

api_token=YOUR_TOKEN

echo $api_token

curl -d $json -H "Content-Type: application/json" -H "Authorization: Bearer $api_token" 'https://app.metrist.io/api/v0/monitor-config'

```

<!--@include: /parts/tips_api.md-->


<!--@include: /parts/_5.md-->


<!--@include: /parts/result.md-->