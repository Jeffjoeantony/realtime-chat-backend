import { Router } from 'express';
import {
  sendMessage, getAllMessage,
} from '../controllers/message.controller';

const router = Router();

router.post('/messages', sendMessage);
router.get('/messages', getAllMessage);

export default router;