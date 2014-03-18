var commonTest = require('../../common/commonTest');

function index(req, res) {
    res.render('index', { title: commonTest() });
}
exports.index = index;
;
