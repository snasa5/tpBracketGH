
from azure.ai.ml import MLClient
from azure.identity import DefaultAzureCredential
from azure.ai.ml.entities import CommandJob

ml_client = MLClient(DefaultAzureCredential(), subscription_id="<SUB>", resource_group_name="tp-rg", workspace_name="tp-ml")

job = CommandJob(
    code="./",
    command="python ai/training/train.py",
    environment="tp-ml-env:1",
    compute="cpu-cluster"
)

ml_client.jobs.create_or_update(job)
