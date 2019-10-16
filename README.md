# Node Static Server
Purpose: Minimalist node server to serve static web resources 

### Requirement
The setup assumes that you have Node.js installed. In case you are new to Node.js, download and install the **LTS** version from https://nodejs.org

### How to use

1. Clone the repository locally 
``` 
git clone https://github.com/nitish-mehta/node-static-server.git 
``` 

2. Install required dependencies 
```
npm install 
```

3. Copy your static resources to `webapp` folder under root
```
├── .gitignore
├── README.md
├── app.js
├── webapp                    // your static application here
├── package-lock.json  
└── package.json      
```

4. Start the server 
```
npm start
```

5. Open your preferred browser and go to http://localhost:3333

