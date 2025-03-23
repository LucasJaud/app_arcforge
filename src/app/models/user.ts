export class User {
    public id: number;
    public name: String;
    public password: String;
    public email: String;


    constructor(nome: string, email: string, senha: string) {
        this.id = 0;
        this.name = nome;
        this.email = email;
        this.password = senha;
      }
}