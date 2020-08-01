import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '12312313213132',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12312313213132');
  });

  // it('should not be able to create two appointments at same time', () => {
  //   expect(1 + 2).toBe(3);
  // });
});
