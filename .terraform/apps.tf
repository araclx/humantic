resource "heroku_app" "develop" {
  name = "arclx-humantic-dev"
  region = "${var.heroku_region}"

  config_vars {
    APP_ENV = "develop"
  }

  buildpacks = "${var.heroku_app_buildpack}"
}

resource "heroku_app" "staging" {
  name = "arclx-humantic-stage"
  region = "${var.heroku_region}"

  config_vars {
    APP_ENV = "staging"
  }

  buildpacks = "${var.heroku_app_buildpack}"
}

resource "heroku_app" "production" {
  name = "arclx-humantic-prod"
  region = "${var.heroku_region}"

  config_vars {
    APP_ENV = "production"
  }

  buildpacks = "${var.heroku_app_buildpack}"
}
