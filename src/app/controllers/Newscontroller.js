

class Newscontroller {

    //[GET]/news
    index(req, res) {
        res.render('news');
    }

    //[GET]/NEWS/:SLUG
    show(req, res) {
        res.send('NEW DETAIL!!!!!');
    }
}

module.exports = new Newscontroller;