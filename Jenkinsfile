pipeline {
    agent {
        node {
            label 'nodo-jenkins'
            customWorkspace '/workspace'
        }
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
