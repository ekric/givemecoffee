# givemecoffee-frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

# Development workflow with docker

## Setup
* Run `sudo apt install docker.io` to install docker and reboot your machine
* Run `sudo usermod -a -G docker bob` (replace bob with your username) to add yourself to the list of docker users
* Install Docker Compose from [here](https://docs.docker.com/compose/install/)

## Usage
* Run `docker-compose up` from the givemecoffee-frontend folder
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you chose docker to run the project it is also advisable to execute Angular CLI commands inside a container based on the givemecoffee-frontend image created by docker-compose:

* Open bash with `docker-compose exec givemecoffee-frontend bash -c "cd /opt/app;bash"`
* Execute commands like `npm update` or `ng generate component component-name` or `ng generate directive|pipe|service|class|module` inside that bash
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* Correct file ownership of new files, so they can by accessed outside of the container
