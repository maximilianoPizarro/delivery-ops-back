pipeline {
  agent any
        
  stages {
        
    stage('Git') {
      steps {
        git branch: 'main', url: 'https://github.com/maximilianoPizarro/delivery-ops-back'
      }
    }
     
    stage('Build') {
      steps {
        sh 'mvnw clean install -DskipTests'
      }
    }      
        
  }
}
