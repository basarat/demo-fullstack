import foo = require('../../common/commonTest');

/* GET home page. */
export function index(req, res) {
    res.render('index', { title: foo() });
};
