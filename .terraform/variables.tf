variable "heroku_email" {}
variable "heroku_api_key" {}
variable "heroku_region" {}
variable "heroku_app_buildpack" {
  type = list
}

// Variables related to addons
variable "heroku_database" {
  description = "Variable that holds database url for heroku application."
}