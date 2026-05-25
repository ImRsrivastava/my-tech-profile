Steps to work with GitHub Actions:

***TASK 1***
``` Create Dev & Staging Environment ```

Objective:
	→	Understand the GitHub Environments.

What we learn:
	→	What is environment.
	→	How workflow connect with environments.

Practical:
```
1.	Go to "Repo Settings → Environments"
2.	Create GitHub Environments:
	→	develop
	→	staging

```
---

***TASK 2***
``` Create Branches and Push code apart from the master/main branch which is default ```

Objective:
	→	Understand the Branch based deployment.

What we learn:
	→	Branch Strategy.
	→	Deployment Separation.
	→	Workflow Triggering.

Practical:
Create Branches:
```
git checkout -b develop
git push origin develop
```
```
git checkout -b staging
git push origin staging
```
---

***Result***
Now we have:
```
| Branch    	| Purpose         		|
| ------------- | --------------------- |
| develop   	| Dev deployment   		|
| staging   	| Staging deployment    |
```
---

***TASK 3***
```Create Your First Multi Environment Workflow```
Now we will create the actual workflow.
Create File:
```
.github/workflows/deploy.yml
```

Workflow
```
name: Multi Environment Deployment Workflow

on: 
    push:
        branches:
            - develop
            - staging
            # - production


jobs:
    # Job Name, Job Name can be anything but unique within the same file.
    deploy-develop:

        # Condition to execute this job-setup only when push happen on develop branch
        if: github.ref_name == 'develop'

        # OS Like [ubuntu-latest, windows-latest, macOS-latest]
        # runs-on: [ubuntu-latest, windows-latest, macOS-latest]
        runs-on: ubuntu-latest

        # Need to associate this job with develop environment
        environment: develop

        steps:
          - name: Print Branch Name
            run: |
                echo "Current Branch: ${{ github.ref_name }}"

          - name: Deploying to Develop
            run: |
                echo "Deploying application to Develop environment"

    deploy-staging:
        if: github.ref_name == 'staging'
        runs-on: ubuntu-latest
        environment: staging
        steps:
          - name: Print Branch Name
            run: |
                echo "Current Branch: ${{ github.ref_name }}"

          - name: Deploying To Staging
            run: |
                echo "Deploying application to Staging Branch"

```
Workflow will be trigger only when push happen on develop or staging branch.
What GitHub do internally, 
GitHub:
```
Receive a webhook event.
Check the Branch
Parse the workflow
```
---

***TASK 4***
```Test Develop Deployment```

Objective:
	→	GitHub Actions Observe the workflow behavior.

Practical:
	→	Now modify any file and push to Develop Branch.

Observe the GitHub Actions Tab:
	→	Observation 1
		→	Workflow Triggered

	→	Observation 2
		→	When the changes pushed to Develop branch, only develop branch triggered.

	→	Observation 3
		→	In this case, deploy-staging got skipped.

	→	Observation 4
		→	You will see the ```Current Branch: develop``` in Logs.

---

***TASK 5***
```Test Staging Deployment```

Objective:
	→	GitHub Actions Observe the workflow behavior.

Practical:
	→	Now modify any file and push to Staging Branch.

Observe the GitHub Actions Tab:
	→	Observation 1
		→	Workflow Triggered

	→	Observation 2
		→	When the changes pushed to Staging branch, only develop branch triggered.

	→	Observation 3
		→	In this case, deploy-develop got skipped.

	→	Observation 4
		→	You will see the ```Current Branch: staging``` in Logs.

***TASK 6***
```Add Real ECS Deployment```
Now the Actual deployment will be start from here.
Now from here we will build the docker of project based on either React js or FastAPI or Laravel application.
Now the `DEV Deployment Job Replace ` with `AWS Configuration & Deployment steps`.
```
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1

- name: Deploy to DEV ECS
  run: |
    aws ecs update-service \
      --cluster fastapi-dev-cluster \
      --service fastapi-dev-service \
      --force-new-deployment
```

What we learn:
	→	Environment isolation.
	→	ECS Deployment automation.
	→	AWS Auth with GitHub Actions environment secrets.

---

***TASK 7***
```Add Environment Specific Secrets```
Now we will create the Environment based Secrets instead of Repository based Secrets Credentials based on the environment specific.

Objective:
	→	Create the Develop & Staging isolate secrets.


***AWS Infrastructure***

I have created below mentioned Infrastructure for this:
```
	→	Used Region United State ( N. Virginia us-east-1 ).
	→ 	I have created own VPC named Tech-Profile-VPC with CIDR 10.0.0.0/16.

	→	4 Subnets for 2 different AZs:
	 	→	Public-Subnet-1a with CIDR 10.0.1.0/24.
	 	→	Public-Subnet-1b with CIDR 10.0.2.0/24.
	 	→	Private-Subnet-1a with CIDR 10.0.3.0/24.
	 	→	Private-Subnet-1b with CIDR 10.0.4.0/24.
	
	→	1-1 separate NAT Gateway:
		→	Private-NAT-1a
	 	→	Private-NAT-1b
	
	→	1 Internet Gateway and attached with own VPC.
	
	→	1 Route Table for Public Subnet:
		→	Associated both Public Subnets
		→	Added Route for 0.0.0.0/0 Source with created IGW.
	
	→	1-1 Route Table for Both Private Subnet:
		→	Associated each Route Table with each Private Subnets.
		→	Added Route for 0.0.0.0/0 Source with created NAT Gateway.
	
	→	Created 2 Security Groups:
		→	Tech-Profile-ALB-SG: For Application Load Balancer with HTTP (80) with Source 0.0.0.0/0 in Inbound Rule.
		→	Tech-Profile-ECS-SG: For ECS Container with Custom TCP (8000) with Source 'Tech-Profile-ALB-SG' in Inbound Rule.
	
	→	Create Application Load Balancer with own VPC and Listerner with HTTP 80.
	→	Created with Target Group with Target type 'IP' and Protocol 'HTTP 8000'.
	→	Created Task Definition for Develop Environment using 'Launch type: AWS Fargate'.
	→	Created ECS Cluster for Develop Environment.
	→	Inside the ECS Cluster, created the ECS services.
	→	ECS Service pull the docker image from ECR and run the Application inside the container.
	→	The react js application is running perfectly over the internet via ALB DNS.
```
Now, the application works correctly until the new Docker image is pushed to ECR.
```
	→	I have made some changes on some of the files.
	→	Pushed it to the GitHub repo on develop branch.
	→	GitHub Action parse the workflow and followed the steps, build and tag the docker image with github.sha and pushed to AWS ECR.
```
AWS ECR got new docker images but ECS Services still using the previous docker image. ECS didn't pulled the latest 'sha' image from the ECR.

Now we faced the real-world ECS deployment problems. This is the most common confusion that docker image pushed to ECR but ECS still using old one.

***ROOT CAUSE***
While pushing the docker image using 'docker push', ECS didn't use the new image automatically.

***Why ?***
Because ECS Service use 'Task Definition' and in Task Definition store a specific docker image reference.

***SOLUTION APPROACHES***
The best approach the update the ECS service. To update the ECS Service add the steps to yml file:
```
- name: Build Docker Image
  run: |
    docker build -t my-app:${{ github.sha }} .

- name: Tag Image
  run: |
    docker tag my-app:${{ github.sha }} \
    123456789.dkr.ecr.us-east-1.amazonaws.com/my-app:${{ github.sha }}

- name: Push Image
  run: |
    docker push \
    123456789.dkr.ecr.us-east-1.amazonaws.com/my-app:${{ github.sha }}

- name: Render ECS Task Definition
  id: task-def
  uses: aws-actions/amazon-ecs-render-task-definition@v1
  with:
    task-definition: task-definition.json
    container-name: my-container
    image: 123456789.dkr.ecr.us-east-1.amazonaws.com/my-app:${{ github.sha }}

- name: Deploy ECS Task Definition
  uses: aws-actions/amazon-ecs-deploy-task-definition@v2
  with:
    task-definition: ${{ steps.task-def.outputs.task-definition }}
    service: my-service
    cluster: my-cluster
    wait-for-service-stability: true
```





