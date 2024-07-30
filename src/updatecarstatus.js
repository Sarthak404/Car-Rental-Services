import { firestore } from './firebase'; // Import your Firebase configuration

const updateCarStatus = async () => {
    const carsCollection = firestore.collection('cars');
    const carsQuerySnapshot = await carsCollection.get();

    const batch = firestore.batch();

    carsQuerySnapshot.forEach((doc) => {
        const carRef = carsCollection.doc(doc.id);
        batch.update(carRef, { status: 'available' }); // Set initial status for existing cars
    });

    await batch.commit();
    console.log('Status updated for all cars.');
};

updateCarStatus().catch((error) => {
    console.error('Error updating car status:', error);
});
