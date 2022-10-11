import { Injectable } from "@angular/core";
import { AppsArray, ContactsArray } from "../models/apps.model";

@Injectable({
    providedIn: 'root'
})

export class AppsService {
    appsArray: AppsArray[] = [
      {
        icon: "../assets/img/icon/phone.png",
        name: "Téléphone",
        route: "phone/clavier",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/contacts.png",
        name: "Contacts",
        route: "contacts",
        nameShowed: true
      },
        // {
        //     icon: "../assets/img/icon/facetime.png",
        //     name: "FaceTime",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/calendar.png",
        //     name: "Calendrier",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/photos.png",
        //     name: "Photos",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/camera.png",
        //     name: "Caméra",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/mail.png",
        //     name: "Mail",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/clock.png",
        //     name: "Horloge",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/maps.png",
        //     name: "Plans",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/weather.png",
        //     name: "Météo",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/reminders.png",
        //     name: "Rappels",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/notes.png",
        //     name: "Notes",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/stocks.png",
        //     name: "Bourse",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/books.png",
        //     name: "Livres",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/app-store.png",
        //     name: "App Store",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/podcasts.png",
        //     name: "Podcasts",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/tv.png",
        //     name: "TV",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/health.png",
        //     name: "Santé",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/settings.png",
        //     name: "Réglages",
        //     nameShowed: true
        //   },
        //   {
        //     icon: "../assets/img/icon/wallet.png",
        //     name: "Cartes",
        //     nameShowed: true
        //   }
    ];

    contactsArray: ContactsArray[] = [
      // {
      //   name: "Alex",
      //   number: "0783526421"
      // },
      // {
      //   name: "Alex 2",
      //   number: "0783526422"
      // },
      // {
      //   name: "Alex 3",
      //   number: "0783526423"
      // },
      // {
      //   name: "Alex 4",
      //   number: "0783526424"
      // },
      // {
      //   name: "Alex 5",
      //   number: "0783526425"
      // }
    ]

    // a faire pour apps
    getAllContacts(): ContactsArray[] {
      return this.contactsArray;
    }
    addNewContact(firstName: string, lastName: string, number: string, note: string): void {
      // alert("Name : "+ firstName + " | LastName : " + lastName + " | Number : " + number + " | Note : " + note);
      const newRow = {
        name: firstName,
        number: number
      };
      this.contactsArray.push(newRow);
    }
}