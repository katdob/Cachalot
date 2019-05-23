## The Cachalot project

The [Cachalot](https://en.wikipedia.org/wiki/Sperm_whale), or common [cachalot](https://en.wikipedia.org/wiki/Cachalot_(disambiguation)), is a large toothed whale belonging to the infraorder [Cetacea](https://www.gbif.org/species/733).

A project designed to engage the user with the movements of migratory animals utilizing [GBIF | Global Biodiversity Information Facility](https://www.gbif.org/) and [Movebank](https://www.movebank.org/).

## Get the frontend up and running

1. Open a terminal, and run `git clone https://github.com/katdob/Cachalot.git`.

2. Type `cd Cachalot` and press Enter (or Return).

3. Run `npm install`.

4. Once these packages are installed, run `npm start`.

5. View `http://localhost:8080/` in your browser.

## Get the backend up and running

1. [Install Python3.7](https://www.python.org/downloads/)

2. Open a new terminal tab and run `python3.7 -m virtualenv venv`

3. Run `export FLASK_APP=cachalot.py` in the Cachalot directory

4. Then, run `source venv/bin/activate` to activate the virtual environment.

5. With `(venv)` to the left on your terminal line, run `pip install --upgrade -r requirements.txt`. (And maybe grab a coffee, this could take a while!)

6. `cd backend` go enter the backend directory (the Flask project)

7. Run `flask run`

8. Your backend will be available for api calls at `http://localhost:5000/`

## Get some data!

Once you have the project up and running in your browser navigate to `http://localhost:8080/` and create a new user. You can do this by selecting the `Join Us` button in the top right corner.

After creating a user you will be redirected to the form at `http://localhost:8080/migrations/`. The form suggests that the user enter the name of an animal species (a commonly used name, not a scientific name). Think something like "albatross" or "butterfly" or "tiger".

Once a name is entered the user may be prompted to select the more complete common animal name from a list provided by [GBIF](https://www.gbif.org/), along with a scientific name, also provided by [GBIF](https://www.gbif.org/).

The user is also prompted to enter a study id and individual id referencing a publicly available [Movebank](https://www.movebank.org/) study. You can select to view [5 or 10 gps](https://www.movebank.org/movebank/service/public/json?study_id=2911040&individual_local_identifiers[]=4262-84830876&individual_local_identifiers[]=1163-1163&individual_local_identifiers[]=2131-2131&max_events_per_individual=10&timestamp_start=1213358400000&timestamp_end=1213617600000&sensor_type=gps&attributes=timestamp,location_long,location_lat,ground_speed,heading) locations associated with each individual, and all individuals for the requested study will be available.

If you'd like to test the project without signing up for [Movebank](https://www.movebank.org/), you can try these study parameters:

#### [Galapagos albatross](https://galapagosconservation.org.uk/wildlife/waved-albatross/)
* Animal Name: albatross
* Common Name: waved albatross
* Scientific Name: phoebastria irrorata
* Study id: 2911040
* Individual id: 4261-2228
* Number of locations: 5 or 10
* Sensor type: gps

#### [Swainson's hawk](https://en.wikipedia.org/wiki/Swainson's_hawk) (*These hawks go to space!*)
* Animal Name: hawk
* Common Name: swainson's hawk
* Scientific Name: buteo swainsoni
* Study id: 164144882
* Individual id: 105921
* Number of locations: 5 or 10
* Sensor type: gps

#### [Lions](https://en.wikipedia.org/wiki/Lion)
* Animal name: panthera
* Common name: *empty*
* Scientific Name: panthera leo
* Study id: 220229
* Individual id: Romeo
* Number of locations: 5 or 10
* Sensor type: gps

Strangely, [GBIF](https://www.gbif.org/) does not return an entry for lion. The *empty* that you see in the Common name params above represents an empty input.

## General info

This project was built using [Python](https://www.python.org/), [Flask](http://flask.pocoo.org/), [React](https://reactjs.org/), and [Material-UI](https://material-ui.com/). You can direct all questions and comments (and constructive criticism!) to [Kat Dobbins](https://katdobbins.com/).

Keep in mind that only [publicly available studies](https://www.movebank.org/movebank/service/public/json?entity_type=study&sensor_type=gps) are accessible via [Movebank](https://www.movebank.org/)'s api. The data accessible directly from [Movebank](https://www.movebank.org/) is submitted by researchers and may not be complete.

### Exciting news!

I'm a big fan of [Movebank](https://www.movebank.org/), and recently sent them an email requesting access to a taxon endpoint, should this endpoint exist. When they got back to me (less than 24 hours later) they said a brand new taxon endpoint has been added to [Movebank](https://www.movebank.org/). Unfortunately, this taxa endpoint is not currently available for JSON requests (as of 7/15/2019). When it is, I will make the appropriate updates.

For now, I have added a MovebankStudy table to the database that contains specific identifiers: *study_id*, *species_common_name*, and *species_scientific_name* (7/16/2019). This will allow a user to find data via The Cachalot Project without signing up for [Movebank](https://www.movebank.org/). You can expect for these updates soon.
