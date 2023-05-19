pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/maximilianoPizarro/delivery-ops-back'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Build Maven') {
      steps {
        sh 'mvn clean install -DskipTests'
      }
    }
  }
}
