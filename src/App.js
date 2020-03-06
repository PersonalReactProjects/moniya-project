import React, { lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/analytics';
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer'
import FallbackSuspense from '../src/components/FallbackSuspense'
import Error404 from './pages/Error404'
import ErrorBoundary from './pages/ErrorBoundary'


const About = lazy(() => import("../src/pages/About"));
const Home = lazy(() => import("../src/pages/Home"));
const Product = lazy(() => import("../src/pages/Product"));
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("../src/pages/Contact"));


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: localStorage.getItem("dark"),
      switchedClass: localStorage.getItem("switched")
    }
  }

  enableDarkModeHandler = () => {
    // add "dark" class to the body
    document.body.classList.add("dark")
    document.querySelector("#switch").classList.add("switched")
    localStorage.setItem("dark", "dark")
    localStorage.setItem("switched", "switched")
    //document.getElementById('dark-mode-toggler').innerText = "Go Light Mode"
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", "#000000");
  }

  disableDarkModeHandler = () => {
    // 1. Remove the class from the body
    document.body.classList.remove("dark");
    document.querySelector("#switch").classList.remove("switched")
    // 2. Update dark in localStorage 
    localStorage.setItem("dark", "nothing");
    localStorage.setItem("switched", "nothing");
    //document.getElementById('dark-mode-toggler').innerText = "Go Dark Mode"
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", "#ffffff");
  }

  toggleDarkModeHandler = async () => {
    // get dark mode setting
    let darkModeStatus = localStorage.getItem("dark")
    await this.setState({ dark: darkModeStatus })
    
      if (this.state.dark !== "dark") {
        this.enableDarkModeHandler()
      }
      else {
        this.disableDarkModeHandler()
      }
  }

  toggleFullScreenHandler = () => {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }

  componentDidMount() {
    if (this.state.dark === "dark") {
      this.enableDarkModeHandler(); 
    }
    else {
      this.disableDarkModeHandler()
    }
    var firebaseConfig = {
      apiKey: "AIzaSyBhfpaRok5xNqDj7nK8ecR_ngndv04hPeo",
      authDomain: "moniya-site.firebaseapp.com",
      databaseURL: "https://moniya-site.firebaseio.com",
      projectId: "moniya-site",
      storageBucket: "moniya-site.appspot.com",
      messagingSenderId: "510208754230",
      appId: "1:510208754230:web:dcf96adb63050609260e97",
      measurementId: "G-YGQJ3S1N0T"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  
  render() {
    const { toggleDarkModeHandler, toggleFullScreenHandler } = this;
    return (
      <>
        <Navbar toggleDarkModeHandler={toggleDarkModeHandler} toggleFullScreenHandler={toggleFullScreenHandler}/>
        <ErrorBoundary>
          <Suspense fallback={<FallbackSuspense />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/team" component={Team}/>
              <Route exact path="/contact" component={Contact} />
              <Route component={Error404} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
        <Footer toggleDarkModeHandler={toggleDarkModeHandler}/>
      </>
    )
  }
}

export default App;
