# Fleet Management Project with AWS CDK
![Title and General Description](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiftirsp3uzc3ww2z7s3k.png)

## General Description
This project demonstrates the creation of a fleet management system using AWS CDK (Cloud Development Kit). The system includes a backend to register and manage vehicles using AWS Lambda, DynamoDB, and API Gateway, and a frontend in React to interact with the backend. It has an academic character, intended for developers who want to start studying AWS CDK.

## Index
- [Title and General Description](#title-and-general-description)
- [Index](#index)
- [Basic Concepts of AWS CDK](#basic-concepts-of-aws-cdk)
- [Environment Setup](#environment-setup)
- [Project Structure](#project-structure)
- [Backend Details](#backend-details)
- [Frontend Details](#frontend-details)
- [Sources and References](#sources-and-references)
- [Authors and Contributions](#authors-and-contributions)
- [License](#license)

## Basic Concepts of AWS CDK
![Basic Concepts of AWS CDK](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2020/05/14/Picture1-4.png)

**What is AWS CDK:**
The AWS Cloud Development Kit (CDK) is an open-source software development framework to define cloud infrastructure as code (IaC) using familiar programming languages. The CDK allows you to model and provision cloud application resources using known programming languages such as TypeScript, Python, Java, and C#.

**Advantages of AWS CDK:**
- **Productivity:** Writing infrastructure as code in a programming language makes reuse, abstraction, and automation easier.
- **Power of Programming:** Use loops, conditions, and object-oriented abstractions to model your infrastructure.
- **Better Integration:** Allows easy integration with other development tools and AWS services.

**Key Tools and Concepts:**
- **Stacks:** Collections of AWS resources that can be provisioned and managed as a single unit.
- **Constructs:** Building blocks of AWS CDK. Constructs represent a piece of your infrastructure, such as an S3 bucket or a Lambda function.
- **Assets:** External resources, such as Lambda function code or Docker containers, that are integrated into your CDK app.

**AWS Services:**
![AWS Services](https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2020/06/17/Architecture-of-the-application.png)
- **AWS Lambda:**
  - **What it is:** AWS Lambda is a service that lets you run code without provisioning or managing servers. You only pay for the compute time you consume.
  - **Advantages:** Automatic scaling, cost-effectiveness, easy integration with other AWS services.
  - **Example of Use in the Project:**
    ```typescript
    import * as lambda from 'aws-cdk-lib/aws-lambda';

    const registerVehicleLambda = new lambda.Function(this, 'RegisterVehicleHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'register.handler',
      code: lambda.Code.fromAsset('lambda')
    });
    ```

- **Amazon DynamoDB:**
  - **What it is:** Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.
  - **Advantages:** Automatic management, low latency, high availability.
  - **Example of Use in the Project:**
    ```typescript
    import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

    const fleetTable = new dynamodb.Table(this, 'FleetTable', {
      partitionKey: { name: 'vehicleId', type: dynamodb.AttributeType.STRING },
      tableName: `FleetTable-${this.stackName}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    ```

- **Amazon API Gateway:**
  - **What it is:** Amazon API Gateway is a fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs at any scale.
  - **Advantages:** Scalability, integration with AWS services, support for multiple protocols.
  - **Example of Use in the Project:**
    ```typescript
    import * as apigateway from 'aws-cdk-lib/aws-apigateway';

    const api = new apigateway.RestApi(this, 'FleetServiceApi', {
      restApiName: 'Fleet Service',
      description: 'This service manages fleet information.'
    });

    const registerVehicleIntegration = new apigateway.LambdaIntegration(registerVehicleLambda);
    const vehicle = api.root.addResource('vehicle');
    vehicle.addMethod('POST', registerVehicleIntegration);
    ```

## Environment Setup
![Environment Setup](https://miro.medium.com/v2/resize:fit:720/format:webp/1*47OEvb30iyFc_qkYYrlcEw.png)

**Prerequisites:**
- Node.js (version 18.x or higher)
- AWS CLI configured
- AWS CDK installed globally

**Node.js Version:**
This project uses Node.js version 18.x. It is important to verify the compatibility between Node.js versions and AWS CDK, as well as other AWS services, in the official documentation of [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) and [Node.js](https://nodejs.org/).

**AWS CLI Configuration:**
The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download, you can control multiple AWS services from the command line and automate them through scripts.

**Steps to Configure AWS CLI:**

1. **Install AWS CLI**:
   - You can download and install the AWS CLI from this [link](https://aws.amazon.com/cli/).
   - For Unix-based systems, you can install using `pip`:
     ```sh
     pip install awscli
     ```

2. **Configure AWS CLI**:
   - After installation, configure your AWS credentials using the command:
     ```sh
     aws configure
     ```
   - You will be prompted to enter your AWS credentials:
     - **AWS Access Key ID**: Your access key.
     - **AWS Secret Access Key**: Your secret key.
     - **Default region name**: The default region you want to operate in (e.g., `us-east-1`).
     - **Default output format**: The default output format (`json` is recommended).

3. **Verify Configuration**:
   - You can verify if the configuration was successful by listing your S3 buckets:
     ```sh
     aws s3 ls
     ```

**Install AWS CDK:**
The AWS Cloud Development Kit (CDK) is a framework for defining cloud infrastructure resources using familiar programming languages.

1. **Install AWS CDK**:
   - To install AWS CDK globally, use npm:
     ```sh
     npm install -g aws-cdk
     ```

2. **Verify CDK Installation**:
   - Verify that CDK was installed correctly:
     ```sh
     cdk --version
     ```

**Bootstrap the Environment:**
The `cdk bootstrap` command prepares your AWS account to be used with CDK by creating necessary resources for deployment (e.g., S3 bucket for storing assets).

   - To prepare the bootstrap, use npm:
     ```sh
     cdk bootstrap
     ```

**Important Note**:
To avoid permission issues, it is recommended to run AWS CLI and CDK commands in the CMD as an administrator and not through Visual Studio. To open CMD as an administrator, follow these steps:
- Search for "CMD" or "Command Prompt" in the Start menu.
- Right-click on "Command Prompt" and select "Run as administrator".
- Use the command ```cd <Path to the folder>``` to navigate to your project directory.

### How to Obtain AWS Credentials
![Obtain AWS Credentials](https://wallydata.blog/wp-content/uploads/2023/05/image-4.png?w=1024)
To configure AWS CLI, you need access credentials for your AWS account. Here are the steps to obtain these credentials:

1. **Access the AWS Console:**
   - Go to the [AWS Management Console](https://aws.amazon.com/console/).

2. **Navigate to IAM (Identity and Access Management):**
   - In the AWS console, search for IAM and select it.

3. **Create a New User:**
   - In the IAM dashboard, go to "Users" and click on "Add user".
   - Enter a username and select the type of access (programmatic access).

4. **Assign Permissions:**
   - Select "Attach existing policies directly" and choose "AdministratorAccess" (or create a custom policy with the necessary permissions).

5. **Review and Create the User:**
   - Review the settings and click on "Create user".

6. **Download the Credentials:**
   - After creating the user, you will see the access key and secret key. Download the CSV file with these credentials or copy them to a secure location.

### Project Structure

**Description of Directories and Files:**
- `backend/`: Contains the backend logic using AWS CDK.
  - `bin/`: Entry point for CDK.
  - `lib/`: Stack definitions.
  - `lambda/`: Lambda functions.
- `frontend/`: Contains the frontend logic using React.
  - `src/`: React components and configuration files.

### Backend Details

**Technologies Used:**
- AWS CDK
- AWS Lambda
- AWS DynamoDB
- AWS API Gateway
- Node.js

**Code Structure:**
- Explanation of `bin/`, `lib/`, and `lambda/`.

**Description of Stacks and AWS Resources Used:**
- Detailed description of the fleet management stack.
- Resources: DynamoDB Table, Lambda Function, API Gateway.

**Deployment Instructions:**
```sh
npm install
cdk bootstrap
cdk deploy
```	

### Frontend Details

**Technologies Used:**
- React
- Axios

**Code Structure:**
- Explanation of the main components.

**Setup and Run Instructions:**
```sh
npm install
npm start
```

### Sources and References

**Official AWS CDK Documentation:**
- [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [API Reference](https://docs.aws.amazon.com/cdk/api/latest/)
- [AWS CLI Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)

**Useful Tutorials and Articles:**
- [Examples on GitHub](https://github.com/aws-samples/aws-cdk-examples)
- [AWS Blog](https://aws.amazon.com/blogs/developer/category/developer-tools/aws-cdk/)

### Authors and Contributions

**Author:**
[Matheus Palma](https://www.linkedin.com/in/matheusfpalma/)

### How to Contribute
1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/feature-name`).
5. Open a Pull Request.


### License

This project is licensed under the MIT License - see the LICENSE file for details.
