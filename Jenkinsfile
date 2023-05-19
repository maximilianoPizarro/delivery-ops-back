pipeline {
  agent any
        
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/maximilianoPizarro/delivery-ops-back'
      }
    }
     
    stage('Build') {
      steps {
        sh 'mvn clean install -DskipTests'
      }
    }      
        
  }
}
