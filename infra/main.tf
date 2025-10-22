#infra/main.tf

# Terraform-provider

provider "aws" {
    region = "us-east-1"
}

#Our S3-bucket 
resource "aws_s3_bucket" "twilio_bot"{
    bucket = "my-twilio-bucket"

    tags = {
        Name        = "Bucket"
        Environment = "production"
    }
}

# ACL (access control)
resource "aws_s3_bucket_acl" "twilio_bot_acl" {
  bucket = aws_s3_bucket.twilio_bot.id
  acl    = "private"
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