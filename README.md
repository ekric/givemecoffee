# givemecoffee

## Setup
* Run `sudo apt install docker.io` to install docker and reboot your machine
* Run `sudo usermod -a -G docker bob` (replace bob with your username) to add yourself to the list of docker users
* Install Docker Compose from [here](https://docs.docker.com/compose/install/)
* Run `docker-compose up` from the givemecoffee folder

## frontend
* Was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files
* Open bash with `docker-compose exec frontend bash -c "cd /opt/app;bash"` from the givemecoffee folder
* Execute commands like `npm update` or `ng generate component component-name` or `ng generate directive|pipe|service|class|module` inside that bash
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build

## Notes
* Correct file ownership of new files, so they can by accessed outside of the container
