pipeline {
    agent {
        node {
            label 'nodejs'
            customWorkspace '/tmp/workspace/delivery-ops-back'
        }
    }
  stages {
        
    stage('Git') {
      steps {
        git branch: 'main', url: 'https://github.com/maximilianoPizarro/delivery-ops-back'
      }
    }
 
    stage('Install') {
      steps {
        sh "npm install"
      }
    }   
      
    stage('Build') {
      steps {
        sh "mvn clean install -DskipTests"
      }
    }      
        
  }
}
