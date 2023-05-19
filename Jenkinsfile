pipeline {
  agent any
  tools {
      maven 'apache-maven-3.0.1' 
  }
        
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
