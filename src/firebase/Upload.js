import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBamf8FYTNrKE6hSKfNImrYZ9NrPvhK7_s",
        authDomain: "socialmediav2.firebaseapp.com",
        projectId: "socialmediav2",
        storageBucket: "socialmediav2.appspot.com",
        messagingSenderId: "322803540334",
        appId: "1:322803540334:web:03cbcce412b871a46aa17f",
        measurementId: "G-5923HRPD2H"
    };
    firebase.initializeApp(firebaseConfig);
}
// Upload file lên Firebase Storage và lấy reference của file đã upload
const uploadToFirebase = async (file) => {
    const storageRef =  firebase.storage().ref(`${file.name}`);

    try {
        // Upload file to Firebase Storage
        const snapshot = await storageRef.put(file);
        // Get URL of the uploaded file
        const url = await snapshot.ref.getDownloadURL();
        return url;
    } catch (error) {
        console.error("Error uploading file to Firebase:", error);
        throw error;
    }
};
export default uploadToFirebase;