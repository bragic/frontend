### 1. Certifications
[Azure Fundamentals  AZ-900](https://learn.microsoft.com/api/credentials/share/en-us/BradGravesen/15B9C3A3DEB10098?sharingId=2AC98E69046E9796)

### 2. HTML site
For the HTML I used a free sample site template from [StyleShout](https://styleshout.com/free-templates/ceevee/) named Ceevee.

### 3. CSS
The CSS was included with the site template from [StyleShout](https://styleshout.com/free-templates/ceevee/)

### 4. Static Website
To make the static website, I used an Azure Storage account store the static website files.

### 5. HTTPS
For HTTPS, I set up an Azure CDN profile which points to my static website. I added SSL security to the CDN endpoint for HTTPS access.

### 6. DNS
DNS is currently hosted in Google Domains; however, I plan to migrate to Azure DNS in the coming months.

### 7. Javascript to display visit counts for page
I added JavaScript to the static website to call the API endpoint of and Azure Function API and display the count value of a CosmosDB record.

### 8. Database to store web visit count
For the API database, I used CosmosDB, and created a database with a container to hold the data to store and retrieve visit counts.

### 9. Azure Functions API with Python
For the API, I used Azure Functions and added Python code to operate an HTTP Trigger that updates the CosmosDB container document on page load.
### 10. Source Control

To store my code, I used GitHub and separated the data into two repos, one for the frontend web assets, and one for backend API code.
### 11. CI/CD
Currently the frontend uses GitHub actions with a workflow to update the static website storage with changes to the web assets when changes are pushed to the repo.
