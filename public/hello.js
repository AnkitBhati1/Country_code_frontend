// const api_url = "https://httpbin.org/ip"

function getData() {

    fetch("https://httpbin.org/ip")

        .then(response => response.json())

        .then(data => {

            // make api call to http://ip-api.com/json/$ip to get user location

            const ip_api_url = "http://ip-api.com/json/" + data.origin

            fetch(ip_api_url)

                .then(response => response.json())

                .then(data => {

                    //   send this data to server
                    console.log(data)

                    fetch('/api/hello', {

                        method: 'POST',

                        body: JSON.stringify(data)

                    }).then(response => response.json())

                        .then(data => {

                            console.log(data)

                        })

                })

        })

}

// call the function to make api call

getData()