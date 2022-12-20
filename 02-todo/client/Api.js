class Api {
  url = "";

  constructor(url) {
    this.url = url;
  }
  /* Create = POST*/
  create(data) {
    const JSONData = JSON.stringify(data);
    console.log(`Sending ${JSONData} to ${this.url}`);

    const request = new Request(this.url, {
      method: "POST",
      body: JSONData,
      headers: {
        "content-type": "application/json",
      },
    });


    return fetch(request)
      .then((result) => result.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  getAll() {
    return fetch(this.url)
    .then((result => result.json()))
    .then((data) => data)
    .catch((err) => console.log(err));
  }

  removeEventListener() {}
}
