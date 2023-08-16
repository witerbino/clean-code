pipeline {
	agent any

	stages {
		stage('Checkout') {
			steps {
				echo 'Baixando projeto'
			}
		}
		
		stage('Install Dependencies') {
			steps {
				sh 'npm install'
			}
		}
	}
}
