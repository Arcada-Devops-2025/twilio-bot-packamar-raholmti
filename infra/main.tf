#infra/main.tf

# Terraform-provider

provider "aws" {
    region = "us-east-1"
}

#Our S3-bucket 
resource "aws_s3_bucket" "twilio_bot"{
    bucket = "my-twilio-bucket"
    acl = "private"

    tags = {
        Name        = "Bucket"
        Environment = "production"
    }
}
# Lifecycle policy (remove old files)
resource "aws_s3_bucket_lifecycle_configuration" "lifecycle" {
  bucket = aws_s3_bucket.twilio_bot.id

  rule {
    id     = "delete-old-files"
    status = "Enabled"

    expiration {
      days = 30
    }
  }
}