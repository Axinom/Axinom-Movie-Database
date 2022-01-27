# Axinom-Movie-Database
## NodeJS Test Exercise
Please consider this as an actual project developed by a team of developers. Please review this repository and we can discuss your finding in the interview. The requirements for this project are listed below. Please read them carefully before you start your review.

## Requirements

* The backend API must be developed as a REST API. 
* You can choose any persistent storage that fits the purpose. 
Data Structure
* At least the following properties must be implemented for a movie object. 
    * id (system generated, unique, required)
    * title(unique, required)
    * description 
    * thumbnail
    * releasedDate 
* REST API must offer CRUD operation to manipulate movie metadata. 
* Ingest
    * Ingest operation to insert/update/delete movie metadata in bulk mode from a single JSON file.
    * Ingest JSON file may contain 0 or more movie metadata objects in an array.
    * Response of Ingest operation must provide sufficient information to understand the result of the operation and to get all individual errors (if any) 
* Authentication and Authorization
    * Only authenticated users can access the API.
    * Login operation accepts a username & password and returns a token.
    * The application must come with some pre-provisioned users. 