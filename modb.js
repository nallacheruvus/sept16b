module.exports.Books = function (name, auth, pubs) {
    this.name = name;
    this.auth = auth;
    this.pubs = pubs;
    this.toString = function () {
        return `${this.name} ${this.auth} ${this.pubs}`
    }
} 