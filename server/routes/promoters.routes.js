import { Router } from 'express';
import * as PromotersController from '../controllers/promoters.controller';
const router = new Router();

router.route('/setup/promoters').get(PromotersController.getPromoters);

router.route('/setup/promoters').post(PromotersController.addPromoter);

router.route('/setup/promoters/add').get(function(req, res) {
	res.json({promoters: "Adding Promoter"});
});

router.route('/setup/promoters/:cuid').get(PromotersController.getPromoter);

router.route('/setup/promoters/:cuid').post(PromotersController.updatePromoter);

router.route('/setup/promoters/:cuid').delete(PromotersController.deletePromoter);

export default router;
