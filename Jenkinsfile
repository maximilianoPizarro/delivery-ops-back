node {

      stage("Clone the project") {
        git branch: 'main', url: 'https://github.com/maximilianoPizarro/delivery-ops-back'
      }
     
      stage("MVN CLEAN INSTALL") {
        sh "./mvnw -Pprod clean package"
      }

      stage("Tests and Deployment") {
        stage("Runing unit tests") {
          sh "./mvnw clean test"
        }
        stage("Deployment") {
          sh 'nohup java -jar target/*.war &'
        }
      }

}
