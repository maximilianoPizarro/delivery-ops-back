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
        agent {
            node {
                label 'maven'
                customWorkspace '/tmp/workspace/delivery-ops-back'
            }
        }        
      steps {
        sh "mvn clean install -DskipTests"
      }
    }      
        
  }
}
