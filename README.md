# galengoforth.com

This code is for the ReactJS site that used as my personal website. The site can be found at [galengoforth.com](https://galengoforth.com).

## Site Description
This site is intended to be both a place to showcase my work and a place to learn about me. It is still a work in progress...

## Site Sections
The site will be broken up into three main sections: About Me, Projects, and Resume. The About Me section is a brief description of who I am and what I do. The Projects section is a place for my personal programming projects such as rasperry pi programming. The Resume section will be an online version of my resume.

## Site Tech Stack
The site was built using ReactJS and runs on firebase hosting. It also uses the following technologies:
* [create-react-app](https://create-react-app.dev/) - bootstrap setup for react site. 
* [Bing Image Creator](https://www.bing.com/create) - Used to generate the site logo.
* [Vercel](https://vercel.com/) - Hosts NodeJS API that is called from site to get readings from the firestore database. The readings come from a raspberry pi that is running a python script to read the temperature, air pressure, and humidity from an Adafruit BME280 sensor.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. If this port is already in use, there will be a prompt with the option to use another port.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Deployment
This site is deployed using firebase hosting. To deploy the site, run the following command (you must be logged in the firebase cli):
```firebase deploy```.
