const appointmentServices = require('../services/appointment');

exports.createAppointment = async (req, res) => {
  try {
    
    const { userId,description, startTime, endTime, personName } = req.body;
    const appointment = await appointmentServices.createAppointment(userId, description, startTime, endTime, personName);
    res.status(201).json({ message: 'Appointment created', appointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create appointment', error });
  }
};


exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, startTime, endTime, personName } = req.body;
    const appointment = await appointmentServices.updateAppointment(id, description, startTime, endTime, personName);
    res.status(200).json({ message: 'Appointment updated', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update appointment', error: error.message });
  }
};

// Delete an appointment by ID
exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await appointmentServices.deleteAppointment(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete appointment', error: error.message });
  }
};

exports.getSpecificPersonAppointments = async (req, res) => {
  try {
    const { userId } = req.user;
    const appointments = await appointmentServices.getSpecificPersonAppointments(userId);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get appointments', error: error.message });
  }
};
