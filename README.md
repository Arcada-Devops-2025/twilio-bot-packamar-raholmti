# twilio-bot
A twilio bot for random dinner ideas. You can choose between vegetarian options, meat options and seafood options. The options are three different arrays with five options in each one.

## Pipeline
The pipeline runs in Github Actions on commits/merges to main branch and the bot deploys to an EC2 instance.

## Infrastructure as Code
The project includes a Terraform file that defines an imaginary AWS S3 bucket with access permissions and a lifecycle policy.
File: `infra/main.tf`

#
Route: http://ec2-3-85-143-252.compute-1.amazonaws.com/voicecall
