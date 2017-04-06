# diva-e - Face recognition
Usage of [Microsoft Face API](https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236) 

## Installation
Make sure you have node installed. You need a keys.js file in the `static/`folder. It must contain 

```
    var FACE_API_KEY = '<Your Azure Face API key here>'
    var FACE_LIST_ID = '<Your face list id>'
```

Install dependencies

`npm install`

Start the server:

`node index.js`

Open browser at `localhost:3000`


kudos to https://github.com/kjellivar/bespin-face-bar
