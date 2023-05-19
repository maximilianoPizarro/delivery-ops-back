pipeline {
  agent { docker 'maven:3.9.0-eclipse-temurin-11' } 
        
  stages {
        
    stage('Git') {
      steps {
        git branch: 'main', url: 'https://github.com/maximilianoPizarro/delivery-ops-back'
      }
    }
     
    stage('Build') {
      steps {
        sh "mvn clean install -DskipTests"
      }
    }      
        
  }
}
