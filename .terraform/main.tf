# Configure Heroku provider
provider "heroku" {
  version = "~> 2.0"
  email = "${env.heroku_email}"
  api_key = "${env.heroku_api_key}"
}
