const { Appointment } = require('../models');

exports.createAppointment = async (userId, description, startTime, endTime, personName) => {
  return await Appointment.create({
    userId,
    description,
    startTime,
    endTime,
    personName,
  });
};

exports.updateAppointment = async (appointmentId, description, startTime, endTime, personName) => {
  const appointment = await Appointment.findByPk(appointmentId);

  if (!appointment) {
    throw new Error('Appointment not found');
  }

  appointment.description = description;
  appointment.startTime = startTime;
  appointment.endTime = endTime;
  appointment.personName = personName;

  return appointment.save();
};

exports.deleteAppointment = async (appointmentId) => {
  const appointment = await Appointment.findByPk(appointmentId);

  if (!appointment) {
    throw new Error('Appointment not found');
  }

  return appointment.destroy();
};

exports.getSpecificPersonAppointments = async (userId) => {
  return Appointment.findAll({
    where: { userId },
  });
};
