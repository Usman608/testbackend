const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointment');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/appointments',authMiddleware, appointmentsController.createAppointment);


router.put('/appointments/:id', authMiddleware, appointmentsController.updateAppointment);


router.delete('/appointments/:id', authMiddleware, appointmentsController.deleteAppointment);


router.get('/appointments/:username', authMiddleware, appointmentsController.getSpecificPersonAppointments);

module.exports = router;
