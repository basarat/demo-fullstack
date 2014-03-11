var foo = require('../../common/commonTest');

function index(req, res) {
    res.render('index', { title: foo() });
}
exports.index = index;
;
