pipeline {
    agent any 
    environment{
        nexus_repo="43.204.38.51:8800"
    }
    stages {
        stage("Pull Source Code From SCM"){
            steps{
                git url: "https://github.com/lnxdevsecops/my-web-app.git",
                    branch: "master",
                    credentialsId: "scm cred"
            }
        }
        stage("OWASP Dependency Check"){
            steps{
                dependencyCheck additionalArguments: '--scan ./ ' , odcInstallation: 'DP-Check'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        stage("Build Docker Image"){
            steps{
                sh 'docker build -t my-web-app:${BUILD_NUMBER} .'
                sh "docker build -t ${nexus_repo}/my-web-app:${BUILD_NUMBER} ."
            }
        }
         stage("TRIVY Scan Docker Image"){
            steps{
                sh "trivy image 43.204.38.51:8800/my-web-app:${BUILD_NUMBER} > trivyimage.txt" 
            }
        }
        
        stage("Push Docker image into Nexus Repo") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker private repo cred', passwordVariable: 'REPO_PASS', usernameVariable: 'REPO_USER')]) {
                  sh "echo $REPO_PASS | docker login -u $REPO_USER --password-stdin ${nexus_repo}"
                  sh "docker push 43.204.38.51:8800/my-web-app:${BUILD_NUMBER}"
                }
            }
        }
        
        stage("Scan Docker Image Before Deploy"){
            steps{
                sh "trivy image 43.204.38.51:8800/my-web-app:${BUILD_NUMBER} > pull_image.txt" 
            }
        }
        
        // stage("Deploy App Into K8S"){
        //      steps{
        //           sh 'kubectl apply -f deployment.yml'
        //           sh 'kubectl apply -f service.yml'
        //     }
        // }
        stage("Deploy App Into K8S") {
            when {
                expression { currentBuild.resultIsBetterOrEqualTo('SUCCESS') }
            }
            steps {
                deployToKubernetes()
            }
        }

    }
}

def deployToKubernetes() {
    sh 'cat deployment.yml | envsubst | kubectl apply -f -'
    sh 'kubectl apply -f service.yml'
    sh 'kubectl get pods'
}
