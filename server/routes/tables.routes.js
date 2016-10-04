import { Router } from 'express';
import * as TablesController from '../controllers/tables.controller';
const router = new Router();

router.route('/setup/tables').get(TablesController.getTables);

router.route('/setup/tables').post(TablesController.addTable);

router.route('/setup/tables/add').get(function(req, res) {
	res.json({tables: "Adding Table"});
});

router.route('/setup/tables/:cuid').get(TablesController.getTable);

router.route('/setup/tables/:cuid').post(TablesController.updateTable);

router.route('/setup/tables/:cuid').delete(TablesController.deleteTable);

export default router;
