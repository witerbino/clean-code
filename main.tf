variable "db_instance" {
  type    = string
  default = "1234@5678"
}

resource "aws_s3_bucket" "s3_bucket" {
  bucket = "aws_s3_bucket"
}

resource "aws_instance" "mypc" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"
  
  tags = {
    Name = "ExampleAppServerInstance"
  }
}

resource "aws_db_instance" "postgres" {
  allocated_storage    = 10
  db_name              = "mydb"
  engine               = "postgres"
  engine_version       = "5.7"
  instance_class       = "db.t3.micro"
  username             = "foo"
  password             = var.db_instance
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
}