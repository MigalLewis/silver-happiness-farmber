
// surname 
// photo
// location
// description
// experience
// Rating
export class Location {
    public name: string;
    public address: string;
    public main: boolean;

    constructor(name: string, address: string, main: boolean) {
        this.name = name;
        this.address = address;
        this.main = main;
    }
}

export enum CONTACT_TYPE {
    PHONE,
    EMAIL,
    WEBSITE,
    YOUTUBE,
    FACEBOOK,
    TWITTER,
    INSTAGRAM,
    LINKDEN,
    WHATSAPP
}
export enum SOCIAL_MEDIA_TYPE {
    YOUTUBE,
    FACEBOOK,
    TWITTER,
    INSTAGRAM,
    LINKDEN
}
export class SocialMedia {
    public type: SOCIAL_MEDIA_TYPE;
    public link: string;
}
export class PersonOfContact {
    public name: string;
    public roleDescription: string;
    public contacts: Contact[];

    constructor(name: string, roleDescription: string, contacts: Contact[]) {
        this.name = name;
        this.roleDescription = roleDescription;
        this.contacts = contacts;
    }

}

export class Contact {
    public description: string;
    public contactType: CONTACT_TYPE;
    public value: string;

    constructor(description: string, contactType: CONTACT_TYPE, value: string) {
        this.description = description;
        this.contactType = contactType;
        this.value = value;
    }
}

export class Profile {
    public name: string;
    public profileImage: string;
    public logo: string;
    public description: string;
    public experiance: string;
    public rating: number;
    public locations: Location[];
    public contacts: PersonOfContact[];

    constructor(name: string, profileImage: string, logo: string,
        description: string, experiance: string, rating: number,
        locations: Location[], contacts: PersonOfContact[]) {
        this.name = name;
        this.profileImage = profileImage;
        this.logo = logo;
        this.description = description;
        this.experiance = experiance;
        this.rating = rating;
        this.locations = locations;
        this.contacts = contacts;
    }

    getIcon(contactType: CONTACT_TYPE) {
        var image: string;
        switch (contactType) {
            case CONTACT_TYPE.EMAIL:
                image = "assets/email.png";
                break;
            case CONTACT_TYPE.PHONE:
                image = "assets/phone.png";
                break;
                case CONTACT_TYPE.YOUTUBE:
                image = "assets/youtube.png";
                break;
                case CONTACT_TYPE.LINKDEN:
                image = "assets/linkden.png";
                break;
                case CONTACT_TYPE.TWITTER:
                image = "assets/twitter.png";
                break;
                case CONTACT_TYPE.WEBSITE:
                image = "assets/website.png";
                break;
                case CONTACT_TYPE.WHATSAPP:
                image = "assets/whatsapp.png";
                break;
                case CONTACT_TYPE.FACEBOOK:
                image = "assets/facebook.png";
                break;
                case CONTACT_TYPE.INSTAGRAM:
                image = "assets/instagram.png";
                break;
            default: image="assets/generalContact.png"
        }
        return image;
    }

    getContactTypeString() {
        return "Phone";
    }

}