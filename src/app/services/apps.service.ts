import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AppsArray, ContactsArray, RecentCallsArray } from "../models/apps.model";

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
      {
        icon: "../assets/img/icon/message.png",
        name: "Messages",
        route: "messages",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/photos.png",
        name: "Photos",
        route: "gallery",
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
        //   
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
      {
        firstName: "Alex",
        lastName: "Deckel",
        number: "0645784512",
        note: "Les notes sont désormais fonctionel ! Mêmes les notes trèèèèèèèèèèèèèèèèèèèèsssss longues sont pris en charge.",
        favoris: true
      },
      {
        firstName: "Larry",
        lastName: "",
        number: "0645784513",
        note: "Larry's",
        favoris: false
      },
      {
        firstName: "Flavien",
        lastName: "",
        number: "03",
        note: "",
        favoris: true
      }
    ]

    recentCallsArray: RecentCallsArray[] = [
      {
        number: "03",
        date: new Date,
        missed: false,
        type: 'call',
        source: false,
      },
      {
        number: "03",
        date: new Date,
        missed: true,
        type: 'call',
        source: false,
      },
      {
        number: "0645742512",
        date: new Date,
        missed: false,
        type: 'call',
        source: false,
      },
      {
        number: "0645442512",
        date: new Date,
        missed: true,
        type: 'call',
        source: false,
      },
      {
        number: "0645784512",
        date: new Date,
        missed: true,
        type: 'call',
        source: false,
      }
    ]

    // a faire pour apps
    getAllContacts(): ContactsArray[] {
      return this.contactsArray;
    }

    getAllFavs(): any {
      const search = this.contactsArray.filter(search => search.favoris)
      if (!search) {
        return false;
      } else {
        return search;
      }
    }

    getApps(): AppsArray[] {
      return this.appsArray;
    }

    getRecentCalls(): RecentCallsArray[] {
      return this.recentCallsArray
    }

    addNewContact(firstName: string, lastName: string, number: string, note: string): void {
      // alert("Name : "+ firstName + " | LastName : " + lastName + " | Number : " + number + " | Note : " + note);
      const newRow = {
        firstName: firstName,
        lastName: lastName,
        number: number,
        note: note,
        favoris: false
      };
      this.contactsArray.push(newRow);
    }
    searchContactByNumber(number: string): any {
      const search = this.contactsArray.find(search => search.number === number);
      if (!search) {
        // throw new Error('Number not found!');
        return false;
      } else {
        return search;
      }
    }
    changeContactFavs(number: string): void {
      const search = this.searchContactByNumber(number)
      search.favoris = !search.favoris
    }

    private dynamicNotificationSource = new Subject<string>;
    private dynamicNotificationNumber = new Subject<string>;
    private dynamicNotificationString = new Subject<string>;
    private dynamicNotificationUrlImg = new Subject<string>;
    dynamicNotification$ = this.dynamicNotificationSource.asObservable();
    dynamicNotificationNum$ = this.dynamicNotificationNumber.asObservable();
    dynamicNotificationStr$ = this.dynamicNotificationString.asObservable();
    dynamicNotificationUImg$ = this.dynamicNotificationUrlImg.asObservable();
    sendDynamicNotification(type: 'appel' | 'message', number: string, text: string, urlImg: string) {
      this.dynamicNotificationNumber.next(number)
      this.dynamicNotificationString.next(text)
      this.dynamicNotificationUrlImg.next(urlImg)
      this.dynamicNotificationSource.next(type);
    }
}