---
title: AWS S3
---

# {{ $frontmatter.title }}

## Monitor Specs

Name

: `s3`

Version

: 0.0.1-alpha

Description

: Monitor the observability of [AWS Simple Storage Service (S3)](https://aws.amazon.com/s3/).

: &nbsp;


<!--@include: /parts/_1.md-->


<!--@include: /parts/_2.md-->


<!--@include: /parts/_3.md-->


```sh
# (Required) Your AWS Access Key Id.
METRIST_AWS_ACCESS_KEY_ID=""

# (Required) Your AWS Secret Access Key.
METRIST_AWS_SECRET_ACCESS_KEY=""
```

<!--@include: /parts/tips_env-vars.md -->


<!--@include: /parts/_4.md-->


```json
{
  "monitor_logical_name": "s3",
  "interval_secs": 120,
  "run_groups": ["match-one", "or-more", "run-groups"],
  "run_spec": {
    "name": "s3",
    "run_type": "dll"
  },
  "steps": [{
    "check_logical_name": "PutBucket",
    "description": "This step attemps to put a bucket, randomly named.",
    "required": true,
    "timeout_secs": 900
  }, {
    "check_logical_name": "PutObject",
    "description": "This step attemps to put an object in a bucket created in a previous step.",
    "required": false,
    "timeout_secs": 900
  }, {
    "check_logical_name": "GetObject",
    "description": "This step attemps to get an object placed in a previous step.",
    "required": false,
    "timeout_secs": 900
  }, {
    "check_logical_name": "DeleteObject",
    "description": "This step attemps to delete an object placed in a previous step.",
    "required": false,
    "timeout_secs": 900
  }, {
    "check_logical_name": "DeleteBucket",
    "description": "This step attemps to delete a bucket put in a previous step.",
    "required": true,
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