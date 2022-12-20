class Api {
    url = '';

    constructor(url) {
        this.url = url;
    }
    /* Create = POST*/
    create(data){

        const JSONData = JSON.stringify(data);
        console.log(`Sending ${JSONData} to ${this.url}`);

        const request = new Request(this.url, {
            method: 'POST',
            body: JSONData,
            headers:{
                'content-type': 'application/json'
            }
        });

        console.log(request);

        fetch(request)
        .then((result) => result.json())
        .then((data) => console.log(data));
    }

    getAll(){}

    removeEventListener(){}
}