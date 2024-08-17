## Ansible playbook for deploying my DEV stand

### Installed in system

1. Nginx
2. Docker
3. Small utilities: htop, iftop, curl, etc

### Installed in docker
1. PostgresSql
2. PgAdmin
3. MongoDB
4. Redis
5. Minio S3 Object Storage


### Run

```shell
git clone https://github.com/suntrackspb/home_dev_server.git
```
Configured files:

`docker/.env-example` and rename to `.env`

`/playbook/inventory/hosts.yml`

`/playbook/vars/main.yml`

```shell
ansible-playbook playbook/server_playbook.yaml
```
