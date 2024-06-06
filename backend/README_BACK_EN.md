
# Fleet Management Project - Backend

## Description

This project is the backend part of a fleet management system. It uses AWS CDK to create and manage a DynamoDB table, a Lambda function, and an API Gateway to expose the Lambda function.

## Technologies Used

- AWS CDK
- AWS Lambda
- AWS DynamoDB
- AWS API Gateway
- Node.js

## Setup and Deployment

1. **Install Dependencies**:
    ```sh
    npm install
    ```

2. **Configure your AWS Credentials**:
    ```sh
    aws configure
    ```

3. **Bootstrap the Environment**:
    ```sh
    cdk bootstrap
    ```

4. **Deploy the Stack**:
    ```sh
    cdk deploy
    ```

## Project Structure

- `bin/`: Contains the entry point for the CDK.
- `lib/`: Contains the CDK stack definition.
- `lambda/`: Contains the Lambda function.

## Author

Matheus Palma
