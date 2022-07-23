# Adblock Detection
Code to detect ad-blocking Sortware with Javascript. The core JavaScript was originally published by the IAB. 
You can find the repository here: [IAB GitHub Repository](https://github.com/InteractiveAdvertisingBureau/AdBlockDetection).

As described in the IAB repository their logic does not run on your local maschine.
>The script will not work locally. The page should get served from the server via http

In this project we will serve the modified code via http from localhost:1234.

## How it works
The JavaScript (adblockDetector.js) creates a set of DIVs that are most likely to be hidden by browser-based ad blockers.

The DIV's are also called baits because they are given classes that resemble traditional adUnits naming. 
These HTML elements are invisible to the website user. The JavaScript (runDetecion.js) identifies if an adblocker manipulates 
the previously placed baits and fires the corresponding function. This causes the message "AdBlock is enabed" or "AdBlock is disabled" 
to be displayed in the HTML. 

### AdBlock detected
<img width="1464" alt="adBolckDetected" src="https://user-images.githubusercontent.com/61709180/180607220-024dc784-20cd-481d-8685-40b45a2778f5.png">

### AdBlock not deteted
<img width="1435" alt="noAdBlockDetected" src="https://user-images.githubusercontent.com/61709180/180607251-90a0d45c-59d0-4b77-918a-56ef2bf086dc.png">


You can of course change the detection functions and e.g. push key value pairs and event keys into the DataLayer. 
These key-value pairs can then be passed to Google Analytics via Google Tag Manager (based on the event key). 

### Declare the dataLayer if it does not exist on the page
```
window.dataLayer = window.dataLayer || [];
```

### Example for DataLayer Push with Adblock not detected

```
  function adBlockNotDetected() {
    dataLayer.push({ adBlock: false, event: "adBlockStatus" });
    ... add other logic here
  }
```


### Example for DataLayer Push with Adblock detected
```
 function adBlockDetected() {
    dataLayer.push({ adBlock: true, event: "adBlockStatus" });
    ... add other logic here
  }
```

### DataLayer Array fielled with key-values
<img width="496" alt="adBlockstatus" src="https://user-images.githubusercontent.com/61709180/180607062-184c832a-99fe-4fd5-822a-54213b6f5394.png">


This is a different way to implement Analytics as the method described by the IAB. 

However, it requires further configuration in the Google Tag Manager and Google Analytics itself for the implementation to work. 
Please contact a team that is specialized in Analytics. As soon as the AdBlock key-values are in the DataLayer, it can be read 
or identified without further ado. 

The skript should detect the behaviors associated with ad blocking in the following web browsers:

- Google Chrome
- Mozilla Firefox
- Internet Explorer (8+)
- Safari

## Requirements
- [node.js](https://nodejs.org/en/) - If you haven't installed it yet, click on the link ot download the actual version
- [parcel-bundler](https://parceljs.org/) - You don't need to download it yet just follow the installation process for the project 

## Usage

### fork or clone the repository 

fork it if you want to own the copy: 
<br/>

<img width="143" alt="forkRepo" src="https://user-images.githubusercontent.com/61709180/180608049-1b8d804c-7770-47b1-a5c1-3f6924f4fa58.png">

or
clone it if you just want to test it locally:

```
git@github.com:uwejettkant/ad-block-detection.git
```

### Install dependencies

```
npm install
```

### Run Dev Server (http://localhost:1234)
```
npm start
```

### install an AdBlocker Extention within your browser
Activate oder Deactivate the AdBlocker and click the "Reload Page" button.  

#### Have fun identifying AdBlockers.










