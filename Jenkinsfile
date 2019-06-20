pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:6-alpine'
    }

  }
  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }
    stage('Ejecutando Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}