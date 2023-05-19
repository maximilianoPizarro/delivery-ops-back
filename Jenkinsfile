pipeline {
    agent {
        node {
            label 'maven'
            customWorkspace '/tmp/workspace/delivery-ops-back'
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
