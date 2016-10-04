import { Router } from 'express';
import * as VenuesController from '../controllers/venues.controller';
const router = new Router();

router.route('/setup/venues').get(VenuesController.getVenues);

router.route('/setup/venues').post(VenuesController.addVenue);

router.route('/setup/venues/:cuid').get(VenuesController.getVenue);

router.route('/setup/venues/:cuid').post(VenuesController.updateVenue);

router.route('/setup/venues/:cuid').delete(VenuesController.deleteVenue);

export default router;
