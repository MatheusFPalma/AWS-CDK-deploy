
# Fleet Management Project with AWS CDK
![Title and General Description](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiftirsp3uzc3ww2z7s3k.png)

## General Description
This project demonstrates the creation of a fleet management system using AWS CDK (Cloud Development Kit). The system includes a backend to register and manage vehicles using AWS Lambda, DynamoDB, and API Gateway, and a React frontend to interact with the backend. It has an academic character, intended for developers who want to start studying AWS CDK.

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

**What is AWS CDK:** The AWS Cloud Development Kit (CDK) is an open-source software development framework to define cloud infrastructure as code (IaC) using familiar programming languages. The CDK allows you to model and provision cloud application resources using known programming languages such as TypeScript, Python, Java, and C#.

**Advantages of AWS CDK:**
- **Productivity:** Writing infrastructure as code in a programming language makes reuse, abstraction, and automation easier.
- **Power of Programming:** Use loops, conditions, and object-oriented abstractions to model your infrastructure.
- **Better Integration:** Enables tighter integration with application code and CI/CD pipelines.

## Environment Setup
To start with AWS CDK, you need to have Node.js and npm installed on your machine. Additionally, you will need to install AWS CDK CLI.

**Step-by-Step Installation:**
1. **Install Node.js and npm:** [Node.js Downloads](https://nodejs.org/en/download/)
2. **Install AWS CDK CLI:** Run the following command:
   ```sh
   npm install -g aws-cdk
   ```
3. **Configure AWS CLI:** Make sure your AWS CLI is configured with the necessary credentials:
   ```sh
   aws configure
   ```

## Project Structure
The project is organized as follows:

```plaintext
fleet-management/
├── README.md
├── backend/
│   ├── bin/
│   ├── lib/
│   └── lambda/
├── frontend/
│   └── src/
└── cdk.json
```

- `README.md`: This file.
- `backend/`: Contains the backend logic using AWS CDK.
  - `bin/`: Entry point for the CDK application.
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

**Description of the Stacks and AWS Resources Used:**
- Detailed explanation of the fleet management stack.
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

For more details, refer to our Contribution Guide.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
