export default function(message) {

    if (NODE_ENV === 'dev') {
        console.log(message);
    }

    alert(`welcome ${message}`);
};