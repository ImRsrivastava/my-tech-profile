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


