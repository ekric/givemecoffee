FROM ubuntu:16.04

ENV NODEJS_VERSION 6

ENV UBUNTU_PACKAGES curl

ENV DEBIAN_FRONTEND noninteractive

# install packages and nodejs
RUN rm -rf /var/lib/apt/lists/* && \ 
    apt-get clean && \
    apt-get update && \
    apt-get install -y ${UBUNTU_PACKAGES} && \
    curl -sL https://deb.nodesource.com/setup_${NODEJS_VERSION}.x | bash - && \
    apt-get install -y nodejs
