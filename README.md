# NGINX

## This nginx server will create a load balancing with Round Robin algorithm.


# CREATE DOCKER NETWORK

- This command will create a common network for containers communication:

## DOCKER COMMAND

### docker network create loadbalance_net



# EXPRESS SERVER

- The express server is a simple one just for replicate in docker so that we can test the nginx balancer.

## COMMANDS

### docker build -t server .

### docker run -p 1010:5050 --name server_1 -d --network loadbalance_net server

### docker run -p 2020:5050 --name server_2 -d --network loadbalance_net server

### docker run -p 3030:5050 --name server_3 -d --network loadbalance_net server

### docker run -p 4040:5050 --name server_4 -d --network loadbalance_net server




# NGINX SERVER

- The nginx server is defined as load balancing, and listening to port 80 that is the common port used for http requests, without SSL (Secure Socket Layer).

## COMMANDS

### docker build -t nginx_load_balancer .
### docker run -p 3000:80 --name nginx_server -d --network loadbalance_net nginx_load_balancer
