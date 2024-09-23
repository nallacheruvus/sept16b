const { Books } = require("./modb");

module.exports.BooksPrototype = function (proto) {
    this.proto = proto;
    this.clone = () => {
        let book = new Books();
        book.name = proto.name;
        book.auth = proto.auth;
        book.pubs = proto.pubs;
        return book;
    }
}