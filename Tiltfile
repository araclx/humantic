# -*- mode: Python -*
docker_build('humwrk/humwrk:dev', '.')
k8s_yaml('.kubernetes/deploy.yaml')
k8s_resource('humwrk', port_forwards=3000)
