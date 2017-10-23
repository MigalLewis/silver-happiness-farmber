// surname 
// photo
// location
// description
// experience
// Rating
export class Location{
    public name : string;
    public address : string;
    public main : boolean;

    constructor(name :string,address :string,main :boolean){
        this.name=name;
        this.address=address;
        this.main=main;
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
    LINKDEN
}
export enum SOCIAL_MEDIA_TYPE {
    YOUTUBE,
    FACEBOOK,
    TWITTER,
    INSTAGRAM,
    LINKDEN
}
export class SocialMedia {
    public type :SOCIAL_MEDIA_TYPE;
    public link :string;
}
export class PersonOfContact{
    public name : string;
    public roleDescription : string;
    public contacts : Contact[];

    constructor(name :string,roleDescription :string,contacts :Contact[]){
        this.name=name;
        this.roleDescription=roleDescription;
        this.contacts=contacts;
    }

}

export class Contact{
    public description : string;
    public contactType :CONTACT_TYPE;
    public value : string; 

    constructor(description :string,contactType :CONTACT_TYPE,value:string){
        this.description=description;
        this.contactType=contactType;
        this.value=value;
    }
}

export class Profile{
    public name :string;
    public profileImage :string;
    public logo :string;
    public description : string;
    public experiance : string;
    public rating : number;
    public locations : Location[];
    public contacts : PersonOfContact[];
    public socialMedia : SocialMedia[];

    constructor(name :string,profileImage :string,logo :string,
        description : string,experiance : string,rating : number,
        locations : Location[],contacts : PersonOfContact[],socialMedia : SocialMedia[]){
            this.name =name;
            this.profileImage =profileImage;
            this.logo =logo;
            this.description = description;
            this.experiance = experiance;
            this.rating = rating;
            this.locations = locations;
            this.contacts = contacts;
            this.socialMedia = socialMedia;
    }

    getIcon(){
        return "assets/phone.png";
    }

    getContactTypeString(){
        return "Phone";
    }

}