import { Component } from '@angular/core';

import { Resume } from './model/resume.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resume: Resume = new Resume();
  

  constructor() {
    this.resume = { 
      name: 'Vishal Srinivasan',
      designation: 'Applications Developer @ iNautix',
      profileUrl: 'assets/images/profile.jpg',
      contact: {
        phone: 8056146795,
        email: 'vishal240893@hotmail.com',
        facebook: 'https://www.fb.com/vishalsrinivasan',
        twitter: 'https://www.twitter.com/vishal_srini',
        googleplus: 'https://www.googleplus.com/+VishalSrinivasan',
        github: 'https://www.github.com/vishalsrini'
      },
      title: 'Love to Learn and Love to Code !!!',
      highlights: [
        {
          name: 'Daily Fuel Price',
          description: 'Fuel Price in India is changing daily from the announcement from GOVT. Of India. So created an app that tell the daily fuel cost.',
          createdBy: 'Ionic 2, Angular 2, Heroku Platform',
          src: 'assets/images/FuelPriceApp.jpg',
          link: 'https://play.google.com/store/apps/details?id=io.fuel.india&hl=en',
          actionButton: 'View in Playstore'
        },{
          name: 'VM Creations',
          description: 'Blog designed and developed to help people sharing their knowledge on Angular, Mobile terminologies etc.',
          createdBy: 'Wordpress',
          src: 'assets/images/vmcreations.png',
          link: 'http://technology.vishalsrini.com/',
          actionButton: 'View Website'
        },{
          name: 'VM Lock',
          description: 'A simple password manager application that wont connect with internet to store your password more securely in your own device',
          createdBy: 'Ionic, AngularJS',
          src: 'assets/images/vmlock.jpg',
          link: 'http://vishalsrini.com/vmlock/',
          actionButton: 'View Website'
        }
      ],
      education: [{
        qualification: 'Bachelor\'s Degree',
        department: 'Computer Science and Engineering',
        institution: 'Sri Sairam Engineering College',
        percentage: 87,
        year: '2011 - 2015',
        board: 'Anna University'
      },{
        qualification: 'High School',
        department: 'HSC',
        institution: 'St. Sebastian Matriculation Hr. Sec. School',
        percentage: 95,
        year: '2010 - 2011',
        board: 'State Board'
      },{
        qualification: 'Higher Secondary',
        department: 'SSLC',
        institution: 'St. Sebastian Matriculation Hr. Sec. School',
        percentage: 93,
        year: '2009 - 2010',
        board: 'Matriculation'
      }]
    }
  }
}
