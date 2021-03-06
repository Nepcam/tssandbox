interface UserInterface{
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface{
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number){
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: '+this.name);
  }

  register(){
    console.log(this.name+' is now registered');
  }

  payInvoice(){
    console.log(this.name+' paid invoice');
  }
}

class Member extends User{
  id: number;

  constructor(id: number, name: string, email: string, age: number){
    super(name, email, age);
    this.id = id;
  }

  payInvoice(){
    super.payInvoice();
  }
}

// let cam = new User('Cam Nepe', 'cameron.nepe@outlook.com', 44);

// cam.register();

let snoop: User = new Member(1, 'Snoop Dogg', 'snoop@gmail.com', 50);
snoop.payInvoice();
