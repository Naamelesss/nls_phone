export class AppsArray {
    icon!: string;
    name!: string;
    notification!: number;
    route!: string;
    nameShowed!: boolean;
}

export class ContactsArray {
    firstName!: string;
    lastName!: string;
    number!: string;
    note!: string;
    favoris!: boolean;
}

export class RecentCallsArray {
    number!: string;
    date!: Date;
    missed!: boolean;
    type!: 'call' | 'facetime';
    source!: boolean;
    label?: string;
}

export class MessagesArray {
    source!: boolean;
    number!: string;
    message!: string;
    date!: Date;
    lu!: boolean;
    lowInterval!: boolean;
    firstBubble!: boolean;
}

export class IncomeNotif {
    number!: string;
    text!: string;
    imgUrl!:string;
}