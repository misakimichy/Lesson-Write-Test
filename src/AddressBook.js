class AddressBook {
   constructor() {
       this.contacts = [];
   }

    addContact(contact) {
        this.contacts.push(contact);
    }

    getContact(index) {
        return this.contacts[index];
    }

    deleteContact(index){
        this.contacts.splice(index, 1);
    }

    getInitialContacts(cb) {
        setTimeout(() => {
            this.initialComplete = true;
            if(cb) {
                return cb();
            }
        }, 3);
    }
}

