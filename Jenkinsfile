node {
  agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
  }
 stages {    
      stage("Clone the project") {
        git branch: 'main', url: 'https://github.com/maximilianoPizarro/delivery-ops-back'
      }

      stage("NPM INSTALL") {
        sh "npm install"
      }

      stage("MVN CLEAN INSTALL") {
        sh "./mvnw -Pprod clean package"
      }

      stage("Tests and Deployment") {
        stage("Runing unit tests") {
          sh "./mvnw clean test"
        }
        stage("Deployment") {
          sh 'nohup java -jar target/*.war &'
        }
      }
 }  
}
