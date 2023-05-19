pipeline{    
    agent any
    options { 
        skipDefaultCheckout()
        disableConcurrentBuilds()
    }
    stages {

        stage ("Git Clone") {
            steps {
                gitClone(https://github.com/maximilianoPizarro/delivery-ops-back, branch: "main")
            }  
        }
    }
}

