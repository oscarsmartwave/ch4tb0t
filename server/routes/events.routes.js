import { Router } from 'express';
import * as EventsController from '../controllers/events.controller';
const router = new Router();

router.route('/setup/events').get(EventsController.getEvents);

router.route('/setup/events').post(EventsController.addEvent);

router.route('/setup/events/:cuid').get(EventsController.getEvent);

router.route('/setup/events/:cuid').post(EventsController.updateEvent);

router.route('/setup/events/:cuid').delete(EventsController.deleteEvent);

export default router;
