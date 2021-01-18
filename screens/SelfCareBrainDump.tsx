import React, {Component, useState} from 'react';
import {Button, Image, StyleSheet, TextInput, TouchableHighlight, Text, View, Alert} from 'react-native';
import AxiosLogin from '../Axios Functions/AxiosLogin';
import Modal from 'modal-react-native-web';
import '../assets/css/selfcare.css';
import Ellipseavatar from '../assets/images/Ellipseavatar.png';
import Vector from '../assets/images/Vector.png';
import Heart from '../assets/images/heart.png';
import CalStar from '../assets/images/bx_bx-calendar-star.png';


class SelfCareBrainDump extends Component {

  render() {return (
    <div className="SelfCare">
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" href="selfcare.css"/>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');</style>
        <style>@import url('https://fonts.googleapis.com/css2?family=Spartan&display=swap');</style>
    </head>
    <body>
        <div className="selfcareHeader">
            <img src={Vector} alt="flower" className="flower"/>  
        </div>
        <div className="selfcareCalendar">
            <div className="selfcareWeek">
                <h1 className="currentWeek">CURRENT WEEK</h1>
                <div className="selfDays">
                    <a href="#">SUN <br/>3</a>
                    <a href="#">MON <br/>4</a>
                    <a href="#">TUE <br/>5</a>
                    <a href="#">WED <br/>6</a>
                    <a href="#">THU <br/>7</a>
                    <a href="#" id="selfMain">FRI <br/>8</a>
                    <a href="#">SAT <br/>9</a>
                </div>
            </div>
            <div className="selfcareContainer">
                <ul>
                    <li>
                        <h2 className="selfHead">CREATED THIS WEEK</h2>
                    </li>
                    <li>
                        <div className="selfCircleBrain">
                            <h3 className="selfNumber">10</h3>
                            <p className="selfDesc">dumps</p>
                        </div>
                    </li>
                    <li>
                    <button className="selfTrack" onClick={()=> this.props.navigation.navigate('BrainDump')}>START DUMPING</button>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="selfButton">
            <ul>
                <li>
                    <button className="selfHabit" onClick={()=> this.props.navigation.navigate('SelfCare')}>
                        HABIT TRACKER
                    </button>
                    <button className="selfMood" onClick={()=> this.props.navigation.navigate('SelfCareMoodTracker')}>
                        MOOD TRACKER
                    </button>
                    <button className="selfBrainGold">
                        BRAIN DUMP
                    </button>
                </li>
            </ul>
        </div>
    </body>
    </html>
    </div>
  );
  }
}
export default SelfCareBrainDump;