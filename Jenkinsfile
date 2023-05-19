pipeline{    
    agent any
    options { 
        skipDefaultCheckout()
        disableConcurrentBuilds()
    }
    environment {
        APP_TEMPLATE = "openshift/template.yml"
    }
    stages {

        stage ("Git Clone") {
            steps {
                gitClone(https://github.com/maximilianoPizarro/delivery-ops-back, branch: "main")
            }  
        }
        
        }
    }
}

