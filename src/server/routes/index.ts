///ts:import=commonTest
import commonTest = require('../../common/commonTest'); ///ts:import:generated

/* GET home page. */
export function index(req, res) {
    res.render('index', { title: commonTest() });
};
